import { Footer } from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

function CustomError() {
  const router = useRouter();

  return (
    <>
      <Navbar />
      <div className="w-full h-[90vh] flex flex-col gap-3 justify-center items-center">
        <Image
          src={`${router.basePath}/error.svg`}
          alt="not found error"
          width={700}
          height={600}
          className="h-[400px]"
        />
        <p className="text-2xl font-bold">Oops! Page not Found</p>
        <p className="text-md text-slate-500">
          We couldn&apos;t find the page you were looking for.
        </p>
        <Link href="/" className="mt-4">
          <p className="text-md font-bold bg-slate-400 hover:bg-slate-600 text-white px-2 py-1 rounded-md">
            Go back to Home
          </p>
        </Link>
      </div>
      <Footer />
    </>
  );
}

export default CustomError;
