export const url = "http://localhost:3005/api/v1";

export const setHeaders = () => {
  const headers = {
    headers: {
      autorization: localStorage.getItem("token"),
    },
  };

  return headers;
};
