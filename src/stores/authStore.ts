import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface User {
  username: string;
  isAdmin: boolean;
}

interface AuthStore {
  user: User | null;
  login: (username: string, password: string) => boolean;
  logout: () => void;
  signup: (username: string, password: string) => boolean;
}

export const useAuthStore = create<AuthStore>()(
  persist(
    (set) => ({
      user: null,
      login: (username, password) => {
        if (username === 'Admin' && password === '22238042DJns') {
          set({ user: { username, isAdmin: true } });
          return true;
        }
        const users = JSON.parse(localStorage.getItem('users') || '[]');
        const user = users.find((u: any) => u.username === username && u.password === password);
        if (user) {
          set({ user: { username, isAdmin: false } });
          return true;
        }
        return false;
      },
      logout: () => set({ user: null }),
      signup: (username, password) => {
        const users = JSON.parse(localStorage.getItem('users') || '[]');
        if (users.some((u: any) => u.username === username)) {
          return false;
        }
        users.push({ username, password });
        localStorage.setItem('users', JSON.stringify(users));
        set({ user: { username, isAdmin: false } });
        return true;
      },
    }),
    { name: 'auth-storage' }
  )
);