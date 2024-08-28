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
      "PLOT NUMBER-09 GROUND FLOOR CISF CAMPUS ROAD, AHINSA KHAND-02 INDIRAPURAM, Ghaziabad, Uttar Pradesh, 201014",
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
        imageUrl: "https://via.placeholder.com/150",
      },
      {
        imageUrl: "https://via.placeholder.com/150",
      },
      {
        imageUrl: "https://via.placeholder.com/150",
      },
      {
        imageUrl: "https://via.placeholder.com/150",
      },
      {
        imageUrl: "https://via.placeholder.com/150",
      },
      {
        imageUrl: "https://via.placeholder.com/150",
      },
      {
        imageUrl: "https://via.placeholder.com/150",
      },
      {
        imageUrl: "https://via.placeholder.com/150",
      },
    ],
  };

  return (
    <div className="w-full h-[120vh]">
      <div className="white-box-container w-full flex flex-col items-center mt-5 relative">
        {/* Dealer Info */}
        <DealerPage {...dealerInfo} />
      </div>
    </div>
  );
};

export default page;
