---
title: Building a Clipboard History Tui App for macOS with Swift
date: 2026-07-13T00:00:00Z
lang: en
duration: 10min
description: How I built a lightweight clipboard history app for macOS using Swift, AppKit, SQLite, and LaunchAgents.
---

I wanted a clipboard history tool that stayed out of the way, consumed almost no resources, and kept a searchable history of everything I copied. Instead of installing another third-party application, I decided to build one from scratch using Swift.

The project consists of a small background daemon that watches the macOS clipboard and stores copied text into SQLite. A future UI can simply read from the same database.

![clipboard history](/gif/clipboard-history.gif)

## Project structure

The project is a Swift Package with a simple structure:

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

The executable is responsible for monitoring clipboard changes and writing them into the local database.

## Watching the macOS clipboard

macOS exposes the system clipboard through `NSPasteboard`.

Rather than relying on undocumented APIs or polling every few milliseconds, the app periodically checks the pasteboard's `changeCount`. Whenever the value changes, something new has been copied.

```swift
let pasteboard = NSPasteboard.general

if pasteboard.changeCount != previousChangeCount {
    previousChangeCount = pasteboard.changeCount

    if let text = pasteboard.string(forType: .string) {
        saveClipboard(text)
    }
}
```

This approach is simple, lightweight, and avoids unnecessary work when nothing changes.

## Running as a background daemon

Instead of opening a visible application window, the project runs as a background process.

The main entry point starts the clipboard watcher and keeps the application's run loop alive.

```swift
let watcher = ClipboardWatcher()

watcher.start()

RunLoop.main.run()
```

Because the process never exits, it continues monitoring clipboard events for the entire login session.

## Persisting clipboard history with SQLite

Keeping clipboard entries only in memory would lose everything after restarting the computer.

SQLite provides a lightweight database without requiring a separate server.

Each copied item is stored with its content and timestamp.

```sql
CREATE TABLE clipboard_history (
    id INTEGER PRIMARY KEY,
    content TEXT NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);
```

Whenever new text is detected, the daemon inserts a new row.

```swift
database.insert(text)
```

SQLite is fast enough for this workload and keeps the entire application self-contained.

## Avoiding duplicate entries

One issue became obvious during testing.

Applications sometimes write the same clipboard content multiple times, which would quickly fill the history with duplicates.

Before inserting a new record, the daemon compares it with the most recent clipboard entry.

```swift
if latestClipboard != newClipboard {
    database.insert(newClipboard)
}
```

This simple check keeps the history much cleaner while preserving meaningful clipboard changes.

## Starting automatically after login

A clipboard manager is only useful if it starts automatically.

macOS LaunchAgents make this straightforward.

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

After loading the LaunchAgent, macOS starts the daemon automatically every time I log in.

The process runs quietly in the background without requiring Terminal to remain open.

## Challenges during development

Most of the project itself was straightforward. The harder part was learning the macOS runtime environment.

Some issues I encountered included:

- Importing SQLite correctly inside Swift Package Manager.
- Running AppKit code without creating a visible application window.
- Keeping the process alive using the main run loop.
- Configuring LaunchAgents correctly.
- Handling Swift concurrency warnings when interacting with AppKit.
- Making sure clipboard polling remained lightweight.

Each problem was relatively small, but together they provided a good introduction to native macOS development.

## Future improvements

The daemon is intentionally minimal, but there are many possible improvements:

- Search clipboard history.
- Pin frequently used snippets.
- Favorite clipboard items.
- Ignore sensitive data such as passwords.
- Sync history across devices.
- Add a menu bar application.
- Support images and files in addition to plain text.
- Add keyboard shortcuts for quick paste.

Because the clipboard monitoring and database layers are already separated, building a user interface later should require very little additional work.

## Final thoughts

This project started as a small utility to solve a personal annoyance, but it became a great way to learn native macOS development.

Using AppKit, SQLite, and LaunchAgents made it possible to build a lightweight clipboard manager that consumes very few resources while running continuously in the background.

Sometimes the best side projects are the ones you end up using every day. Building your own tools not only teaches platform-specific APIs, but also gives you complete control over how they behave.

Thanks for reading.

### Reference

[https://github.com/ttiimmothy/clipboard-history](https://github.com/ttiimmothy/clipboard-history)