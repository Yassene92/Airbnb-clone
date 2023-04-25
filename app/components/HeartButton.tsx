import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { SafeUser } from '../types';
import useFavorite from '../hooks/useFavorite';

interface HeartButtonProps {
  listingId: string;
  currentUser?: SafeUser | null;
}
const HeartButton = ({ currentUser, listingId }: HeartButtonProps) => {
  const { handleFavorite, toggleFavorite } = useFavorite({
    listingId,
    currentUser,
  });

  return (
    <div
      onClick={toggleFavorite}
      className="relative transition hover:opacity-80 curpor-pointer"
    >
      <AiOutlineHeart
        size={28}
        className="absolute fill-white -top-[2px] -right-[2px] "
      />
      <AiFillHeart
        size={24}
        className={handleFavorite ? 'fill-rose-500' : 'fill-neutral-500/70'}
      />
    </div>
  );
};

export default HeartButton;
