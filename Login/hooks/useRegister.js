import { useState } from 'react';
import { auth } from '../../../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { saveUserData } from './useFirestore';

export const useRegister = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const register = async (email, password) => {
    setLoading(true);
    setError(null);

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      console.log('Успішна реєстрація:', userCredential.user);
      
      const userId = userCredential.user.uid;
      const userData = {
        email,
      };
      await saveUserData(userId, userData);
    } catch (err) {
      if (err.code === 'auth/email-already-in-use') {
        setError('Ця електронна адреса вже використовується.');
      } else {
        setError('Не вдалося зареєструватися. Спробуйте ще раз.');
      }
    } finally {
      setLoading(false);
    }
  };

  return { register, loading, error };
};
