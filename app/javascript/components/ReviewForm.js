import React from 'react';
import { Fragment } from 'react';
import Rating from './rating/rating'
import Button from 'react-bootstrap/Button';
//import { Button } from 'react-bootstrap';
import './rating/rating.css'

const ReviewForm = (props) => {
  //    console.log("properties = " + JSON.stringify(props));
  const ratingOptions = [5, 4, 3, 2, 1].map((score, index) => {
    return (
      <Fragment key={index}>
        <input type="radio" value={score} checked={props.review.score == score} onChange={() => console.log('onChange')} name="rating" id={`rating-${score}`} />
        <label onClick={props.setRating.bind(this, score)}></label>
      </Fragment>
    )
  })

  return (
    < div className="review-form"  >
      <form onSubmit={props.handleSubmit}>
        <title>Review Form</title>
        <div className="reviews-heading" >
          <h4>
            Have An Experience with {props.name}?
            <br />
            {/* <small class="text-muted">Add Your Review!</small> */}
            <small class="text-muted">Add Your Review!</small>
          </h4>
        </div>
        <br />
        <div className="reviews-box-container" >
          <input className="reviews-box" onChange={props.handleChange} type="text" name="title" placeholder="Customer Name" value={props.review.title} />
          {/* <div className="reviews-heading" className="reviews-heading span" className="reviews-box" /> */}
          <br />
          <textarea
            className="reviews-box"
            onChange={props.handleChange}
            value={props.review.description}
            name="description"
            // class="form-control z-depth-1"
            rows="3"
            placeholder="Your Review...">

          </textarea>

        </div>
        <br />
        {/* <input className="rev-box-container" className="rev-box" onChange={props.handleChange} type="text" name="description" placeholder="Review Description" value={props.review.description} /> */}
        <div className="star-rating" className="revstr-box"
          className="star-rating-title" className="revst-box-container" className="revst-box"><h5>What is your star rating?</h5>
          <Rating ratingChanged={props.setRating} />
        </div>
        <Button type="submit" class="btn btn-outline-primary" className="revst-box">Submit your review</Button>
      </form >
    </div >

  )
}
export default ReviewForm
