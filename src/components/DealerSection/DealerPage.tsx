import React from "react";
import PaymentSection from "./PaymentSection";
import DealerFeatureSection from "./DealerFeatureSection";
import DealerShopSection from "./DealerShopSection";
import DealerNameSection from "./DealerNameSection";
import Carousel from "./Carousel";
import ReviewSection from "./ReviewSection";

interface DealerInfoSectionProps {
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

const DealerPage = ({
  name,
  verified,
  address,
  dealsin,
  services,
  reviews,
  photos,
}: DealerInfoSectionProps) => {
  return (
    <>
      <div className="dealer-info-container h-full flex flex-col justify-center bg-white gap-5 flex-wrap sm:w-full px-10">
        <div className="dealer-photos w-full max-w-full">
          <Carousel items={photos} />
        </div>
        <div className="dealer-info w-full max-w-full flex flex-col justify-center">
          <DealerNameSection name={name} verified={verified} />
        </div>
        <div className="dealer-shop-info flex gap-6 w-[80%] items-stretch sm:flex-col sm:w-full sm:justify-center sm:items-center">
          <DealerShopSection address={address} />
        </div>
        <div className="dealer-more-container relative w-full flex rounded-xl gap-6 h-fit sm:flex-col">
          <div className="dealer-feature-container w-[70%] flex flex-col gap-10 sm:w-full">
            <DealerFeatureSection
              dealer_deal_logos={dealsin}
              dealer_service_logos={services}
            />
          </div>
          <div className="dealer-more-info-container w-[30%] h-full gap-10 flex flex-col sm:w-full">
            <div className="payment-section section-container w-full flex flex-col">
              <PaymentSection />
            </div>
            <div className="customer-review-section section-container flex flex-col">
              <ReviewSection reviews={reviews} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DealerPage;
