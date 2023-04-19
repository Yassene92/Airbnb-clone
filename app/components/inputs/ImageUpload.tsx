import Image from 'next/image';
import { useCallback } from 'react';
import { CldUploadWidget } from 'next-cloudinary';
import { TbPhotoPlus } from 'react-icons/tb';

declare global {
  var CldUploadWidget: unknown;
}

interface ImageUploadProps {
  onChange: (value: string) => void;
  value: string;
}

const ImageUpload = ({ onChange, value }: ImageUploadProps) => {
  const handleImageUpload = useCallback(
    (result: any) => {
      onChange(result.info.secure_url);
    },
    [onChange]
  );

  return (
    <CldUploadWidget
      onUpload={handleImageUpload}
      uploadPreset="fmi7wxub"
      options={{
        maxFiles: 1,
      }}
    >
      {({ open }) => (
        <div
          onClick={() => open()}
          className="relative flex flex-col items-center justify-center gap-4 p-20 transition border-2 border-dashed cursor-pointer hover:opacity-70 border-neutral-300 text-neutral-600"
        >
          <TbPhotoPlus size={50} />
          <span className="text-sm">Click to upload</span>
          {value && (
            <div className="absolute inset-0 h-full w-sfull ">
              <Image
                src={value}
                alt="upload"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
          )}
        </div>
      )}
    </CldUploadWidget >
  );
};

export default ImageUpload;
