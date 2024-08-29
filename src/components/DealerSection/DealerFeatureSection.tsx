import React from "react";
import Carousel from "./Carousel";

interface DealerFeatureSectionProps {
  dealer_deal_logos: { imageUrl: string; name?: string }[];
  dealer_service_logos: { imageUrl: string; name?: string }[];
}

const DealerFeatureSection = ({
  dealer_deal_logos,
  dealer_service_logos,
}: DealerFeatureSectionProps) => {
  return (
    <>
      <div className="section-container h-full w-full flex flex-col gap-6">
        <div className="dealer-description">
          <div className="heading">
            <p>Description</p>
          </div>
          <div className="dealer-description-text flex flex-wrap">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac
              sapien nec nunc porttitor tincidunt. Sed auctor, ex sit amet
              ultricies ultricies, nunc libero tincidunt urna, nec consectetur
              justo nisl nec purus. Proin nec nunc nec ipsum tincidunt
              tincidunt. Nunc nec odio in odio consequat condimentum. Nulla
              facilisi. Sed ac sapien nec nunc porttitor
            </p>
          </div>
        </div>
        <div className="dealer-deals">
          <div className="heading">
            <p>Deals In</p>
          </div>
          <div className="dealer-deals-list flex overflow-auto gap-4 scroll">
            <Carousel
              items={dealer_deal_logos}
              className="rounded-full"
              bgBlur={true}
              divClassName={{
                upperDiv: "py-0.5 px-3",
                lowerDiv:
                  "rounded-full border-[1px] border-solid border-gray-300",
              }}
            />
          </div>
        </div>
        <div className="dealer-services">
          <div className="heading">
            <p>Services</p>
          </div>
          <div className="dealer-services-list">
            <Carousel
              items={dealer_service_logos}
              className="rounded-full"
              bgBlur={true}
              divClassName={{
                upperDiv: "p-2",
                lowerDiv:
                  "rounded-full border-[1px] border-solid border-gray-300",
              }}
            />
          </div>
        </div>
        <div className="dealer-shop-location">
          <div className="heading ">Location</div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14006.276773909989!2d77.3789929!3d28.6426711!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cf1bae0e73a15%3A0xc268cb9ed2106c69!2sCEAT%20Shoppe%2C%20Shree%20Hemkunt%20Tyres%20And%20Services!5e0!3m2!1sen!2sin!4v1724859284399!5m2!1sen!2sin"
            height="300"
            className="border-0 w-full"
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default DealerFeatureSection;
