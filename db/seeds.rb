# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
restaurants = Restaurant.create([
  { 
    name: "Aloette Restaurant",
    image_url: "https://aloetterestaurant.com/wp-content/uploads/2017/10/Aloette-Interiors_002.jpg",
    location: "107 Winners Circle",
    average_score: "0"
  },
  { 
    name: "George",
    image_url: "https://img2.10bestmedia.com/Images/Photos/358410/381787-526062837422989-1836650623-n_55_660x440.jpg",
    location: "1819 Queen St E",
    average_score: "0"
  }, 
  { 
    name: "Canoe",
    image_url: "https://3di6zv3beqwj3om56f47wlza-wpengine.netdna-ssl.com/wp-content/uploads/2015/06/6canoe.jpg",
    location: "66 Wellington Street W, 54th Floor",
    average_score: "0"
  }, 
  { 
    name: "DailLo",
    image_url: "https://media.cntraveler.com/photos/5b22bfe4f7e9307cb983b46e/16:9/w_2240,c_limit/DaiLo__2018__BAC1382.jpg",
    location: "1503 College Street",
    average_score: "0"
  }, 
  { 
    name: "Miku",
    image_url: "https://mikutoronto.com/wp-content/uploads/2015/03/dining-room-2-1030x687.jpg",
    location: "10 Bay Street 105",
    average_score: "0"
  }, 
  { 
    name: "Jacobs & Co. Steakhouse",
    image_url: "https://b.zmtcdn.com/data/pictures/2/8905322/1cf4a57c4e45075ded8fda4ed14cbef3.jpg?output-format=webp&fit=around|771.75:416.25&crop=771.75:416.25;*,*",
    location: "12 Brant Street",
    average_score: "0"
  }, 
  { 
    name: "Fishman Lobster Clubhouse Restaurant",
    image_url: "https://img1.wsimg.com/isteam/ip/35d04655-b77e-4a9a-a5fd-ca709d04eedf/lobster6.jpg/:/rs=w:1300,h:800",
    location: "4020 Finch Avenue E",
    average_score: "0"
  }, 
  { 
    name: "Sushi on Bloor",
    image_url: "https://media-cdn.tripadvisor.com/media/photo-s/0e/34/1e/50/outside-of-the-restaurant.jpg",
    location: "525 Bloor Street W",
    average_score: "0"
  }, 
  { 
    name: "Yasu",
    image_url: "https://images.squarespace-cdn.com/content/v1/533078b0e4b0ccd5fa57e1ff/1461544750843-EA5RAW3HA7Y1JBBHLBCW/YASU+Toronto+Omakase",
    location: "81 Harbord Street",
    average_score:"0"
  }, 
  { 
    name: "Kinka Izakaya",
    image_url: "https://images.getbento.com/accounts/5d21d7abc160b36d5cd820a4adda5083/media/xU8L3LAR66rorb68DPnQ_20191129-0E0A0156.jpg?w=1200&fit=crop&auto=compress,format&h=600",
    location: "398 Church Street",
    average_score: "0"
  }, 
  { 
    name: "Hokkaido Ramen Santouka",
    image_url: "http://1.bp.blogspot.com/-8s5y7exnFPw/UKWeSsJ5fyI/AAAAAAAACVw/NP9_NpOobTQ/s1600/DSC01597.JPG",
    location: "91 Dundas Street E",
    average_score: "0"
  }
])

reviews = Review.create([{
  title: 'good restaurant',
  description:'good food',
  score: 5,
  restaurant: restaurants.first
  },
  {title: 'bad restaurant',
  description:'bad service',
  score: 1,
  restaurant: restaurants.first
  }])
