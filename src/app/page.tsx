import DealerPage from "@/components/DealerSection/DealerPage";
import React from "react";

interface Dealer {
  name: string;
  verified: boolean;
  address: string;
  dealsin: { imageUrl: string; name: string }[];
  services: { imageUrl: string; name: string }[];
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
        name: "MRF",
        imageUrl: "https://www.mrftyres.com/images/mrf-logo.png",
      },
      {
        name: "CEAT",
        imageUrl: "https://www.ceat.com/content/dam/ceat/website/logo.png",
      },
      {
        name: "JK Tyre",
        imageUrl: "https://www.jktyre.com/images/jk-logo.jpg",
      },
      {
        name: "Bridgestone",
        imageUrl:
          "https://www.bridgestoneamericas.com/content/dam/corpcomm/americas/assets/media-center/logos/bridgestone-logos/bridgestone-mark-logos/album-cover.png",
      },
      {
        name: "Apollo",
        imageUrl: "https://shop.apollotyres.com/images/logo.png",
      },
    ],
    services: [
      {
        name: "Wheel Balancing",
        imageUrl:
          "https://media.istockphoto.com/id/607978934/vector/mechanic.jpg?s=612x612&w=0&k=20&c=VDHmM4DpdPztrOIkLBM9bbg3x_TodZTet8AfwQ4NYMg=",
      },
      {
        name: "Wheel Alignment",
        imageUrl:
          "https://media.istockphoto.com/id/607978934/vector/mechanic.jpg?s=612x612&w=0&k=20&c=VDHmM4DpdPztrOIkLBM9bbg3x_TodZTet8AfwQ4NYMg=",
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
