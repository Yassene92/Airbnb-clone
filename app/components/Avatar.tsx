import Image from 'next/image';

type AvatarProps = {
  src: string | null | undefined;
};

const Avatar = ({ src }: AvatarProps) => {
  return (
    <Image
      className="rounded-full fill-gray-700"
      src={src || '/images/placeholder.jpg'}
      alt="Avatar"
      width={30}
      height={30}
    />
  );
};

export default Avatar;
