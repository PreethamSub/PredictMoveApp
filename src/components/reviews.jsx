// UserReviews.js

import React from 'react';

const UserReviews = ({ reviews }) => {
  return (
    <div className="reviews">
      {reviews.map((review, index) => (
        <div key={index} className="review">
          <div className="user-info flex items-center">
            <img
              src={review.userAvatar}
              alt={`User ${index + 1}`}
              className="w-10 h-10 rounded-full mr-4"
            />
            <div className="user-details">
              <h3 className="text-lg font-semibold">{review.userName}</h3>
              <p className="text-gray-500">{review.date}</p>
            </div>
          </div>
          <p className="rating mt-2 text-yellow-500">
            Rating: {review.rating}/5
          </p>
          <p className="comment mt-2">{review.comment}</p>
        </div>
      ))}
    </div>
  );
};

export default UserReviews;
