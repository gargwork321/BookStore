import axios from 'axios';
export const bookBaseUrl: string = 'https://openlibrary.org';
export const coverBaseUrl: string = 'https://covers.openlibrary.org';


export const SEARCH_LIMIT = 10;
export const FIELDS = encodeURI(
    '&fields=key,title,cover_i,first_publish_year,ratings_average,title_sort,author_name,publish_date',
  );
export const API_ENDPOINTS = {
    randomBooks: bookBaseUrl + `/search.json?q=has_fulltext:true`,
    bookThumbnail: coverBaseUrl + '/b/id/',
    bookByTitle: bookBaseUrl + `/search.json?title=`,
    bookByAuthor: bookBaseUrl + `/search/authors.json?q=`,
    bookDetail: bookBaseUrl,
    authorBook: bookBaseUrl + `/search.json?${FIELDS}&limit=${SEARCH_LIMIT}`,
};

export const apiCall = async(endPoint) => {
    // console.log('endpoint hitting:',endPoint)
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


