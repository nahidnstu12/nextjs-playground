export const BaseUrl = "https://fakestoreapi.com";
// export const BaseUrl = process.env.NEXT_PUBLIC_API_URL;
// export const BaseUrl = process.env.API_URL;

export const getData = async (url, token) => {
  const res = await fetch(`${BaseUrl}/${url}`, {
    method: "GET",
    headers: {
      Authorization: token,
    },
  });
  const data = await res.json();
  return data;
};

export const postData = async (url, userData, token) => {
  console.log(`${BaseUrl}/${url}`);
  const res = await fetch(`${BaseUrl}/${url}`, {
    method: "POST",
    headers: {
      'Authorization': token,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });
  const data = await res.json();
  return data;
};
