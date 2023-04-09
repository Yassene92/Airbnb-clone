
import Image from "next/image";

const Avatar = () => {
  return (
  <Image 
  className="rounded-full fill-gray-700"
  src="/images/placeholder.jpg"
  alt="Avatar"
  width={30}
  height={30}
  
  />
  );
}

export default Avatar;