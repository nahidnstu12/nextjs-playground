export const getRandomInt = (max) => {
  return Math.floor(Math.random() * max);
};

export const subTitle = (str = "", length = 17) => {
  return str.length > length ? str.substr(0, length) + "..." : str;
};
