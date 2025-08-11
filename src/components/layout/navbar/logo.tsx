import Image from "next/image";
import Link from "next/link";
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-montserrat',
});

export function Logo() {
  return (
    <Link href="/" className="flex items-center space-x-2">
      <Image
        src="/home/logo.svg"
        alt="Logo"
        width={40}
        height={40}
        className="w-10 h-10 rounded-full"
      />
      <span className={`font-bold  text-3xl ${montserrat.className}`}>Furniro</span>
    </Link>
  );
}
