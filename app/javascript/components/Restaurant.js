import React from 'react';
import { Link } from 'react-router-dom';
import Rating from './rating/rating';

export default function Restaurant({ image_url, name, location, average_score, slug }) {

  let imageSrc = "https://maps.googleapis.com/maps/api/staticmap?markers=";
  imageSrc += location.replace(/ /g, "+");
  imageSrc += ",Toronto,Ontario&zoom=13&scale=1&size=600x300&maptype=roadmap&format=png&visual_refresh=true";
  imageSrc += "&key=" + process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

  return (
    <article className='rest'>
      <div className='img-container'>
        <img src={image_url} alt={name} />
      </div>
      
      <div className='rest-footer'>
      <h3><Rating score={average_score / 100} canEdit={false} /></h3>
        <h4>{name}</h4>
        
        <p>{location}</p>
        <Link to={`/restaurants/${slug}`} className='btn btn-primary btn-details'>
          details
        </Link>
      </div>

      <img src={imageSrc} />

    </article >
  )

}
