import Snackbar from 'react-native-snackbar';
import {CityInfoListType, StoreListType} from './types';

export const colors: {[key: string]: string} = {
  tintColor: '#8e6cef',
  textColor: '#000000',
  secondaryBgColor: '#f4f4f4',
  cardBgColor: '#f3f3f3',
  primaryBgColor: '#ffffff',
  radioButtonBgColor: '#ada8a8',
  error: 'red',
  loadingBgColor: '#00000066',
};

export const languages = [
  {name: 'english', code: 'en'},
  {name: 'hindi', code: 'hi'},
  {name: 'french', code: 'fr'},
];

export const categoriesList = [
  {
    id: 1,
    categoriesImage:
      'https://png.pngtree.com/png-clipart/20220628/ourmid/pngtree-tv-cartoon-clipart-png-image_5331404.png',
    categoriesName: 'tv',
  },
  {
    id: 2,
    categoriesImage:
      'https://static.vecteezy.com/system/resources/thumbnails/012/375/238/small/3d-headphone-and-play-button-audio-play-broadcasting-concept-png.png',
    categoriesName: 'audio',
  },
  {
    id: 3,
    categoriesImage:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStAMdUhRAO-EiGG3UHaXXWEg4tI6FG8haZVg&s',
    categoriesName: 'laptop',
  },
  {
    id: 4,
    categoriesImage:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0is5avBO9AXh8flH151wnZLps3bAMcx3qAA&s',
    categoriesName: 'mobile',
  },
  {
    id: 5,
    categoriesImage:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeiiEsLMhPKFvjt924aKovcBlgAVyW8ZWm0w&s',
    categoriesName: 'gaming',
  },
];

export const screenNames = {
  login: 'Login',
  signUp: 'SignUp',
  bottomTab: 'BottomTab',
  address: 'Address',
  wishlist: 'Wishlist',
  payment: 'Payment',
  help: 'Help',
  support: 'Support',
  userProfile: 'UserProfile',
  addAddress: 'AddAddress',
  seeAllCategories: 'SeeAllCategories',
  categoryList: 'CategoryList',
  addPayment: 'AddPayment',
  cart: 'Cart',
  search: 'Search',
  home: 'Home',
  notification: 'Notification',
  profile: 'Profile',
  order: 'Order',
  homeStack: 'HomeStack',
  language: 'Language',
  categoriesWiseList: 'CategoriesWiseList',
  productDetails: 'ProductDetails',
  finalPayment: 'FinalPayment',
  explore: 'Explore',
};

export const API_ROUTES = {
  getAllProducts: '/products',
};

export const profileButtonNames = [
  {id: 1, name: 'address', screenName: screenNames.address},
  {id: 2, name: 'wishlist', screenName: screenNames.wishlist},
  {id: 3, name: 'payment', screenName: screenNames.payment},
  {id: 4, name: 'language', screenName: screenNames.language},
  {id: 5, name: 'explore store', screenName: screenNames.explore},
  {id: 6, name: 'help', screenName: screenNames.help},
  {id: 7, name: 'support', screenName: screenNames.support},
];

export const showShankBar = (title: string, error?: string) => {
  Snackbar.show({
    text: title,
    textColor: error && 'red',
    duration: Snackbar.LENGTH_SHORT,
  });
};

export const cityInfoList: CityInfoListType[] = [
  {id: 1, name: 'Indore', latitude: 22.7196, longitude: 75.8577},
  {id: 2, name: 'Bhopal', latitude: 23.2599, longitude: 77.4126},
  {id: 3, name: 'Raipur', latitude: 21.2514, longitude: 81.6296},
  {id: 4, name: 'Delhi', latitude: 28.6139, longitude: 77.209},
  {id: 5, name: 'Mumbai', latitude: 19.076, longitude: 72.8777},
  {id: 6, name: 'Kolkata', latitude: 22.5726, longitude: 88.3639},
  {id: 7, name: 'Chennai', latitude: 13.0827, longitude: 80.2707},
  {id: 8, name: 'Bangalore', latitude: 12.9716, longitude: 77.5946},
  {id: 9, name: 'Hyderabad', latitude: 17.385, longitude: 78.4867},
];

export const rangeList = [
  {id: 1, range: '1 km', rangeMeter: 1000},
  {id: 2, range: '4 km', rangeMeter: 4000},
  {id: 3, range: '7 km', rangeMeter: 7000},
  {id: 4, range: '10 km', rangeMeter: 10000},
  {id: 5, range: '13 km', rangeMeter: 13000},
  {id: 6, range: '15 km', rangeMeter: 15000},
  {id: 7, range: '20 km', rangeMeter: 20000},
];

