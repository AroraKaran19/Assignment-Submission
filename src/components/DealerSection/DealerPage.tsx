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

const DealerPage = ({
  name,
  verified,
  address,
  dealsin,
  services,
  reviews,
  photos,
}: DealerInfoSectionProps) => {
  const dealer_deal_logos = dealsin.map((deal) => ({ imageUrl: deal.logoUrl }));
  const dealer_deal_brands = dealsin.map((deal) => ({ name: deal.brand }));
  const dealer_service_logos = services.map((service) => ({
    imageUrl: service.logoUrl,
  }));
  const dealer_service_names = services.map((service) => ({
    name: service.service,
  }));

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
              dealer_deal_logos={dealer_deal_logos}
              dealer_brand_names={dealer_deal_brands}
              dealer_service_logos={dealer_service_logos}
              dealer_service_names={dealer_service_names}
            />
          </div>
          <div className="dealer-more-info-container w-[30%] h-full gap-10 flex flex-col sm:w-full">
            <div className="section-container w-full flex flex-col">
              <PaymentSection />
            </div>
            <div className="section-container flex flex-col">
              <ReviewSection reviews={reviews} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DealerPage;
