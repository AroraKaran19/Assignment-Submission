import DealerPage from "@/components/DealerSection/DealerPage";
import React from "react";

interface Dealer {
  name: string;
  verified: boolean;
  address: string;
  dealsin: { brand: string; logoUrl: string }[];
  services: { service: string; logoUrl: string }[];
  reviews: {
    profilePhotoUrl: string;
    name: string;
    rating: number;
    review: string;
  }[];
  photos: { imageUrl: string }[];
}

const page = () => {
  const dealerInfo: Dealer = {
    name: "SHREE HEMKUNT TYRES AND SERVICES",
    verified: true,
    address:
      "Plot No-09 Ground Floor CISF Campus Road, Ahinsa Khand-02 Indirapuram, Ghaziabad, Uttar Pradesh, 201014",
    dealsin: [
      {
        brand: "MRF",
        logoUrl: "https://via.placeholder.com/150",
      },
      {
        brand: "CEAT",
        logoUrl: "https://via.placeholder.com/150",
      },
      {
        brand: "JK Tyre",
        logoUrl: "https://via.placeholder.com/150",
      },
      {
        brand: "Bridgestone",
        logoUrl: "https://via.placeholder.com/150",
      },
      {
        brand: "Apollo",
        logoUrl: "https://via.placeholder.com/150",
      },
    ],
    services: [
      {
        service: "Wheel Balancing",
        logoUrl: "https://via.placeholder.com/150",
      },
      {
        service: "Wheel Alignment",
        logoUrl: "https://via.placeholder.com/150",
      },
    ],
    reviews: [
      {
        profilePhotoUrl: "https://via.placeholder.com/20",
        name: "Rahul",
        rating: 4.5,
        review: "Good service",
      },
      {
        profilePhotoUrl: "https://via.placeholder.com/20",
        name: "Rahul",
        rating: 4.5,
        review: "Good service",
      },
      {
        profilePhotoUrl: "https://via.placeholder.com/20",
        name: "Rahul",
        rating: 4.5,
        review: "Good service",
      },
      {
        profilePhotoUrl: "https://via.placeholder.com/20",
        name: "Rahul",
        rating: 4.5,
        review: "Good service",
      },
      {
        profilePhotoUrl: "https://via.placeholder.com/20",
        name: "Rahul",
        rating: 4.5,
        review: "Good service",
      },
    ],
    photos: [
      {
        imageUrl:
          "https://lh3.googleusercontent.com/places/AAcXr8ryfQqAWHDmAPXAuK5o1Sk81OiWbLXHHNRm8OTBLFZE41-3arlK-Q7aMXjXp106o8p8Dca6OTnSTynW6ykkg86zy1-j4JRkpXI=s1600-w300",
      },
      {
        imageUrl:
          "https://lh3.googleusercontent.com/places/AAcXr8ryfQqAWHDmAPXAuK5o1Sk81OiWbLXHHNRm8OTBLFZE41-3arlK-Q7aMXjXp106o8p8Dca6OTnSTynW6ykkg86zy1-j4JRkpXI=s1600-w300",
      },
      {
        imageUrl:
          "https://lh3.googleusercontent.com/places/AAcXr8ryfQqAWHDmAPXAuK5o1Sk81OiWbLXHHNRm8OTBLFZE41-3arlK-Q7aMXjXp106o8p8Dca6OTnSTynW6ykkg86zy1-j4JRkpXI=s1600-w300",
      },
      {
        imageUrl:
          "https://lh3.googleusercontent.com/places/AAcXr8ryfQqAWHDmAPXAuK5o1Sk81OiWbLXHHNRm8OTBLFZE41-3arlK-Q7aMXjXp106o8p8Dca6OTnSTynW6ykkg86zy1-j4JRkpXI=s1600-w300",
      },
      {
        imageUrl:
          "https://lh3.googleusercontent.com/places/AAcXr8ryfQqAWHDmAPXAuK5o1Sk81OiWbLXHHNRm8OTBLFZE41-3arlK-Q7aMXjXp106o8p8Dca6OTnSTynW6ykkg86zy1-j4JRkpXI=s1600-w300",
      },
      {
        imageUrl:
          "https://lh3.googleusercontent.com/places/AAcXr8ryfQqAWHDmAPXAuK5o1Sk81OiWbLXHHNRm8OTBLFZE41-3arlK-Q7aMXjXp106o8p8Dca6OTnSTynW6ykkg86zy1-j4JRkpXI=s1600-w300",
      },
    ],
  };

  return (
    <div className="main-page w-full">
      <div className="white-box-container w-full flex flex-col items-center mt-5 relative">
        {/* Dealer Info */}
        <DealerPage {...dealerInfo} />
      </div>
    </div>
  );
};

export default page;
