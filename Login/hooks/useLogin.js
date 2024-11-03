import { useState } from 'react';
import { auth } from '../../../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';

export const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const login = async (email, password) => {
    setLoading(true);
    setError(null);

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log('Успішний вхід:', userCredential.user);
    } catch (err) {
      setError('Не вдалося увійти. Перевірте дані.');
    } finally {
      setLoading(false);
    }
  };

  return { login, loading, error };
};
