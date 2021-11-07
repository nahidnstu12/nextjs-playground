export const teammates = [
  {
    name: "Asif Mahmud",
    position: "CEO & Developer",
    gmail: "asif@gmail.com",
    phone: "+016218876123",
    img: "./img/profile/asif.PNG",
  },
  {
    name: "Nahid Islam",
    position: "IT Specialist",
    gmail: "nahid@gmail.com",
    phone: "+016218876123",
    img: "./img/profile/nahid.PNG",
  },
  {
    name: "Forhad Khan",
    position: "UI Developer",
    gmail: "forhad@gmail.com",
    phone: "+016218876123",
    img: "./img/profile/forhad.PNG",
  },
  {
    name: "Rubel Hossain",
    position: "Sales Manager",
    gmail: "rubel@gmail.com",
    phone: "+016218876123",
    img: "./img/profile/rubel.png",
  },
];

// longCard
export const longProduct = {
  id: 1,
  productName: "Men's Clothing",
  imgUrl: "/img/products/p-1.png",
  totalViews: "230",
  reviewCount: "4",
  price: "230",
  oldPrice: "260",
};
// flickproduct
export const data = {
  id: 1,
  title: "Men's Clothing",
  image: "/img/products/p-1.png",
  totalViews: "230",
  reviewCount: "4",
  price: "230",
  oldPrice: "260",
  description:
    "While prerendering a page an error occurred. This can occur for many reasons from adding non-pages e.g. components to your pages folder or expecting props to be populated which are not.",
};

export const NeatBannar = [
  {
    id: 1,
    reviewCount: 3,
    foodTitle: "Spicy Noodle",
    foodDescript:
      "Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Sit Natus Dolor Cumque?",
    imgUrl: "img/bannar/home-img-1.png",
  },
  {
    id: 2,
    reviewCount: 4,
    foodTitle: "Fried Chicken",
    foodDescript:
      "Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Sit Natus Dolor Cumque?",
    imgUrl: "img/bannar/home-img-2.png",
  },
  {
    id: 3,
    reviewCount: 1,
    foodTitle: "Hot Pizza",
    foodDescript:
      "Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Sit Natus Dolor Cumque?",
    imgUrl: "img/bannar/home-img-3.png",
  },
];
// navLinks name
export const navlinks = [
  { label: "Home", path: "/" },
  { label: "SWR", path: "/swr" },
  { label: "Shop Redux", path: "/shopredux" },
  // { label: "Portfolio", path: "portfolios" },
  // { label: "Team", path: "teams" },
  // { label: "Pricings", path: "pricings" },
  { label: "Shop Context", path: "/shopcontext" },
  { label: "Register", path: "/register" },
  { label: "Login", path: "/login" },
  { label: "Logout", path: "/logout" },
];

// shop products
export const shopProducts = [
  {
    id: "1",
    title: "Islami Akida",
    price: "350",
  },
  {
    id: "2",
    title: "Inferno",
    price: "150",
  },
  {
    id: "3",
    title: "Anna Frank",
    price: "80",
  },
  {
    id: "4",
    title: "Nemesis",
    price: "120",
  },
  {
    id: "5",
    title: "Crused",
    price: "250",
  },
];

// multilevel category
export const category = [
  {
    id: 1,
    category: "Electronic Device",
  },
  {
    id: 2,
    category: "Electronic Accessiories",
  },
  {
    id: 3,
    category: "TV & Home Appliances",
  },
  {
    id: 4,
    category: "Automotive & Motorbike",
  },
  {
    id: 5,
    category: "Gadets",
  },
];

export const subCategory = [
  {
    id: 1,
    subcategory: "Mobile",
    categoryId: 1,
  },
  {
    id: 2,
    subcategory: "Desktops",
    categoryId: 1,
  },
  {
    id: 3,
    subcategory: "Laptops",
    categoryId: 1,
  },
  {
    id: 4,
    subcategory: "Tablets",
    categoryId: 1,
  },
  {
    id: 5,
    subcategory: "Gadets",
    categoryId: 2,
  },
  {
    id: 11,
    subcategory: "Mobile A",
    categoryId: 2,
  },
  {
    id: 21,
    subcategory: "Desktops A",
    categoryId: 3,
  },
  {
    id: 31,
    subcategory: "Laptops A",
    categoryId: 3,
  },
  {
    id: 41,
    subcategory: "Tablets A",
    categoryId: 3,
  },
  {
    id: 51,
    subcategory: "Gadets A",
    categoryId: 3,
  },
];

// shopping cart
export const shoppingCart = [
  // {
  //   id:1,
  //   imgUrl:"/img/products/cart-img-1.png",
  //   productName:"Watermaleon",
  //   price:"12",
  //   quantity:"1",

  // },
  // {
  //   id:14,
  //   imgUrl:"/img/products/cart-img-3.png",
  //   productName:"Chicken",
  //   price:"150",
  //   quantity:"3",

  // },
  // {
  //   id:15,
  //   imgUrl:"/img/products/cart-img-3.png",
  //   productName:"Chicken",
  //   price:"150",
  //   quantity:"3",

  // },
  {
    id: 16,
    imgUrl: "/img/products/cart-img-3.png",
    productName: "Chicken",
    price: "150",
    quantity: "3",
  },
  {
    id: 2,
    imgUrl: "/img/products/cart-img-1.png",
    productName: "Watermaleon",
    price: "12",
    quantity: "1",
  },
  {
    id: 33,
    imgUrl: "/img/products/cart-img-3.png",
    productName: "Chicken",
    price: "120",
    quantity: "1",
  },
];

// functions
export const getAllShoppingProduct = () => shoppingCart;
export const getAllCategory = () => category;
export const getAllSubCategory = (id) =>
  subCategory.filter((sub) => sub.categoryId === id);
export const getAllSubCategoryItem = () => {};
