'use client';
import { useState, useCallback } from 'react';
import axios from 'axios';
import { AiFillGithub } from 'react-icons/ai';
import { FcGoogle } from 'react-icons/fc';
import {
  FieldError,
  FieldValues,
  SubmitHandler,
  useForm,
} from 'react-hook-form';
import useSignUpModal from '@/app/hooks/useSignUpModal';
import Modal from './Modal';
import Heading from '../Heading';
import Input from '../inputs/Input';
import { toast } from 'react-hot-toast';
import Button from '../Button';
import { signIn } from 'next-auth/react';

const SignUpModal = () => {
  const signUpModal = useSignUpModal();
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    setIsLoading(true);
    await axios
      .post('/api/register', data)
      .then(() => {
        signUpModal.onClose();
      })
      .catch((error) => {
        toast.error('Something went wrong.');
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const badyContent = (
    <div className="flex flex-col gap-4">
      <Heading title="Welcome to the Airbnb" subtitle="Create an account?" />
      <Input
        id="email"
        label="Email"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Input
        id="name"
        label="Name"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Input
        id="password"
        type="password"
        label="Password"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
    </div>
  );

  const footerContent = (
    <div className="flex flex-col gap-4 mt-3">
      <hr />
      <Button
        outline
        label="Continue with Google"
        icon={FcGoogle}
        onClick={() => signIn('google')}
      />
      <Button
        outline
        label="Continue with Github"
        icon={AiFillGithub}
        onClick={() => signIn('github')}
      />
      <div className="flex items-center justify-center gap-2 mt-4 font-light text-neutral-500">
        <span>Already have an account?</span>
        <span
          onClick={signUpModal.onClose}
          className="cursor-pointer text-neutral-800 hover:underline"
        >
          Log in
        </span>
      </div>
    </div>
  );

  return (
    <Modal
      disabled={isLoading}
      onSubmit={handleSubmit(onSubmit)}
      isOpen={signUpModal.isOpen}
      onClose={signUpModal.onClose}
      title="Register"
      actionLabel="Continue"
      body={badyContent}
      footer={footerContent}
    />
  );
};

export default SignUpModal;
