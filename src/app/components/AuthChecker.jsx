"use client"
import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';

const AuthChecker = ({ children }) => {
  const { data: session, status } = useSession({
    required: true,
    onUnauthenticated() {
      redirect('/');
    },
  });

  if (status === 'loading') {
    return <div>Carregando...</div>;
  }

  return children;
};

export default AuthChecker;

