import axios from "axios";

// url = "/posts?_sort=createdAt&_order=desc";

export const request = axios.create({
  baseURL: process.env.POST_API_URL,
  headers: { Authorization: "eyJhbGciOiJ" },
  //   headers: { "X-Auth-Token": "eyJhbGciOiJ" },
});

export const getData = async (url, token) => {
  try {
    const { data } = await request.get(`${url}`);
    //  console.log(data);
    return data;
  } catch (err) {
    return err.message;
  }
};

export const postData = async (url, post, token) => {
  try {
    await request.post(`${url}`, {
      ...post,
    });
    // return data;
  } catch (err) {
    return err.message;
  }
};

export const putData = async (url, post, token) => {
  try {
    await request.put(`${url}`, {
      ...post,
    });
    // return data;
  } catch (err) {
    return err.message;
  }
};

export const patchData = async (url, post, token) => {
  try {
    await request.put(`${url}`, {
      ...post,
    });
    // return data;
  } catch (err) {
    return err.message;
  }
};

export const deleteData = async (url, token) => {
  try {
    await request.delete(url);
  } catch (err) {
    return err.message;
  }
};
