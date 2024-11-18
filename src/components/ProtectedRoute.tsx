import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuthStore } from '../stores/authStore';

interface Props {
  children: ReactNode;
}

export default function ProtectedRoute({ children }: Props) {
  const { user } = useAuthStore();

  if (!user?.isAdmin) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
}