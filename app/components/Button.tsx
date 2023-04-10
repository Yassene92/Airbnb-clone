import { IconType } from 'react-icons/lib';

type ButtonProps = {
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  label?: string;
  disabled?: boolean;
  outline?: boolean;
  small?: boolean;
  icon?: IconType;
};
const Button = ({
  label,
  onClick,
  disabled,
  outline,
  small,
  icon: Icon,
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`relative w-full transition rounded-lg disabled:opacity-70 disabled:cursor-not-allowed hover:opacity-80 
   ${outline ? 'bg-white' : 'bg-rose-500'}
   ${outline ? 'border-black ' : 'border-rose-500'}
   ${outline ? 'text-black' : 'text-white'}
   ${small ? 'py-1' : 'py-3'}
   ${small ? 'text-sm' : 'text-base'}
   ${small ? 'font-light ' : 'font-semibold'}
   ${small ? 'border ' : 'border-2 '}
   `}
    >
      {Icon && <Icon size={24} className="absolute left-4 top-3" />}
      {label}
    </button>
  );
};

export default Button;
