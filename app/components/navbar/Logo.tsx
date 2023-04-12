'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const Logo = () => {
  const router = useRouter();
  return (
    <Image
      onClick={() => router.push('/')}
      alt="logo"
      src="/images/logo.png"
      width={100}
      height={100}
      className="hidden w-auto h-auto cursor-pointer md:block"
      priority
    />
  );
};

export default Logo;
