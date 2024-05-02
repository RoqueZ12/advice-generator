const getDataApi = async () => {
  try {
    const timestamp = Date.now(); // Obtenemos el timestamp actual
    const resp = await fetch(`https://api.adviceslip.com/advice?timestamp=${timestamp}`);
    const data = await resp.json();
    return data.slip;
  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
};

export { getDataApi };
