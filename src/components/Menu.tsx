import React from "react";
import Dish from "./Dish";
import Image from "next/image";
import MenuCard from "./MenuCard";

const menuData = [
  {
    img: "/cake.avif",
    title: "Delicious Cake",
    desc: "Moist, fluffy, and bursting with flavor, our cakes are the perfect treat for any occasion.",
    price: "$25",
  },
  {
    img: "/pizza.jpg",
    title: "Italian Pizza",
    desc: "Authentic, crispy, and loaded with the finest ingredients, our Italian pizza brings a true taste of Italy to your plate",
    price: "$23",
  },
  {
    img: "/biryani.webp",
    title: "Biryani",
    desc: "Rich in spices and full of flavor, our biryani is a perfect blend of tradition and taste in every bite.",
    price: "$30",
  },
  {
    img: "/tikka.jpeg",
    title: "Chicken tikka",
    desc: "Juicy, tender, and perfectly spiced, our chicken tikka offers a burst of flavor in every bite, grilled to perfection.",
    price: "$25",
  },
  {
    img: "/karahi.jpeg",
    title: "White karahi",
    desc: "Rich, creamy, and packed with aromatic spices, our white karahi is a perfect blend of flavor and comfort in every bite.",
    price: "$35",
  },
  {
    img: "/pizza.jpg",
    title: "Fry fish",
    desc: "Golden, crispy, and full of flavor, our fried fish is a deliciously crunchy treat that’s simply irresistible",
    price: "$30",
  },
  {
    img: "/kabab.jpeg",
    title: "Gola kabab",
    desc: "Juicy, flavorful, and perfectly grilled, our gola kebabs are a mouthwatering delight that melt in your mouth with every bite.",
    price: "$15",
  },
  {
    img: "/burger.jpeg",
    title: "Zinger burgur",
    desc: "Crunchy, spicy, and packed with flavor, our Zinger burger delivers the perfect combination of crispy chicken and zesty toppings.",
    price: "$10",
  },
];

const Menu = () => {
  return (
    <div className="container pt-40">
      <div className="space-y-4 w-fit mx-auto text-center">
        <h2 className="text-4xl md:text-6xl font-bold">
          Our <span className="text-accent">Menu</span>
        </h2>
        <p className="text-gray-700">
        Explore our diverse menu, offering a wide variety of delicious dishes crafted to satisfy every craving, from appetizers to desserts.
          <br />
          
        </p>
        <div className="w-fit mx-auto">
          <Dish />
        </div>
      </div>

      <ul className="mt-10 hidden sm:flex gap-6 md:gap-10 lg:gap-20 w-fit mx-auto">
        <li className="bg-accent text-white p-1">Appetizers</li>
        <li className="bg-accent text-white p-1">Breakfast</li>
        <li className="bg-accent text-white p-1">Salads</li>
        <li className="bg-accent text-white p-1">Meat & Fish</li>
        <li className="bg-accent text-white p-1">Soup</li>
        <li className="bg-accent text-white p-1">Desert</li>
        <li className="bg-accent text-white p-1">Drinks</li>
      </ul>

      <div className="grid lg:grid-cols-[35%,1fr] gap-10 pt-10">
        <div className="w-fit mx-auto">
          <Image
            className="w-[100%] max-w-[400px] h-auto"
            src="/menu_left.png"
            width={500}
            height={500}
            alt="dish"
          />
        </div>

        <div className="grid w-fit mx-auto sm:grid-cols-2 gap-4">
          {menuData.map((item, index) => (
            <MenuCard
              key={index}
              img={item.img}
              title={item.title}
              desc={item.desc}
              price={item.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;
