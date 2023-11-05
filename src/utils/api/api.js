import axios from 'axios';

const apiData = axios.create({
  baseURL: 'https://api.aqualifier.cloud',
});

const getData = async (endpoint) => {
  try {
    const response = await apiData.get(`/api/${endpoint}`);
    return response.data;
  } catch (error) {
    console.error('Gagal mengambil data dari API:', error);
    return null;
  }
};

// Export semua fungsi yang diperlukan
export { 
  getData,
};
