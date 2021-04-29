import axios from 'axios';

export const Get = async (url) => {
      return await axios.get(url, {
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjE4OTIxNjk0LCJleHAiOjE2MjE1MTM2OTR9.kDNU3nR0szomECBH8kRsUfgH8x_2QpAnjD_wdGPi1mo`
        }
      });
};

export const Post = async (url, data) => {
  try {
    const session = JSON.parse(getStore().session);
    if (session.loggedIn) {
      return await axios.post(url, data, {
        headers: {
          Authorization: `Bearer ${session.token}`
        }
      });
    }
    return await axios.post(url, data);
  } catch (error) {
    return error.response;
  }
};

export const Put = async (url, data) => {
  try {
    const session = JSON.parse(getStore().session);
    if (session.loggedIn) {
      return await axios.put(url, data, {
        headers: {
          Authorization: `Bearer ${session.token}`
        }
      });
    }
    return await axios.put(url, data);
  } catch (error) {
    return error.response;
  }
};

export const Delete = async (url) => {
  try {
    const session = JSON.parse(getStore().session);
    if (session.loggedIn) {
      return await axios.delete(url, {
        headers: {
          Authorization: `Bearer ${session.token}`
        }
      });
    }
    return await axios.delete(url);
  } catch (error) {
    return error.response;
  }
};

export const parseErrors = (response) => {
  return response.data.message[0].messages[0].message;
};
