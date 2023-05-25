import { API_ENDPOINTS, FIELDS, SEARCH_LIMIT, apiCall } from "../configs/bookApi";

export const fetchRandomBooks = (params) => {
    const offset = params && params.offset ? `&offset=${params.offset}` : ``;
    const limit = params && params.limit ? `&limit=${params.limit}` : ``;
    const url = `${API_ENDPOINTS.randomBooks}${offset}${limit}${FIELDS}`;
    return apiCall(url);
}
export const fetchBookDetails = (key) => {
    return apiCall(`${API_ENDPOINTS.bookDetail}${key}.json`);
}

export const fetchAuthorDetails = (key) => {
    return apiCall(`${API_ENDPOINTS.bookDetail}${key}.json`);
}

export const searchBookByTitle = (text, page) => {
    return apiCall(`${API_ENDPOINTS.bookByTitle}${text}&limit=${SEARCH_LIMIT}&page=${page}&${FIELDS}`);
}

export const searchAuthors = (text) => {
    return apiCall(`${API_ENDPOINTS.bookByAuthor}${text}&fields=key,name&limit=${SEARCH_LIMIT}`);
}

export const searchBooksByAuthors = (key, page) => {
    return apiCall(`${API_ENDPOINTS?.authorBook}&offset=${page}&author=${key}}`);
}