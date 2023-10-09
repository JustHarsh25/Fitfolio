// export const exerciseOptions = {
//   method: 'GET',
//   headers: {
//     'X-RapidAPI-Key': 'cd4d2d4eaamsh76b1529c892ec24p1c7135jsnb9eadb47a3f8',
//     'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
//   }
// };

const axios = require('axios');

export const exerciseOptions = {
  method: 'GET',
  url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPart/',
  params: {limit: '10'},
  headers: {
    'X-RapidAPI-Key': '363905ae51mshb060cb4abec3452p1c65c3jsne67e9bb7bed8',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'

  }
};

try {
	const response = await axios.request(exerciseOptions);
	console.log(response.data);
} catch (error) {
	console.error(error);
}

export const youtubeOptions = {
  method: 'GET',
  url: 'https://youtube-search-and-download.p.rapidapi.com/channel/about',
  params: {
    id: 'UCE_M8A5yxnLfW0KghEeajjw'
  },
  headers: {
    'X-RapidAPI-Key': '363905ae51mshb060cb4abec3452p1c65c3jsne67e9bb7bed8',
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(youtubeOptions);
	console.log(response.data);
} catch (error) {
	console.error(error);
}

export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();

  return data;
};
