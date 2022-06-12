import React, { useState, useContext, useEffect } from 'react'
import { useCallback } from 'react'


const url = 'http://localhost:3000/api/v1/restaurants'
const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('o')
  const [restaurants, setRestaurants] = useState([])
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const fetchRestaurants = useCallback(async () => {
    setLoading(true)
    try {
      //const response = await fetch(`${url}${searchTerm}`)
      const response = await fetch(`${url}`)
      const data = await response.json()

      //console.log("data ", data);

      const restaurants1 = data.filter((restaurant) => restaurant.name.toLowerCase().includes(searchTerm.toLowerCase()))
      let restaurants = [];
      let found = false;
      restaurants1.forEach((element, index) => {
        if (restaurants) {
          restaurants.forEach(element1 => {
            if (element1.name === element.name) {
              found = 1;
            }
          })
          if (!found)
            restaurants.push(element);
        } else {
          restaurants.push(element);
        }
      });
      // console.log("Restaurants ", restaurants);

      if (restaurants) {
        const newRestaurants = restaurants.map((item) => {
          const {
            name,
            image_url,
            location,
            average_score,
            slug
          } = item
          // const idRestaurant = new Date().getTime().toString();
          return {
            // id: idRestaurant ,
            name: name,
            image_url: image_url,
            location: location,
            average_score: average_score,
            slug: slug
          }
        })
        setRestaurants(newRestaurants)
      } else {
        setRestaurants([])
      }
      setLoading(false)
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }, [searchTerm])
  useEffect(() => {
    fetchRestaurants()
  }, [searchTerm, fetchRestaurants])
  return (
    <AppContext.Provider
      value={{ loading, restaurants, searchTerm, setSearchTerm, isLoggedIn, setIsLoggedIn }}
    >
      {children}
    </AppContext.Provider>
  )
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
