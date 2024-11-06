import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export const useDataQuery = (url) => {
  return useQuery(['data', url], async () => {
    const { data } = await axios.get(url);
    return data;
  });
};
