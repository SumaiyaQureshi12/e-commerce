import React from "react";
import Dish from "./Dish";
import ServicesCard from "./ServicesCard";

const servicesData = [
  {
    img: "/services__1.png",
    title: "Professonal Kitchen",
    desc: "Where passion meets precision, our professional kitchen delivers exceptional taste and quality in every dish.",
  },
  {
    img: "/services__2.png",
    title: "Delivery",
    desc: "Fast, reliable, and convenient, our delivery service brings your favorite meals right to your doorstep.",
  },
  {
    img: "/services__3.png",
    title: "ColdDrink List",
    desc: "Chilled, refreshing, and full of flavor, our cold drinks are the perfect way to quench your thirst and cool off.",
  },
  {
    img: "/services__4.png",
    title: "Free Wifi",
    desc: "Enjoy fast and free Wi-Fi while you savor your meal, making every visit more convenient and enjoyable.",
  },
];

const Services = () => {
  return (
    <div className="container pt-40">
      <div className="space-y-4 w-fit mx-auto text-center">
        <h2 className="text-4xl md:text-6xl font-bold">
          Choose Best <span className="text-accent">Service</span>
        </h2>
        <p className="text-gray-700">
        Choose the best service for an exceptional dining experience, where quality, convenience, and satisfaction come first.
          <br />
          
        </p>
        <div className="w-fit mx-auto">
          <Dish />
        </div>
      </div>

      <div className="grid gap-10 md:grid-cols-4 md:gap-4 pt-8">
        {servicesData.map((item, index) => (
          <ServicesCard
            key={index}
            img={item.img}
            title={item.title}
            desc={item.desc}
          />
        ))}
      </div>
    </div>
  );
};

export default Services;
