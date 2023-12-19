import Minter from "@/components/Minter";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center space-x-48 p-24">
      <div className="flex flex-col">
        <h1 className="text-4xl font-bold">叼毛</h1>
        <p className="text-xs mt-2 text-gray-400"></p>
        <Image src="/shareQrcode.jpeg" width={360} alt="" height={400} />
        <div className="flex justify-center mb-2">
          </svg>
          <span className="underline"></span>
        </Link>
      </div>
      <Minter />
    </main>
  );
}
