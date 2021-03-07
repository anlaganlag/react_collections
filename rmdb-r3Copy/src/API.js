import {
  SEARCH_BASE_URL,
  POPULAR_BASE_URL,
  API_URL,
  API_KEY,
  REQUEST_TOKEN_URL,
  LOGIN_URL,
  SESSION_ID_URL,
} from './config';


//简单来理解就是fetch的第二个参数...
//包含了需要的mehtod和headers..body credentials mode cache ..都是可选..
//这里也只选择了body 后面还选择了credentials.. 
const fetchBaseConfig = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
};

const API = {
  fetchMovies: async (searchTerm, page) => {
    const endpoint = searchTerm
      ? `${SEARCH_BASE_URL}${searchTerm}&page=${page}&language=zh-CN`
      : `${POPULAR_BASE_URL}&page=${page}&language=zh-CN`;
    return await (await fetch(endpoint)).json();
  },
  fetchMovie: async (movieId) => {
    const endpoint = `${API_URL}movie/${movieId}?api_key=${API_KEY}&language=zh-CN`;
    return await (await fetch(endpoint)).json();
  },
  fetchCredits: async (movieId) => {
    const creditsEndpoint = `${API_URL}movie/${movieId}/credits?api_key=${API_KEY}&language=zh-CN`;
    return await (await fetch(creditsEndpoint)).json();
  },
  // Bonus material below for login
  getRequestToken: async () => {
    const reqToken = await (await fetch(REQUEST_TOKEN_URL)).json();
    return reqToken.request_token;
  },
  authenticate: async (requestToken, username, password) => {
    const bodyDataPartOfFetchInit = {
      username,
      password,
      request_token: requestToken,
    };
    // First authenticate the requestToken
    const data = await (
      //fetch的两个参数一个是url..一个是obj包括基本的配置..
      //比如method和headers.. 加上后面的body...
      await fetch(LOGIN_URL, {
        ...fetchBaseConfig,
        //body居然要字符串化..
        body: JSON.stringify(bodyDataPartOfFetchInit),
      })
    ).json();
    // Then get the sessionId with the requestToken
    if (data.success) {
      const sessionId = await (
        await fetch(SESSION_ID_URL, {
          ...fetchBaseConfig,
          body: JSON.stringify({ request_token: requestToken }),
        })
      ).json();
      return sessionId;
    }
  },
};

export default API;