import Image from "next/image";
import React from "react";

const Survey = () => {
  return (
    <div className="container pt-40">
      <div className="grid lg:grid-cols-[50%,1fr] gap-20">
        <div>
          <Image
            className="w-[100%] h-auto lg:w-auto lg:h-[90vh]"
            src="/survey.png"
            width={1000}
            height={600}
            alt="survey image"
          />
        </div>

        <div className="self-center">
          <h2 className="text-4xl md:text-6xl font-bold">Survey</h2>
          <h2 className="text-4xl md:text-6xl font-bold pt-3">
            About our <span className="text-accent">Food</span>
          </h2>

          <p className="text-gray-700 pt-16">
            Welcome to Our Food, where taste meets tradition! We bring you the
            finest and most delicious dishes that not only satisfy your taste
            buds but also win your heart. Our mission is to deliver healthy and
            delicious meals using high-quality ingredients.
          </p>

          <p className="text-gray-700 pt-8">
            Whether youre craving the comfort of homemade flavors, modern
            cuisines, or unique taste experiences, our menu has something for
            everyone. Each dish is made with love and dedication, ensuring that
            every bite is a memorable one. Your trust and satisfaction are our
            top priorities, which is why we offer exceptional service whether
            you choose to dine-in, takeout, or prefer delivery.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Survey;
