export const api = {
  fashionApi: {
    baseUrl: "http://localhost:3001/api/v2",
    fashions: "fashions",
    dataWithId: "fashions/{{id}}",
  },
  suitApi: {
    baseUrl: "http://localhost:3001/api/v2",
    suits: "suits",
    dataWithId: "suits/{{id}}",
  },
  newsApi: {
    baseUrl: "http://localhost:3001/api/v2",
    news: "news",
    dataWithId: "news/{{id}}",
  },
  commentsApi: {
    baseUrl: "http://localhost:3001/api/v2",
    comments: "comments",
    dataWithId: "news/{{id}}",
  },
};
