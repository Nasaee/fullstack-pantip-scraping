import axios from 'axios';
import { ContentsResponseType } from '../../backend/src/share-type';

export const API_URL = import.meta.env.VITE_API_URL || '';

export async function getContents(page: number): Promise<ContentsResponseType> {
  const queryParams = new URLSearchParams();
  queryParams.append('page', page.toString() || '');

  try {
    const response = await axios.get(`${API_URL}/api/contents?${queryParams}`);
    return response.data as ContentsResponseType;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data.message);
    } else {
      throw new Error('Getting contents failed');
    }
  }
}
