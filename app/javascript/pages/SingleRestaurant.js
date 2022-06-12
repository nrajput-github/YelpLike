import React, { useState, useEffect } from 'react'
import Loading from '../components/Loading'
import { useParams, Link, Redirect } from 'react-router-dom'
import axios from 'axios'
import { useGlobalContext } from '../components/context'
import Rating from '../components/rating/rating';
import ReviewForm from '../components/ReviewForm';
import Review from '../components/Review';

import { ACCESS_TOKEN_NAME } from '../constants/apiConstants';

export default function SingleRestaurant(props) {
  const { name, location, image_url, average_score } = props
  const [restaurant, setRestaurant] = useState({})
  const [review, setReview] = useState({ title: '', description: '', score: 0 })
  const [reviews, setReviews] = useState([])
  // const { id } = useParams()
  const [loaded, setLoaded] = useState(false)
  let { isLoggedIn, setIsLoggedIn } = useGlobalContext()
  //console.log("SR ", isLoggedIn);

  if (!isLoggedIn && (localStorage.getItem(ACCESS_TOKEN_NAME) !== "response.data.token")) {
    return <Redirect to='/login' />
  }

  useEffect(() => {
    const slug = props.match.params.slug
    const url = `/api/v1/restaurants/${slug}`

    axios.get(url)
      .then(res => {
        setRestaurant(res.data.data)

        axios.get('/api/v1/reviews?id=' + res.data.data.id)
          .then(res => {
            setReviews(res.data)
          })
      })
      .catch(res => console.log(res))
    setLoaded(true)


  }, [])

  const handleChange = (event) => {
    event.preventDefault()
    setReview(Object.assign({}, review, { [event.target.name]: event.target.value }))
  }

  const handleSubmit = (event) => {
    // event.preventDefault()
    const restaurant_id = restaurant.id
    axios.post('/api/v1/reviews', { ...review, restaurant_id })
      .then(res => {
        setReviews([...reviews, res.data]);
        //setRestaurant({ ...restaurant, reviews })
        //setReview({ title: '', description: '' , score: 0 })
        const slug = props.match.params.slug
        const url = `/api/v1/restaurants/${slug}`
        axios.get(url)
          .then(res => {
            setRestaurant(res.data.data)
          })
          .catch(res => console.log(res))
      })
      .catch(res => { })
  }

  // destory a reviews
  const handleDestroy = (id, e) => {
    e.preventDefault()

    axios.delete(`/api/v1/reviews/${id}`)
      .then((data) => {
        const included = [...reviews]
        const index = included.findIndex((data) => data.id == id)
        included.splice(index, 1)

        setReviews(included)
      })
      .catch(data => console.log('Error', data))
  }




  // set score
  const setRating = (score) => {
    setReview({ ...review, score })
  }

  let total, average = 0
  let userReviews

  if (reviews) {
    total = reviews.reduce((total, review) => total + review.score, 0)
    average = total > 0 ? (parseFloat(total) / parseFloat(reviews.length)) : 0
    userReviews = reviews.map((review, index) => {
      return (
        <Review
          title={review.title}
          description={review.description}
          score={review.score}
          create_at={review.created_at}
          key={index}
          id={review.id}
          handleDestroy={handleDestroy}
        //attributes={review.attributes}
        />
      )
    })
  }
  /*
   4+4+4 =  12/3 = 4
   2+2+2 = 6/3 = 3
   18/6 =  3 
   1+1 = 2/2 = 1 
   20/8 = 2.5
  */



  return (
    <>
      <div style={{ marginLeft: 130 }} className="single-restaurant-page">
        <div className="column">
          <div className="restaurant-data">
            {!restaurant.attributes ? null : (
              <div>
                <div className="restaurant-name">{restaurant.attributes.name}</div>
                <div className="restaurant-location">{restaurant.attributes.location}</div>
                <div className="average-score"> <Rating score={restaurant.attributes.average_score} canEdit={false} /></div>
              </div>
            )}
            <div className="restaurant-image">
              {!restaurant.attributes ? null : (
                <img src={restaurant.attributes.image_url} alt={restaurant.attributes.name} width={250} height={300} />

              )}

              <div>{restaurant?.attributes?.location}</div>

            </div>
            <br />
          </div>
          <br />
          <div className="reviews">
            <h4>Restaurant Reviews</h4>
            {/* <br /> */}
            {userReviews}
          </div>
        </div>
        <div className="column">
          <div className="review-form">
            <ReviewForm
              name={restaurant?.attributes?.name}
              review={review}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
              setRating={setRating}


            />
          </div>
        </div>
      </div>
    </>
  )
}
