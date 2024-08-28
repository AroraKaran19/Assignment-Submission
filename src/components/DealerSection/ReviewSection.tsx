import React from "react";

const ReviewSection = ({
  reviews,
}: {
  reviews: {
    profilePhotoUrl: string;
    name: string;
    rating: number;
    review: string;
  }[];
}) => {
  return (
    <>
      <h2 className="text-lg font-bold">Reviews</h2>
      <div className="dealer-review-container w-full flex flex-col gap-4">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="customer-review w-full flex flex-col gap-2"
          >
            <div className="dealer-review-profile w-full flex items-center gap-2">
              <img
                src={review.profilePhotoUrl}
                alt="profile"
                className="w-10 h-10 rounded-full"
              />
              <span className="text-sm font-bold">{review.name}</span>
            </div>
            <div className="dealer-review-rating w-full flex items-center gap-2">
              <span className="text-sm font-bold">{review.rating} ⭐️</span>
            </div>
            <div className="dealer-review-text w-full flex items-center gap-2">
              <span className="text-sm">{review.review}</span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ReviewSection;
