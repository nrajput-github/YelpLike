import React from 'react'
import RestaurantList from '../components/RestaurantList'
import SearchForm from '../components/SearchForm'
export default function Home() {
  return (
    <main>
      <SearchForm />
      <RestaurantList />
    </main>
  )
}
