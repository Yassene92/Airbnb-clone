'use client';
import { useMemo, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { SafeUser } from '../types';
import useLoginModal from './useLoginModal';
import { toast } from 'react-hot-toast';

interface FavoriteProps {
  listingId: string;
  currentUser?: SafeUser | null;
}

const useFavorite = ({ listingId, currentUser }: FavoriteProps) => {
  const router = useRouter();
  const loginModal = useLoginModal();

  const handleFavorite = useMemo(() => {
    const list = currentUser?.favoriteIds || [];

    return list.includes(listingId);
  }, [currentUser?.favoriteIds, listingId]);

  const toggleFavorite = useCallback(
    async (e: React.MouseEvent<HTMLDivElement>) => {
      e.stopPropagation();
      if (!currentUser) return loginModal.onOpen();

      try {
        let req;
        if (handleFavorite) {
          req = await fetch(`/api/favorites/${listingId}`, {
            method: 'DELETE',
          });
        } else {
          req = await fetch(`/api/favorites/${listingId}`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              Accept: 'application/json',
            },
          });
        }
        router.refresh();
        toast.success('success');
      } catch (error) {
        toast.error('Something went wrong');
      }
    },
    [currentUser, handleFavorite, listingId, loginModal, router]
  );
  return { handleFavorite, toggleFavorite };
};

export default useFavorite;
