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
      <h2 className="heading">Reviews</h2>
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
              <span className="customer-name">{review.name}</span>
            </div>
            <div className="dealer-review-rating w-full flex items-center gap-0.5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="yellow"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="rgba(0,0,0,0.2)"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                />
              </svg>

              <span className="customer-rating">{review.rating}</span>
            </div>
            <div className="dealer-review-text w-full flex items-center gap-2">
              <span className="customer-text">{review.review}</span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ReviewSection;
