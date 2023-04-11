'use client';
import { useCallback, useEffect, useRef, useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import Avatar from '../Avatar';
import MenuItem from './MenuItem';

import useSignUpModal from '@/app/hooks/useSignUpModal';
import useLoginModal from '@/app/hooks/useLoginModal';
import { signOut } from 'next-auth/react';
import { SafeUser } from '@/app/types';

type UserMenuProps = {
  currentUser?: SafeUser | null;
};

const UserMenu = ({ currentUser }: UserMenuProps) => {
  const signUpModal = useSignUpModal();
  const loginModal = useLoginModal();
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);

  const closeMenu = useCallback(() => {
    setIsOpen(false);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        closeMenu();
      }
    };
    window.addEventListener('click', handleClickOutside);
    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  }, [closeMenu]);

  return (
    <div className="relative" ref={menuRef}>
      <div className="flex items-center gap-3">
        <div
          onClick={() => {}}
          className="hidden px-4 py-3 text-sm font-semibold transition rounded-full cursor-pointer md:block hover:bg-neutral-100"
        >
          Airbnb your home
        </div>
        <div
          className="flex items-center gap-3 p-4 transition border rounded-full cursor-pointer md:py-1 md:px-2 border-neutral-200 hover:shadow-md"
          onClick={toggleOpen}
        >
          <AiOutlineMenu />
          <div className="hidden md:block ">
            <Avatar src={currentUser?.image} />
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="absolute shadow-md rounded-xl w-[40vh] md:w-3/4 bg-white overflow-hidden right-0 top-12 text-start  ">
          <div className="flex flex-col cursor-pointer">
            {currentUser ? (
              <>
                <MenuItem onClick={()=> {}} label="My trips" />
                <MenuItem onClick={()=> {}} label="My favorites" />
                <MenuItem onClick={()=> {}} label="My reservations" />
                <MenuItem onClick={()=> {}} label="My properties" />
                <MenuItem onClick={()=> {}} label=" Airbnb my home" />
                <hr/>
                <MenuItem onClick={()=> signOut()} label="Logout" />
              </>
            ) : (
              <>
                <MenuItem onClick={loginModal.onOpen} label="Login" />
                <MenuItem onClick={signUpModal.onOpen} label="Sign up" />
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