export const storeList: StoreListType = {
  1: [
    {
      id: 1,
      name: 'Flipkart Hub',
      latitude: 22.7642,
      longitude: 75.8912,
      description: 'Affordable electronics and daily essentials for everyone.',
    },
    {
      id: 2,
      name: 'Myntra Styles',
      latitude: 22.7335,
      longitude: 75.9078,
      description: 'Trendy clothing and accessories for men and women.',
    },
    {
      id: 3,
      name: 'Big Basket Depot',
      latitude: 22.7501,
      longitude: 75.8346,
      description: 'Fresh groceries and household products delivered quickly.',
    },
    {
      id: 4,
      name: 'AJIO Trends',
      latitude: 22.6932,
      longitude: 75.8821,
      description:
        'Exclusive fashion collection with amazing offers for everyone.',
    },
    {
      id: 5,
      name: 'Nykaa Beauty',
      latitude: 22.7018,
      longitude: 75.8207,
      description: 'Premium beauty and wellness products for all ages.',
    },
    {
      id: 6,
      name: 'Amazon Express',
      latitude: 22.7459,
      longitude: 75.8045,
      description: 'Wide range of products delivered right to your doorstep.',
    },
    {
      id: 7,
      name: 'Tata Cliq',
      latitude: 22.6778,
      longitude: 75.8452,
      description:
        'Latest gadgets, appliances, and fashion at unbeatable prices.',
    },
    {
      id: 8,
      name: 'Zivame Lingerie',
      latitude: 22.729,
      longitude: 75.9143,
      description: 'Comfortable and stylish lingerie for modern women.',
    },
    {
      id: 9,
      name: 'FirstCry Store',
      latitude: 22.7593,
      longitude: 75.8732,
      description: 'All baby essentials and toys for your little ones.',
    },
    {
      id: 10,
      name: 'Pepperfry Furniture',
      latitude: 22.6897,
      longitude: 75.8234,
      description: 'Beautiful furniture and decor for your home spaces.',
    },
    {
      id: 11,
      name: 'Lenskart Vision',
      latitude: 22.7108,
      longitude: 75.9101,
      description: 'Stylish eyewear with great deals on frames and lenses.',
    },
    {
      id: 12,
      name: 'Urban Ladder',
      latitude: 22.7254,
      longitude: 75.8123,
      description: 'Premium furniture and decor for your dream home.',
    },
    {
      id: 13,
      name: 'Reliance Digital',
      latitude: 22.7392,
      longitude: 75.8987,
      description:
        'Latest electronics, gadgets, and appliances for your needs.',
    },
    {
      id: 14,
      name: 'Ferns N Petals',
      latitude: 22.6785,
      longitude: 75.8651,
      description: 'Beautiful flowers, cakes, and gifts for every occasion.',
    },
    {
      id: 15,
      name: 'Decathlon Sports',
      latitude: 22.7491,
      longitude: 75.8903,
      description: 'Sports gear and equipment for all your activities.',
    },
    {
      id: 16,
      name: 'Clovia Intimates',
      latitude: 22.7356,
      longitude: 75.8294,
      description: 'Affordable and stylish lingerie for everyday comfort.',
    },
    {
      id: 17,
      name: 'HealthKart Store',
      latitude: 22.7142,
      longitude: 75.9095,
      description: 'Supplements and wellness products for healthy living.',
    },
    {
      id: 18,
      name: 'Croma Electronics',
      latitude: 22.7403,
      longitude: 75.8181,
      description: 'Smart gadgets, appliances, and accessories under one roof.',
    },
    {
      id: 19,
      name: 'Meesho Market',
      latitude: 22.7598,
      longitude: 75.8475,
      description:
        'Affordable fashion and home essentials for budget shoppers.',
    },
    {
      id: 20,
      name: 'Shoppers Stop',
      latitude: 22.6909,
      longitude: 75.8412,
      description: 'Premium clothing and accessories for modern lifestyles.',
    },
    {
      id: 21,
      name: 'Spencers Retail',
      latitude: 22.7483,
      longitude: 75.9034,
      description:
        'Groceries, household items, and gourmet foods available here.',
    },
    {
      id: 22,
      name: 'BlueStone Jewelry',
      latitude: 22.6854,
      longitude: 75.8281,
      description: 'Exquisite gold and diamond jewelry for special moments.',
    },
    {
      id: 23,
      name: 'Craftsvilla Store',
      latitude: 22.7641,
      longitude: 75.8632,
      description: 'Ethnic wear and handicrafts with a traditional touch.',
    },
    {
      id: 24,
      name: 'Fabindia Store',
      latitude: 22.71,
      longitude: 75.8945,
      description: 'Handcrafted clothing, decor, and organic products for all.',
    },
    {
      id: 25,
      name: 'Voonik Apparel',
      latitude: 22.7507,
      longitude: 75.8206,
      description:
        'Fashionable and budget-friendly clothing for every occasion.',
    },
  ],
  2: [
    {
      id: 1,
      name: 'Bharat Mart',
      latitude: 23.3851,
      longitude: 77.5624,
      description: 'Affordable groceries for Indian households.',
    },
    {
      id: 18,
      name: 'Desi Bazaar',
      latitude: 23.3814,
      longitude: 77.5672,
      description: 'Authentic Indian spices and snacks.',
    },
    {
      id: 20,
      name: 'Swadeshi Styles',
      latitude: 23.3915,
      longitude: 77.6027,
      description: 'Trendy ethnic wear for every occasion.',
    },
    {
      id: 13,
      name: 'Annapurna Grocery',
      latitude: 23.3799,
      longitude: 77.6231,
      description: 'Daily essentials at unbeatable prices.',
    },
    {
      id: 12,
      name: 'Shakti Electronics',
      latitude: 23.3612,
      longitude: 77.5428,
      description: 'Electronics and gadgets for every need.',
    },
    {
      id: 9,
      name: 'Khadi Corner',
      latitude: 23.3315,
      longitude: 77.5489,
      description: 'Pure Khadi apparel for all ages.',
    },
    {
      id: 24,
      name: 'Rasoi Essentials',
      latitude: 23.4191,
      longitude: 77.5439,
      description: 'Kitchenware and cookware for every cook.',
    },
    {
      id: 10,
      name: 'Bollywood Fashion',
      latitude: 23.4123,
      longitude: 77.5765,
      description: 'Glamorous outfits inspired by Bollywood.',
    },
    {
      id: 7,
      name: 'India Craft',
      latitude: 23.4198,
      longitude: 77.5902,
      description: 'Handmade crafts from rural India.',
    },
    {
      id: 22,
      name: 'Green Basket',
      latitude: 23.4082,
      longitude: 77.5984,
      description: 'Fresh organic produce at your doorstep.',
    },
    {
      id: 15,
      name: 'Swasthya Pharma',
      latitude: 23.4034,
      longitude: 77.5157,
      description: 'Health and wellness products online.',
    },
    {
      id: 17,
      name: 'Vastra Vistaar',
      latitude: 23.4298,
      longitude: 77.6113,
      description: 'Designer clothing for men and women.',
    },
    {
      id: 5,
      name: 'Tech Gurukul',
      latitude: 23.3694,
      longitude: 77.5867,
      description: 'Learn technology through online courses.',
    },
    {
      id: 25,
      name: 'Ayurveda Kendra',
      latitude: 23.3598,
      longitude: 77.4782,
      description: 'Traditional Ayurvedic medicines and oils.',
    },
    {
      id: 14,
      name: 'Digital Duniya',
      latitude: 23.3218,
      longitude: 77.4782,
      description: 'Latest gadgets and digital accessories.',
    },
    {
      id: 16,
      name: 'Krishi Samarth',
      latitude: 23.2931,
      longitude: 77.4026,
      description: 'Agricultural tools and fertilizers online.',
    },
    {
      id: 8,
      name: 'Home Comforts',
      latitude: 23.2991,
      longitude: 77.3915,
      description: 'Furniture and decor for your home.',
    },
    {
      id: 19,
      name: 'Chai Samosa',
      latitude: 23.2782,
      longitude: 77.4431,
      description: 'Popular snacks from India delivered fast.',
    },
    {
      id: 6,
      name: 'Zayka Foods',
      latitude: 23.2512,
      longitude: 77.4389,
      description: 'Delicious ready-to-eat Indian meals.',
    },
    {
      id: 4,
      name: 'Namaste Stationery',
      latitude: 23.2811,
      longitude: 77.4113,
      description: 'Stationery and school supplies for kids.',
    },
    {
      id: 21,
      name: 'Fitness First',
      latitude: 23.2457,
      longitude: 77.4185,
      description: 'Gym equipment and fitness essentials.',
    },
    {
      id: 23,
      name: 'Saree Saga',
      latitude: 23.2693,
      longitude: 77.3956,
      description: 'Beautiful sarees from across India.',
    },
    {
      id: 11,
      name: 'Pustak Bhandar',
      latitude: 23.2417,
      longitude: 77.3826,
      description: 'Books for every reader and learner.',
    },
    {
      id: 2,
      name: 'Mitti Mart',
      latitude: 23.2753,
      longitude: 77.3426,
      description: 'Earthenware and traditional pottery items.',
    },
    {
      id: 3,
      name: 'Apna Bazaar',
      latitude: 23.1214,
      longitude: 77.5121,
      description: 'Everyday essentials at affordable prices.',
    },
  ],
  3: [
    {
      id: 1,
      name: 'Bengal Sweet House',
      latitude: 21.2985,
      longitude: 81.6501,
      description: 'Famous for Bengali sweets and traditional desserts.',
    },
    {
      id: 2,
      name: 'Punjab Spice Corner',
      latitude: 21.3294,
      longitude: 81.7489,
      description: 'Authentic Punjabi spices and herbs for delicious meals.',
    },
    {
      id: 3,
      name: 'South Indian Diner',
      latitude: 21.3152,
      longitude: 81.7123,
      description: 'Serving traditional dosas, idlis, and sambar.',
    },
    {
      id: 4,
      name: 'Kerala Kitchen',
      latitude: 21.2673,
      longitude: 81.6894,
      description: 'Kerala delicacies with fresh coconut flavors and spices.',
    },
    {
      id: 5,
      name: 'Rajasthan Thali',
      latitude: 21.3512,
      longitude: 81.7015,
      description: 'Traditional Rajasthani thali with a variety of dishes.',
    },
    {
      id: 6,
      name: 'Mumbai Chaat House',
      latitude: 21.3847,
      longitude: 81.7298,
      description: 'Famous for Mumbai-style chaats and street food.',
    },
    {
      id: 7,
      name: 'Kolkata Mishti',
      latitude: 21.4129,
      longitude: 81.7695,
      description: 'Specializes in Bengali sweets like rasgulla and sandesh.',
    },
    {
      id: 8,
      name: 'Delhi Paratha Wala',
      latitude: 21.2765,
      longitude: 81.6852,
      description: 'Famous for stuffed parathas and thick curd.',
    },
    {
      id: 9,
      name: 'Hyderabadi Biryani',
      latitude: 21.3921,
      longitude: 81.7413,
      description: 'Authentic Hyderabadi biryani with tender meat and spices.',
    },
    {
      id: 10,
      name: 'Goa Fish Curry',
      latitude: 21.3287,
      longitude: 81.6827,
      description: 'Specializes in Goan-style seafood and fish curry.',
    },
    {
      id: 11,
      name: 'Kashmir Shawl Emporium',
      latitude: 21.3719,
      longitude: 81.7145,
      description: 'Exquisite Pashmina shawls and Kashmiri handicrafts.',
    },
    {
      id: 12,
      name: 'Sikkim Tea House',
      latitude: 21.3498,
      longitude: 81.7023,
      description: 'Offering organic teas and Himalayan snacks.',
    },
    {
      id: 13,
      name: 'Chennai Chettinad',
      latitude: 21.4085,
      longitude: 81.7536,
      description: 'Spicy and aromatic Chettinad food served with love.',
    },
    {
      id: 14,
      name: 'Assam Tea & Snacks',
      latitude: 21.2807,
      longitude: 81.6584,
      description: 'Known for authentic Assam tea and traditional snacks.',
    },
    {
      id: 15,
      name: 'Uttar Pradesh Khana',
      latitude: 21.3192,
      longitude: 81.7485,
      description: 'Classic Uttar Pradesh dishes with rich flavors and spices.',
    },
    {
      id: 16,
      name: 'Madhya Pradesh Thali',
      latitude: 21.3658,
      longitude: 81.6923,
      description: 'Thali with a variety of authentic Madhya Pradesh dishes.',
    },
    {
      id: 17,
      name: 'Bihar Litti Chokha',
      latitude: 21.3992,
      longitude: 81.7384,
      description:
        'Traditional Bihari litti chokha served with homemade chutneys.',
    },
    {
      id: 18,
      name: 'Jharkhand Tribal Diner',
      latitude: 21.3417,
      longitude: 81.7045,
      description:
        'Serving rustic Jharkhand tribal cuisine with authentic flavors.',
    },
    {
      id: 19,
      name: 'Maharashtra Misal Pav',
      latitude: 21.2703,
      longitude: 81.6547,
      description: 'Serving spicy misal pav and vada pav.',
    },
    {
      id: 20,
      name: 'Bihar Thekua',
      latitude: 21.3886,
      longitude: 81.7219,
      description: 'Specializes in sweet and crunchy Bihari Thekua biscuits.',
    },
    {
      id: 21,
      name: 'Rajasthan Kachori',
      latitude: 21.2761,
      longitude: 81.6615,
      description: 'Delicious Rajasthani kachori served with spicy chutneys.',
    },
    {
      id: 22,
      name: 'Orissa Pakhala',
      latitude: 21.3357,
      longitude: 81.7002,
      description: 'Serving traditional Pakhala Bhata with fried fish.',
    },
    {
      id: 23,
      name: 'Madhya Pradesh Poha',
      latitude: 21.3704,
      longitude: 81.7295,
      description: 'Poha with sev, peanuts, and fresh coriander.',
    },
    {
      id: 24,
      name: 'Srinagar Dry Fruits',
      latitude: 21.3102,
      longitude: 81.6928,
      description:
        'Wide variety of dry fruits, including famous Kashmiri nuts.',
    },
    {
      id: 25,
      name: 'Andhra Spice Hub',
      latitude: 21.3491,
      longitude: 81.7187,
      description: 'Spicy Andhra food with flavorful chutneys and rice.',
    },
  ],
  4: [
    {
      id: 1,
      name: 'Flipkart',
      latitude: 28.6359,
      longitude: 77.2286,
      description:
        'Popular online shopping platform for electronics, fashion, and more.',
    },
    {
      id: 2,
      name: 'Amazon India',
      latitude: 28.6254,
      longitude: 77.1793,
      description:
        'Wide range of products with quick delivery and great deals.',
    },
    {
      id: 3,
      name: 'Myntra',
      latitude: 28.5982,
      longitude: 77.2078,
      description:
        'Fashion e-commerce site offering trendy apparel and accessories.',
    },
    {
      id: 4,
      name: 'Snapdeal',
      latitude: 28.6643,
      longitude: 77.2579,
      description: 'Offers a variety of products from electronics to clothing.',
    },
    {
      id: 5,
      name: 'Ajio',
      latitude: 28.5872,
      longitude: 77.2471,
      description:
        'Exclusive fashion brand offering trendy styles for all ages.',
    },
    {
      id: 6,
      name: 'Tata Cliq',
      latitude: 28.6981,
      longitude: 77.1998,
      description: 'An online store offering luxury and fashion brands.',
    },
    {
      id: 7,
      name: 'ShopClues',
      latitude: 28.6523,
      longitude: 77.2965,
      description:
        'Online marketplace with electronics, home goods, and fashion.',
    },
    {
      id: 8,
      name: 'Pepperfry',
      latitude: 28.6195,
      longitude: 77.1802,
      description:
        'Furniture and home decor online store with exclusive designs.',
    },
    {
      id: 9,
      name: 'BigBasket',
      latitude: 28.6712,
      longitude: 77.1753,
      description:
        'Grocery shopping made easy with home delivery across India.',
    },
    {
      id: 10,
      name: 'Nykaa',
      latitude: 28.5887,
      longitude: 77.1984,
      description:
        'Beauty products and cosmetics e-commerce with global and local brands.',
    },
    {
      id: 11,
      name: 'UrbanClap',
      latitude: 28.6312,
      longitude: 77.2119,
      description:
        'Professional services platform for home repairs, beauty services, and more.',
    },
    {
      id: 12,
      name: 'Zappos',
      latitude: 28.6705,
      longitude: 77.2437,
      description:
        'Shoes, clothing, and accessories with fast delivery and easy returns.',
    },
    {
      id: 13,
      name: 'Lenskart',
      latitude: 28.6921,
      longitude: 77.2156,
      description:
        'Online eyewear store offering glasses, sunglasses, and contact lenses.',
    },
    {
      id: 14,
      name: 'FirstCry',
      latitude: 28.6023,
      longitude: 77.2932,
      description: 'E-commerce for baby products, clothes, and accessories.',
    },
    {
      id: 15,
      name: 'HealthKart',
      latitude: 28.6145,
      longitude: 77.2654,
      description:
        'Online store for health supplements, wellness products, and fitness gear.',
    },
    {
      id: 16,
      name: 'Fynd',
      latitude: 28.6589,
      longitude: 77.2273,
      description:
        'Fashion and lifestyle e-commerce with a wide range of brands.',
    },
    {
      id: 17,
      name: 'Voonik',
      latitude: 28.6394,
      longitude: 77.1912,
      description:
        'Women’s fashion and accessories with personalized recommendations.',
    },
    {
      id: 18,
      name: 'Koovs',
      latitude: 28.6853,
      longitude: 77.2326,
      description: 'Trendy fashion and accessories for men and women.',
    },
    {
      id: 19,
      name: 'Chumbak',
      latitude: 28.6728,
      longitude: 77.1791,
      description:
        'Home decor, fashion, and quirky products designed with Indian flair.',
    },
    {
      id: 20,
      name: 'Shopper Stop',
      latitude: 28.6234,
      longitude: 77.2623,
      description: 'Bringing top fashion brands for men, women, and children.',
    },
    {
      id: 21,
      name: 'Reliance Digital',
      latitude: 28.6475,
      longitude: 77.2096,
      description:
        'Electronics e-commerce offering gadgets and home appliances.',
    },
    {
      id: 22,
      name: 'H&M India',
      latitude: 28.6178,
      longitude: 77.2571,
      description:
        'Swedish fashion retailer with trendy clothing for all ages.',
    },
    {
      id: 23,
      name: 'Croma',
      latitude: 28.6541,
      longitude: 77.2895,
      description:
        'Electronics, gadgets, and home appliances with easy delivery options.',
    },
    {
      id: 24,
      name: 'Fastrack',
      latitude: 28.6432,
      longitude: 77.2368,
      description: 'Fashion accessories, watches, and trendy styles for all.',
    },
    {
      id: 25,
      name: 'Jabong',
      latitude: 28.6619,
      longitude: 77.1794,
      description:
        'Online fashion store offering the latest clothing and footwear.',
    },
  ],
  5: [
    {
      id: 1,
      name: 'Flipkart',
      latitude: 19.0952,
      longitude: 72.8431,
      description:
        "India's leading eCommerce platform for electronics, fashion, and lifestyle products.",
    },
    {
      id: 2,
      name: 'Amazon India',
      latitude: 19.1203,
      longitude: 72.8665,
      description:
        'Global eCommerce giant offering a wide range of products across categories.',
    },
    {
      id: 3,
      name: 'Myntra',
      latitude: 19.1546,
      longitude: 72.8197,
      description:
        'Popular fashion and lifestyle store offering clothing, footwear, and accessories.',
    },
    {
      id: 4,
      name: 'Snapdeal',
      latitude: 19.1304,
      longitude: 72.9015,
      description:
        'An Indian online marketplace offering products across electronics, fashion, and home goods.',
    },
    {
      id: 5,
      name: 'Ajio',
      latitude: 19.0817,
      longitude: 72.8289,
      description:
        'Fashion and lifestyle eCommerce platform offering trendy apparel and accessories.',
    },
    {
      id: 6,
      name: 'ShopClues',
      latitude: 19.1523,
      longitude: 72.8478,
      description:
        'An online marketplace for a wide variety of products, including electronics, clothing, and home goods.',
    },
    {
      id: 7,
      name: 'Paytm Mall',
      latitude: 19.1047,
      longitude: 72.8903,
      description:
        'An eCommerce platform offering everything from smartphones to home appliances.',
    },
    {
      id: 8,
      name: 'BigBasket',
      latitude: 19.1309,
      longitude: 72.8426,
      description:
        'Online grocery store offering fresh fruits, vegetables, and daily essentials.',
    },
    {
      id: 9,
      name: 'Pepperfry',
      latitude: 19.1078,
      longitude: 72.8724,
      description:
        'Furniture and home décor eCommerce platform, providing a wide range of home furnishings.',
    },
    {
      id: 10,
      name: 'Lenskart',
      latitude: 19.0912,
      longitude: 72.8185,
      description:
        'An online optical store selling glasses, sunglasses, and contact lenses.',
    },
    {
      id: 11,
      name: 'Nykaa',
      latitude: 19.1453,
      longitude: 72.8916,
      description:
        'Beauty and wellness eCommerce platform offering cosmetics, skincare, and personal care products.',
    },
    {
      id: 12,
      name: 'Zomato',
      latitude: 19.1176,
      longitude: 72.8214,
      description: 'Food delivery service and restaurant discovery platform.',
    },
    {
      id: 13,
      name: 'Swiggy',
      latitude: 19.1357,
      longitude: 72.8543,
      description:
        'Food delivery and takeaway service offering a variety of cuisines from local restaurants.',
    },
    {
      id: 14,
      name: 'UrbanClap (Urban Company)',
      latitude: 19.1642,
      longitude: 72.8809,
      description:
        'An on-demand home services platform providing professional services like cleaning, beauty, and repairs.',
    },
    {
      id: 15,
      name: 'Kaaryah',
      latitude: 19.1023,
      longitude: 72.8623,
      description:
        'Fashion eCommerce store catering to women’s apparel with a focus on comfort and fit.',
    },
    {
      id: 16,
      name: 'Shopkirana',
      latitude: 19.1478,
      longitude: 72.8117,
      description:
        'A B2B eCommerce platform for kirana stores, offering bulk supplies of essential goods.',
    },
    {
      id: 17,
      name: 'Tata CLiQ',
      latitude: 19.1389,
      longitude: 72.8355,
      description:
        'An online shopping platform offering electronics, fashion, and lifestyle products from trusted brands.',
    },
    {
      id: 18,
      name: 'Happily Unmarried',
      latitude: 19.1162,
      longitude: 72.8498,
      description:
        'A quirky eCommerce platform offering fun gifts, personal care, and fashion items.',
    },
    {
      id: 19,
      name: 'Voonik',
      latitude: 19.1273,
      longitude: 72.8779,
      description:
        'An online fashion store offering women’s clothing, shoes, and accessories.',
    },
    {
      id: 20,
      name: 'Fynd',
      latitude: 19.1094,
      longitude: 72.8963,
      description:
        'An eCommerce platform offering fashion and lifestyle products from popular brands.',
    },
    {
      id: 21,
      name: 'Myntra',
      latitude: 19.1368,
      longitude: 72.8145,
      description:
        'A fashion eCommerce platform offering clothing, accessories, and footwear for all ages.',
    },
    {
      id: 22,
      name: 'Healthkart',
      latitude: 19.1192,
      longitude: 72.8648,
      description:
        'An online health and wellness store offering dietary supplements, vitamins, and fitness products.',
    },
    {
      id: 23,
      name: 'FirstCry',
      latitude: 19.1541,
      longitude: 72.8294,
      description:
        'Online store specializing in baby products, including clothing, toys, and care essentials.',
    },
    {
      id: 24,
      name: 'Limeroad',
      latitude: 19.1427,
      longitude: 72.8609,
      description:
        'Fashion eCommerce platform offering trendy clothing, accessories, and home décor.',
    },
    {
      id: 25,
      name: 'Cure.fit',
      latitude: 19.1115,
      longitude: 72.8732,
      description:
        'An online platform offering health and fitness services, including yoga and workouts.',
    },
  ],
  6: [
    {
      id: 1,
      name: 'Flipkart',
      latitude: 22.5726,
      longitude: 88.3639,
      description:
        'Leading eCommerce platform offering a wide range of products from electronics to fashion.',
    },
    {
      id: 2,
      name: 'Amazon India',
      latitude: 22.5471,
      longitude: 88.3432,
      description:
        'A global eCommerce giant, offering millions of products across various categories.',
    },
    {
      id: 3,
      name: 'Myntra',
      latitude: 22.5789,
      longitude: 88.3775,
      description:
        'Fashion and lifestyle store offering a variety of clothing, accessories, and beauty products.',
    },
    {
      id: 4,
      name: 'Snapdeal',
      latitude: 22.5915,
      longitude: 88.2954,
      description:
        'An online marketplace for a variety of products including electronics, fashion, and home goods.',
    },
    {
      id: 5,
      name: 'Ajio',
      latitude: 22.5557,
      longitude: 88.3539,
      description:
        'Fashion and lifestyle store by Reliance, offering trendy apparel, shoes, and accessories.',
    },
    {
      id: 6,
      name: 'Tata CLiQ',
      latitude: 22.5468,
      longitude: 88.3684,
      description:
        'An eCommerce platform offering a curated selection of premium fashion and electronics.',
    },
    {
      id: 7,
      name: 'ShopClues',
      latitude: 22.5936,
      longitude: 88.3742,
      description:
        'Online marketplace with a variety of products, ranging from electronics to home essentials.',
    },
    {
      id: 8,
      name: 'BigBasket',
      latitude: 22.5861,
      longitude: 88.3748,
      description:
        'India’s leading online grocery store offering a wide range of food and grocery items.',
    },
    {
      id: 9,
      name: 'Pepperfry',
      latitude: 22.5483,
      longitude: 88.3587,
      description:
        'Furniture and home decor platform offering stylish furniture and home accessories.',
    },
    {
      id: 10,
      name: 'Nykaa',
      latitude: 22.5774,
      longitude: 88.365,
      description:
        'Beauty and cosmetics store with a variety of products from skincare to makeup.',
    },
    {
      id: 11,
      name: 'Lenskart',
      latitude: 22.5416,
      longitude: 88.355,
      description:
        'An online eyewear store offering a variety of glasses, sunglasses, and contact lenses.',
    },
    {
      id: 12,
      name: 'Zappos',
      latitude: 22.596,
      longitude: 88.3698,
      description:
        'Shoes, clothing, and accessories store offering a wide range of brands and styles.',
    },
    {
      id: 13,
      name: 'Redmi',
      latitude: 22.566,
      longitude: 88.3895,
      description:
        'Xiaomi’s eCommerce platform offering smartphones, electronics, and accessories.',
    },
    {
      id: 14,
      name: 'Chumbak',
      latitude: 22.5403,
      longitude: 88.3826,
      description:
        'Unique home decor and lifestyle brand with a variety of quirky products.',
    },
    {
      id: 15,
      name: 'Flipkart Wholesale',
      latitude: 22.5934,
      longitude: 88.3589,
      description:
        'Wholesale platform catering to retailers with a variety of products at bulk pricing.',
    },
    {
      id: 16,
      name: 'Reliance Digital',
      latitude: 22.5634,
      longitude: 88.3567,
      description:
        'Electronic goods retailer offering a wide range of gadgets, smartphones, and home appliances.',
    },
    {
      id: 17,
      name: 'Croma',
      latitude: 22.5721,
      longitude: 88.3754,
      description:
        'An online store for electronics and home appliances with a wide variety of options.',
    },
    {
      id: 18,
      name: 'Voonik',
      latitude: 22.5551,
      longitude: 88.3382,
      description:
        'An online fashion marketplace for women offering clothing, accessories, and more.',
    },
    {
      id: 19,
      name: 'Myntra',
      latitude: 22.5717,
      longitude: 88.3833,
      description:
        'A top fashion and lifestyle eCommerce platform offering a variety of clothing and footwear brands.',
    },
    {
      id: 20,
      name: 'Bata India',
      latitude: 22.5882,
      longitude: 88.3537,
      description:
        'Footwear brand offering a wide range of stylish shoes and sandals for men, women, and children.',
    },
    {
      id: 21,
      name: 'H&M India',
      latitude: 22.5603,
      longitude: 88.3508,
      description:
        'Global fashion retailer offering trendy and affordable clothing for all age groups.',
    },
    {
      id: 22,
      name: 'UrbanClap (Urban Company)',
      latitude: 22.5903,
      longitude: 88.3904,
      description:
        'Home services app offering beauty, cleaning, and repair services.',
    },
    {
      id: 23,
      name: 'Saree.com',
      latitude: 22.5869,
      longitude: 88.3747,
      description:
        'A specialized online store for traditional Indian sarees and ethnic wear.',
    },
    {
      id: 24,
      name: 'Koovs',
      latitude: 22.5527,
      longitude: 88.3859,
      description:
        'An online store for fashion-forward clothing and accessories, offering the latest trends.',
    },
    {
      id: 25,
      name: 'Fynd',
      latitude: 22.5379,
      longitude: 88.3667,
      description:
        'An eCommerce platform offering a curated selection of fashion and lifestyle products from top brands.',
    },
  ],
  7: [
    {
      id: 1,
      name: 'Flipkart',
      latitude: 13.0827,
      longitude: 80.2707,
      description:
        "India's leading e-commerce platform for electronics, fashion, and lifestyle.",
    },
    {
      id: 2,
      name: 'Amazon India',
      latitude: 13.0569,
      longitude: 80.2735,
      description:
        'Global e-commerce giant offering a wide range of products, from electronics to groceries.',
    },
    {
      id: 3,
      name: 'Myntra',
      latitude: 13.0953,
      longitude: 80.2319,
      description:
        'A fashion and lifestyle destination with trendy clothes, shoes, and accessories.',
    },
    {
      id: 4,
      name: 'Snapdeal',
      latitude: 13.0482,
      longitude: 80.2654,
      description:
        'An online marketplace offering a variety of products at affordable prices.',
    },
    {
      id: 5,
      name: 'BigBasket',
      latitude: 13.0927,
      longitude: 80.2531,
      description:
        "India's leading online grocery store, delivering fresh produce and essentials.",
    },
    {
      id: 6,
      name: 'ShopClues',
      latitude: 13.1205,
      longitude: 80.2259,
      description:
        'A bargain shopping destination with products from various categories like electronics, fashion, and more.',
    },
    {
      id: 7,
      name: 'Ajio',
      latitude: 13.0761,
      longitude: 80.2434,
      description:
        'A fashion retailer offering stylish apparel, footwear, and accessories at great prices.',
    },
    {
      id: 8,
      name: 'Paytm Mall',
      latitude: 13.0872,
      longitude: 80.2362,
      description:
        'An e-commerce platform for electronics, home goods, and fashion with exciting cashback offers.',
    },
    {
      id: 9,
      name: 'Lenskart',
      latitude: 13.1014,
      longitude: 80.2697,
      description:
        "India's top eyewear brand offering a wide range of stylish glasses and contact lenses.",
    },
    {
      id: 10,
      name: 'Nykaa',
      latitude: 13.0628,
      longitude: 80.232,
      description:
        'Leading online beauty and wellness store, featuring cosmetics, skincare, and personal care products.',
    },
    {
      id: 11,
      name: 'Zappos India',
      latitude: 13.1143,
      longitude: 80.2786,
      description:
        'An online shoe and clothing retailer with a wide selection of footwear and apparel.',
    },
    {
      id: 12,
      name: 'Croma',
      latitude: 13.0546,
      longitude: 80.2641,
      description:
        'An electronics retail brand offering everything from gadgets to home appliances.',
    },
    {
      id: 13,
      name: 'UrbanClap',
      latitude: 13.0735,
      longitude: 80.2498,
      description:
        'A service provider for home services, repairs, and beauty needs.',
    },
    {
      id: 14,
      name: 'Shopify India',
      latitude: 13.0867,
      longitude: 80.29,
      description:
        'E-commerce platform for businesses to create online stores and manage sales.',
    },
    {
      id: 15,
      name: 'Reliance Digital',
      latitude: 13.0808,
      longitude: 80.2376,
      description:
        'India’s leading electronics retailer for mobile phones, gadgets, and home appliances.',
    },
    {
      id: 16,
      name: 'H&M India',
      latitude: 13.1072,
      longitude: 80.2613,
      description:
        'Swedish fashion retailer offering trendy clothes, shoes, and accessories for all ages.',
    },
    {
      id: 17,
      name: 'Tata CLiQ',
      latitude: 13.0621,
      longitude: 80.2554,
      description:
        'An online shopping platform offering premium products across various categories.',
    },
    {
      id: 18,
      name: 'Indiamart',
      latitude: 13.1135,
      longitude: 80.2279,
      description:
        'India’s largest online marketplace connecting buyers with suppliers for a wide variety of products.',
    },
    {
      id: 19,
      name: 'Shoppers Stop',
      latitude: 13.0999,
      longitude: 80.2751,
      description:
        'A leading department store offering clothing, beauty, and home decor products.',
    },
    {
      id: 20,
      name: 'Vistaprint India',
      latitude: 13.0723,
      longitude: 80.2512,
      description:
        'A popular online printing company for personalized products like business cards and promotional materials.',
    },
    {
      id: 21,
      name: 'FirstCry',
      latitude: 13.0664,
      longitude: 80.2839,
      description:
        'The go-to store for baby products, including clothing, toys, and care essentials.',
    },
    {
      id: 22,
      name: 'Pepperfry',
      latitude: 13.0911,
      longitude: 80.2355,
      description:
        'A leading online furniture and home decor store offering stylish furniture and accessories.',
    },
    {
      id: 23,
      name: 'Fynd',
      latitude: 13.0914,
      longitude: 80.2816,
      description:
        'A fashion-focused e-commerce platform offering a wide variety of trendy clothing and accessories.',
    },
    {
      id: 24,
      name: 'Myntra',
      latitude: 13.1226,
      longitude: 80.2712,
      description:
        'One of India’s most popular online fashion stores with a huge collection of brands.',
    },
    {
      id: 25,
      name: 'Kalyan Jewellers',
      latitude: 13.0851,
      longitude: 80.2408,
      description:
        'India’s most trusted jeweler with a vast selection of gold, diamond, and precious stone jewelry.',
    },
  ],
  8: [
    {
      id: 1,
      name: 'Flipkart',
      latitude: 12.9716,
      longitude: 77.5946,
      description:
        "India's largest e-commerce platform offering everything from electronics to fashion.",
    },
    {
      id: 2,
      name: 'Amazon India',
      latitude: 12.9489,
      longitude: 77.6131,
      description:
        'Online retailer offering a wide range of products across categories like electronics, fashion, and home goods.',
    },
    {
      id: 3,
      name: 'Myntra',
      latitude: 12.9901,
      longitude: 77.5653,
      description:
        'Leading online fashion store known for its trendy apparel, shoes, and accessories.',
    },
    {
      id: 4,
      name: 'Snapdeal',
      latitude: 12.9532,
      longitude: 77.5875,
      description:
        'E-commerce platform with a diverse selection of products from electronics to home essentials.',
    },
    {
      id: 5,
      name: 'Ajio',
      latitude: 12.9794,
      longitude: 77.5934,
      description:
        'Popular online fashion and lifestyle brand, part of Reliance Industries, offering apparel and accessories.',
    },
    {
      id: 6,
      name: 'BigBasket',
      latitude: 12.9378,
      longitude: 77.6108,
      description:
        'Online grocery store offering fresh food, vegetables, and daily essentials.',
    },
    {
      id: 7,
      name: 'Paytm Mall',
      latitude: 12.9611,
      longitude: 77.6101,
      description:
        'E-commerce platform by Paytm, providing a wide range of products from electronics to groceries.',
    },
    {
      id: 8,
      name: 'ShopClues',
      latitude: 12.9863,
      longitude: 77.5812,
      description:
        'Indian online marketplace offering products across categories like electronics, home & kitchen, and fashion.',
    },
    {
      id: 9,
      name: 'Tata CLiQ',
      latitude: 12.966,
      longitude: 77.6014,
      description:
        'Online shopping platform by the Tata Group with a focus on fashion, electronics, and home appliances.',
    },
    {
      id: 10,
      name: 'Lenskart',
      latitude: 12.9414,
      longitude: 77.5847,
      description:
        'India’s leading eyewear retailer offering glasses, contact lenses, and sunglasses online.',
    },
    {
      id: 11,
      name: 'Zappos',
      latitude: 12.9728,
      longitude: 77.6113,
      description:
        'Global e-commerce platform for shoes and apparel, popular in India for its wide selection of footwear.',
    },
    {
      id: 12,
      name: 'FirstCry',
      latitude: 12.9898,
      longitude: 77.5758,
      description:
        'Online store for baby products, toys, and clothing, catering to new and expecting parents.',
    },
    {
      id: 13,
      name: 'Nykaa',
      latitude: 12.9471,
      longitude: 77.5974,
      description:
        'Beauty and cosmetics e-commerce platform offering a variety of skincare, makeup, and wellness products.',
    },
    {
      id: 14,
      name: 'Lulu Mall',
      latitude: 12.9243,
      longitude: 77.5892,
      description:
        'Popular retail and online store with products ranging from clothing to groceries.',
    },
    {
      id: 15,
      name: 'Chumbak',
      latitude: 12.9875,
      longitude: 77.569,
      description:
        'Brand offering quirky, fun, and colorful home décor and fashion accessories.',
    },
    {
      id: 16,
      name: 'Croma',
      latitude: 12.9761,
      longitude: 77.5853,
      description:
        'Indian electronics and home appliance retailer, known for a wide range of gadgets and tech products.',
    },
    {
      id: 17,
      name: 'UrbanClap',
      latitude: 12.9544,
      longitude: 77.6072,
      description:
        'Now called Urban Company, providing at-home services like beauty, cleaning, and repairs through a digital platform.',
    },
    {
      id: 18,
      name: 'BookMyShow',
      latitude: 12.9675,
      longitude: 77.5932,
      description:
        'Popular platform for booking movie tickets, events, and live shows across India.',
    },
    {
      id: 19,
      name: 'Swiggy',
      latitude: 12.933,
      longitude: 77.5796,
      description:
        'Food delivery platform that connects users with restaurants for quick and convenient meal orders.',
    },
    {
      id: 20,
      name: 'Zomato',
      latitude: 12.9824,
      longitude: 77.5867,
      description:
        'Restaurant discovery and food delivery platform, offering a range of cuisines and dining options.',
    },
    {
      id: 21,
      name: 'MobiKwik',
      latitude: 12.973,
      longitude: 77.5613,
      description:
        'Fintech company offering payment solutions, including mobile wallets and financial services.',
    },
    {
      id: 22,
      name: 'Railyatri',
      latitude: 12.9541,
      longitude: 77.592,
      description:
        'Train travel platform offering ticket booking, seat selection, and real-time train updates.',
    },
    {
      id: 23,
      name: 'Shoppers Stop',
      latitude: 12.9502,
      longitude: 77.5942,
      description:
        'Leading department store offering a variety of products from clothing to electronics both online and offline.',
    },
    {
      id: 24,
      name: 'Pepperfry',
      latitude: 12.9623,
      longitude: 77.5899,
      description:
        'E-commerce platform specializing in furniture, home décor, and other home improvement products.',
    },
    {
      id: 25,
      name: 'Reliance Digital',
      latitude: 12.9466,
      longitude: 77.6119,
      description:
        'Online store by Reliance Industries for electronics, mobile phones, and home appliances.',
    },
  ],
  9: [
    {
      id: 1,
      name: 'Flipkart',
      latitude: 17.385,
      longitude: 78.4867,
      description:
        "One of India's leading e-commerce platforms, offering a wide range of products.",
    },
    {
      id: 2,
      name: 'Amazon India',
      latitude: 17.4003,
      longitude: 78.472,
      description:
        'Popular global e-commerce platform with a vast collection of goods in India.',
    },
    {
      id: 3,
      name: 'Myntra',
      latitude: 17.3648,
      longitude: 78.4876,
      description:
        'Famous for fashion and lifestyle products, Myntra is a go-to e-commerce platform.',
    },
    {
      id: 4,
      name: 'Snapdeal',
      latitude: 17.3879,
      longitude: 78.5031,
      description:
        'Provides a range of products including electronics, home goods, and fashion.',
    },
    {
      id: 5,
      name: 'Ajio',
      latitude: 17.3934,
      longitude: 78.4801,
      description:
        'Known for its trendy fashion items, Ajio caters to the fashion-forward Indian shopper.',
    },
    {
      id: 6,
      name: 'Tata Cliq',
      latitude: 17.4081,
      longitude: 78.5112,
      description:
        'An online marketplace that offers electronics, fashion, and home goods.',
    },
    {
      id: 7,
      name: 'ShopClues',
      latitude: 17.37,
      longitude: 78.4645,
      description:
        'ShopClues offers a range of affordable products across various categories.',
    },
    {
      id: 8,
      name: 'BigBasket',
      latitude: 17.4016,
      longitude: 78.4592,
      description:
        "India's leading online grocery store with fast delivery services.",
    },
    {
      id: 9,
      name: 'Pepperfry',
      latitude: 17.3756,
      longitude: 78.493,
      description:
        'Specializes in furniture and home decor items for the Indian market.',
    },
    {
      id: 10,
      name: 'Lenskart',
      latitude: 17.3805,
      longitude: 78.4686,
      description:
        'A leading eyewear e-commerce platform offering glasses, sunglasses, and more.',
    },
    {
      id: 11,
      name: 'UrbanClap',
      latitude: 17.3929,
      longitude: 78.5025,
      description:
        'Offers professional services such as home cleaning, beauty, and repair services.',
    },
    {
      id: 12,
      name: 'Zappos',
      latitude: 17.396,
      longitude: 78.4777,
      description:
        'An online store offering a wide selection of shoes, clothing, and accessories.',
    },
    {
      id: 13,
      name: 'Nykaa',
      latitude: 17.3652,
      longitude: 78.4792,
      description:
        'A leading beauty and wellness e-commerce platform catering to Indian consumers.',
    },
    {
      id: 14,
      name: 'FirstCry',
      latitude: 17.3977,
      longitude: 78.4633,
      description:
        'Specializes in baby products and toys, catering to young parents in India.',
    },
    {
      id: 15,
      name: 'Koo',
      latitude: 17.4069,
      longitude: 78.4914,
      description:
        'A social media platform with features to promote Indian language content.',
    },
    {
      id: 16,
      name: 'Croma',
      latitude: 17.3813,
      longitude: 78.4723,
      description:
        'A well-known electronics and home appliance retail chain in India.',
    },
    {
      id: 17,
      name: 'Rediff Shopping',
      latitude: 17.3935,
      longitude: 78.4911,
      description:
        'Online shopping site offering products across various categories, including books and electronics.',
    },
    {
      id: 18,
      name: 'Fynd',
      latitude: 17.3691,
      longitude: 78.478,
      description:
        'An e-commerce platform offering a wide range of products, from clothing to electronics.',
    },
    {
      id: 19,
      name: 'HealthKart',
      latitude: 17.3952,
      longitude: 78.4709,
      description:
        "India's leading online retailer for health and wellness products.",
    },
    {
      id: 20,
      name: 'Myntra',
      latitude: 17.3778,
      longitude: 78.466,
      description:
        'Known for its fashion-forward products, Myntra is a go-to platform for trendy clothing and accessories.',
    },
    {
      id: 21,
      name: 'Paytm Mall',
      latitude: 17.3832,
      longitude: 78.4852,
      description:
        'Offers products ranging from electronics to groceries and household goods.',
    },
    {
      id: 22,
      name: 'Shopify India',
      latitude: 17.3996,
      longitude: 78.4763,
      description:
        'A platform for building online stores and e-commerce websites in India.',
    },
    {
      id: 23,
      name: 'Quikr',
      latitude: 17.3669,
      longitude: 78.4938,
      description:
        'A classified ads platform where users can buy and sell a variety of products and services.',
    },
    {
      id: 24,
      name: 'Saree.com',
      latitude: 17.3704,
      longitude: 78.4647,
      description:
        'An online store specializing in Indian sarees, ethnic wear, and accessories.',
    },
    {
      id: 25,
      name: 'BookMyShow',
      latitude: 17.3874,
      longitude: 78.4994,
      description:
        'An online entertainment platform offering movie, event, and show bookings.',
    },
  ],
};
