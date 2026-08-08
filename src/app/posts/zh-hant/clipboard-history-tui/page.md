---
title: 使用 Swift 為 macOS 建立剪貼簿歷史 TUI 應用程式
date: 2026-07-13T00:00:00Z
lang: zh-Hant
duration: 10min
description: 我如何使用 Swift、AppKit、SQLite 和 LaunchAgents 為 macOS 建立輕量的剪貼簿歷史應用程式。
---

我想要一個不會打擾工作、幾乎不耗用資源，並能保留所有複製內容以供搜尋的剪貼簿歷史工具。我沒有安裝另一套第三方應用程式，而是決定使用 Swift 從頭打造一個。

此專案由一個小型背景 daemon 組成，它會監看 macOS 剪貼簿並將複製的文字儲存到 SQLite。未來的 UI 只要讀取同一個資料庫即可。

![clipboard history](/gif/clipboard-history.gif)

## 專案結構

此專案是一個結構簡單的 Swift Package：

```text
clipboard_history/
├── Package.swift
├── Sources/
│   └── clipboard_history/
│       ├── main.swift
│       ├── ClipboardWatcher.swift
│       ├── Database.swift
│       └── Models.swift
└── Resources/
```

此可執行檔負責監控剪貼簿變更，並將內容寫入本機資料庫。

## 監看 macOS 剪貼簿

macOS 透過 `NSPasteboard` 提供系統剪貼簿。

應用程式不依賴未記錄的 API，也不每幾毫秒輪詢一次，而是定期檢查 pasteboard 的 `changeCount`。只要數值變更，就表示有新內容被複製。

```swift
let pasteboard = NSPasteboard.general

if pasteboard.changeCount != previousChangeCount {
    previousChangeCount = pasteboard.changeCount

    if let text = pasteboard.string(forType: .string) {
        saveClipboard(text)
    }
}
```

這種做法簡單、輕量，並能在沒有任何變更時避免不必要的工作。

## 作為背景 daemon 執行

專案不開啟可見的應用程式視窗，而是作為背景程序執行。

主進入點會啟動剪貼簿監看器，並讓應用程式的 run loop 持續運行。

```swift
let watcher = ClipboardWatcher()

watcher.start()

RunLoop.main.run()
```

由於程序不會結束，它會在整個登入工作階段中持續監控剪貼簿事件。

## 使用 SQLite 持久化剪貼簿歷史

如果剪貼簿項目只保留在記憶體中，重新啟動電腦後就會遺失所有內容。

SQLite 提供輕量資料庫，不需要額外的伺服器。

每個複製項目都會連同內容和時間戳記一併儲存。

```sql
CREATE TABLE clipboard_history (
    id INTEGER PRIMARY KEY,
    content TEXT NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);
```

每當偵測到新文字時，daemon 就會插入一筆新資料列。

```swift
database.insert(text)
```

SQLite 的速度足以應付這類工作負載，並讓整個應用程式保持自給自足。

## 避免重複項目

測試期間很快就發現了一個問題。

應用程式有時會多次寫入相同的剪貼簿內容，這會很快讓歷史記錄充滿重複項目。

在插入新紀錄之前，daemon 會將它與最新的剪貼簿項目比較。

```swift
if latestClipboard != newClipboard {
    database.insert(newClipboard)
}
```

這個簡單檢查能讓歷史記錄更整潔，同時保留有意義的剪貼簿變更。

## 登入後自動啟動

剪貼簿管理器只有在自動啟動時才有用。

macOS LaunchAgents 讓這件事變得很直接。

```xml
<key>ProgramArguments</key>
<array>
    <string>/usr/local/bin/clipboard_history</string>
</array>

<key>RunAtLoad</key>
<true/>

<key>KeepAlive</key>
<true/>
```

載入 LaunchAgent 後，每次登入時 macOS 都會自動啟動 daemon。

此程序會安靜地在背景執行，不需要讓 Terminal 保持開啟。

## 開發期間的挑戰

專案本身大多很直接，較困難的部分是學習 macOS 的執行環境。

我遇到的一些問題包括：

- 在 Swift Package Manager 中正確匯入 SQLite。
- 執行 AppKit 程式碼時不建立可見的應用程式視窗。
- 使用主 run loop 讓程序持續運行。
- 正確設定 LaunchAgents。
- 與 AppKit 互動時處理 Swift 並行警告。
- 確保剪貼簿輪詢維持輕量。

每個問題都相對小，但合在一起讓我對原生 macOS 開發有了很好的入門認識。

## 未來改善方向

這個 daemon 有意維持精簡，但仍有許多可改善之處：t

- 搜尋剪貼簿歷史。
- 釘選常用片段。
- 將剪貼簿項目加入最愛。
- 忽略密碼等敏感資料。
- 在裝置間同步歷史記錄。
- 新增選單列應用程式。
- 除了純文字外，也支援圖片和檔案。
- 新增快速貼上的鍵盤快速鍵。

由於剪貼簿監控和資料庫層已經分離，日後建立使用者介面應只需要很少的額外工作。

## 結語

這個專案起初只是為了解決個人困擾的小工具，卻成為學習原生 macOS 開發的絕佳方式。

AppKit、SQLite 和 LaunchAgents 讓我能建立一個輕量的剪貼簿管理器，它持續在背景執行，同時只耗用極少資源。

有時最好的 side project，就是你最後每天都會使用的專案。打造自己的工具不僅能學習平台專屬 API，也能讓你完全掌控它們的行為。

感謝閱讀。

### 參考資料

[https://github.com/ttiimmothy/clipboard-history](https://github.com/ttiimmothy/clipboard-history)
