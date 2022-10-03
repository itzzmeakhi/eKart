import React from 'react';
import PropTypes from 'prop-types';


const Rating = ({ rating, numReviews, color }) => {
  return (
    <div className='rating'>
      <span>
        <i style={{ color: color, margin: '0.1rem' }} className={ 
          rating >= 1 ? 'fas fa-star' 
          : rating >= 0.5 ? 'fas fa-star-half-alt' 
          : 'far fa-star' }></i>
      </span>
      <span>
        <i style={{ color: color, margin: '0.1rem' }} className={ 
          rating >= 2 ? 'fas fa-star' 
          : rating >= 1.5 ? 'fas fa-star-half-alt' 
          : 'far fa-star' }></i>
      </span>
      <span>
        <i style={{ color: color, margin: '0.1rem' }} className={ 
          rating >= 3 ? 'fas fa-star' 
          : rating >= 2.5 ? 'fas fa-star-half-alt' 
          : 'far fa-star' }></i>
      </span>
      <span>
        <i style={{ color: color, margin: '0.1rem' }} className={ 
          rating >= 4 ? 'fas fa-star' 
          : rating >= 3.5 ? 'fas fa-star-half-alt' 
          : 'far fa-star' }></i>
      </span>
      <span>
        <i style={{ color: color, margin: '0.1rem' }} className={ 
          rating >= 5 ? 'fas fa-star' 
          : rating >= 4.5 ? 'fas fa-star-half-alt' 
          : 'far fa-star' }></i>
      </span>
      <span style={{ margin: '0.1rem', fontSize: '14px' }}> {numReviews}+ ratings </span>
    </div>
  );
}

Rating.defaultProps = {
  color: '#ff9f43'
};

Rating.propTypes = {
  rating: PropTypes.number.isRequired,
  numReviews: PropTypes.number.isRequired,
  color: PropTypes.string
};

export default Rating;