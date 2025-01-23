import Image from "next/image";
import React from "react";
import Dish from "./Dish";

const Featured = () => {
  return (
    <div className="container pt-40">
      <h2 className="text-6xl font-bold">Our</h2>
      <h2 className="text-6xl font-bold pt-2">
        Featured <span className="text-accent">Food</span>
      </h2>

      <p className="max-w-[550px] pt-10 text-gray-700">
      Our featured food offers a perfect blend of taste and quality, handpicked to make every meal unforgettable.
      </p>

      <Dish />

      <div className="grid md:grid-cols-[1fr,37%,1fr] gap-16 mt-10">
        <div className="w-fit mx-auto self-end">
          <Image
            className="w-[100%] max-w-[400px] sm:max-w-full h-auto shadow-2xl"
            src="/grid__1.png"
            width={300}
            height={600}
            alt="grid image"
          />

          <div className="space-y-4">
            <Dish />
            <h2 className="font-medium text-xl">Salad</h2>
            <p className="text-gray-700 text-[14px] xl:text-[16px]">
            Fresh, crisp, and packed with vibrant flavors, our salads are the perfect balance of health and taste in every bite.
            </p>
          </div>
        </div>
        <div className="w-fit mx-auto">
          <Image
            className="w-[100%] max-w-[400px] sm:max-w-full h-auto shadow-2xl"
            src="/grid__2.png"
            width={500}
            height={900}
            alt="grid image"
          />

          <div className="space-y-4">
            <Dish />
            <h2 className="font-medium text-xl">Baked apples</h2>
            <p className="text-gray-700 text-[14px] xl:text-[16px]">
            Warm, tender, and naturally sweet, our baked apples are a delightful treat, infused with cinnamon and a touch of comfort in every bite.
            </p>
          </div>
        </div>
        <div className="w-fit mx-auto self-end">
          <Image
            className="w-[100%] max-w-[400px] sm:max-w-full h-auto shadow-2xl"
            src="/grid__3.png"
            width={300}
            height={600}
            alt="grid image"
          />

          <div className="space-y-4">
            <Dish />
            <h2 className="font-medium text-xl">Cherries chicken</h2>
            <p className="text-gray-700 text-[14px] xl:text-[16px]">
            Juicy cherries meet tender chicken in a perfect harmony of sweet and savory flavors, creating a dish that is as unique as it is delicious.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
