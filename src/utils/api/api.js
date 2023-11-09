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

const callbackTest = (updateCallback) => {
  const eventSource = new EventSource(`${apiData}/get/voltage`);

  eventSource.onmessage = (event) => {
    updateCallback(JSON.parse(event.data));
  };

  eventSource.onerror = (error) => {
    // Handle errors
    console.error('SSE Error:', error);
    eventSource.close();
  };
};

// Export semua fungsi yang diperlukan
export { 
  getData,
  callbackTest
};
