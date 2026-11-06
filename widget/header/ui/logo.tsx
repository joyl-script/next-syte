import Image from 'next/image';
import Link from 'next/link';

export const Logo = () => {
  return (
    <Link href="/" className="flex items-center gap-2">
      <Image src="/next-syte/plant 1.svg" alt="Ecobazar logo" width={28} height={28} />
      <span className="text-xl font-bold text-[#1A1A1A]">Ecobazar</span>
    </Link>
  );
};