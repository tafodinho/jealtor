import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';
export const fetchApi = async (url, params) => {
  console.log("url", url)
  const options = {
    method: 'GET', 
    url,
    params,
    headers: {
      'X-RapidAPI-Key': process.env.NEXT_PUBLIC_RAPID_API_KEY,
      'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
    }
  }
  try {
    const response = await axios.request(options);
    console.log(response)
    return response.data;
  } catch(error) {
    console.log("res", error)
  }
  
}