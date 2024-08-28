import React from "react";

const DealerShopSection = ({ address }: { address: string }) => {
  return (
    <>
      <div className="dealer-shop-address flex-auto flex flex-col gap-4 sm:items-center sm:justify-center">
        <p className="sm:text-center">Address: {address}</p>
        <div className="get-directions-btn flex items-center">
          <a
            href="https://maps.app.goo.gl/eABcdcg3siKWUdy17"
            className="directions-btn bg-[#1a73e8] px-6 py-2 text-white rounded-md"
          >
            Get Directions
          </a>
        </div>
      </div>
      <div className="dealer-shop-timming flex-none flex flex-col">
        <p>Open - Monday to Sunday</p>
        <p>9:30 AM - 7:30 PM</p>
      </div>
      <div className="dealer-shop-ratings flex-none flex">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="yellow"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
          />
        </svg>
        <p>
          4.9{" "}
          <span>
            <a
              href="https://www.google.com/search?hl=en-IN&gl=in&q=CEAT+Shoppe,+Shree+Hemkunt+Tyres+And+Services,+Plot+No+9+Ahinsa+Khand+2+CISF,+near+Shanti+Gopal+Hospital,+Indirapuram,+Ghaziabad,+Uttar+Pradesh+201014&ludocid=14008670523925490793&lsig=AB86z5U0yfdwdoZSoQvpkeag6jY4&hl=en&gl=IN#lrd=0x390cf1bae0e73a15:0xc268cb9ed2106c69,1"
              className="underline"
            >
              (2920 Reviews)
            </a>
          </span>
        </p>
      </div>
    </>
  );
};

export default DealerShopSection;
