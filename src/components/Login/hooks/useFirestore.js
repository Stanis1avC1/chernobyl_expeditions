import { db } from '../../../firebase'; 
import { doc, setDoc } from 'firebase/firestore';

export const saveUserData = async (userId, userData) => {
  try {
    await setDoc(doc(db, 'users', userId), userData);
    console.log('Дані користувача збережено');
  } catch (error) {
    console.error('Помилка при збереженні даних:', error);
  }
};