import axios from 'axios';

interface ReturnGetKeyCharles {
  code: number
  key: string
  name: string
}

export async function getKeyCharles(name: string): Promise<ReturnGetKeyCharles> {
  const postData = new URLSearchParams({
    name
  });

  try {
    const response = await axios.post('https://www.zzzmode.com/api/v2/ck', postData.toString())
    return response.data
  } catch (error) {
    console.error('There was an error!', error);
    throw error
  }
}

