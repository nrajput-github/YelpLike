import React from 'react'
import Rating from './rating/rating';


const Review = (props) => {
  const { title, description, score, handleDestroy } = props

  return (
    <div className="revra-box-conatiner">
      {/* <div className="revds-box" className="revds-box-container"> */}
      <br />
      <div className="revra-box">
        <div className='rating_score'>
          <div className='rating score'>
            <Rating score={props.score} />
          </div>
        </div>
        <div className='title'><h5>{props.title} </h5></div>
        {/* <div className='description' className="revds-box-container" className="revds-box"><h3>{props.description}</h3> </div> */}
        <div className='description' className="revds-box-container" className="revds-box"> {props.description} </div>
        <div className='date'>{props.created_at} </div>
        <button className='deletButton' onClick={props.handleDestroy.bind(this, props.id)}>Delete</button>
        <br />
        <div />
      </div>
      {/* <button className='deletButton' onClick={props.handleDestroy.bind(this, props.id)}>Delete */}

      {/* </button> */}
    </div>

  )
}

export default Review