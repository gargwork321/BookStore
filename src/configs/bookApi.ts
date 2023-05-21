import axios from 'axios';
const bookBaseUrl: string = 'https://openlibrary.org';
const coverBaseUrl: string = 'https://covers.openlibrary.org';

// has_fulltext:true
// key,title,cover_i,first_publish_year,edition_count,contributor
// const randomBookEndpoint = params => `https://openlibrary.org/search.json?q=${params.hasFullTextFlag}&offset=${params.offset}&limit=${params.limit}&fields=${params.fields}`
const FIELDS = encodeURI(
    '&fields=key,title,cover_i,first_publish_year,ratings_average,title_sort,author_name,publish_date',
  );
export const API_ENDPOINTS = {
    randomBooks: bookBaseUrl + `/search.json?q=has_fulltext:true`,
    bookThumbnail: coverBaseUrl + '/b/id/',
    bookDetail: `${bookBaseUrl}`,
};

const apiCall = async(endPoint) => {
    console.log('endpoint hitting:',endPoint)
    const options = {
            method: 'GET',
            url: endPoint
    }
    try {
        const response = await axios.request(options);
        return response.data;
    }catch(err) {
        console.log(err);
        return null;
    }
}


export const fetchRandomBooks = (params) => {
    const offset = params && params.offset ? `&offset=${params.offset}` : ``;
    const limit = params && params.limit ? `&limit=${params.limit}` : ``;
    const url = `${API_ENDPOINTS.randomBooks}${offset}${limit}${FIELDS}`;
    console.log('fromed',url, params)
    return apiCall(url);
}
export const fetchBookDetails = (key) => {
    return apiCall(`${API_ENDPOINTS.bookDetail}${key}.json`);
}

export const fetchAuthorDetails = ( ) => {
    return apiCall(`${API_ENDPOINTS.bookDetail}${key}.json`);
}