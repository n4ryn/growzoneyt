import React from "react";
import Service from "./Service";

const data = [
  {
    id: 1,
    title: "Youtube Subscriber",
    services: [
      {
        id: 1,
        title: "Youtube Subscriber 50 Lifetime Guarantee",
        image: "/youtube.png",
        rating: 4,
        originalPrice: 500,
        discountPrice: 149,
        paymentLink: "#",
      },
      {
        id: 2,
        title: "Youtube Subscriber 100 Lifetime Guarantee",
        image: "/youtube.png",
        rating: 4,
        originalPrice: 699,
        discountPrice: 299,
        paymentLink: "#",
      },
      {
        id: 3,
        title: "Youtube Subscriber 500 Lifetime Guarantee",
        image: "/youtube.png",
        rating: 5,
        originalPrice: 2999,
        discountPrice: 1359,
        paymentLink: "#",
      },
      {
        id: 4,
        title: "Youtube Subscriber 1000 Lifetime Guarantee",
        image: "/youtube.png",
        rating: 5,
        originalPrice: 7999,
        discountPrice: 1998,
        paymentLink: "#",
      },
      {
        id: 5,
        title: "Youtube Subscriber 2000 Lifetime Guarantee",
        image: "/youtube.png",
        rating: 5,
        originalPrice: 14999,
        discountPrice: 3499,
        paymentLink: "#",
      },
      {
        id: 6,
        title:
          "YouTube full monetization pack 4000 watch time 1000 subscriber non drop lifetime​",
        image: "/youtube.png",
        rating: 5,
        originalPrice: 19999,
        discountPrice: 5999,
        paymentLink: "#",
      },
    ],
  },
  {
    id: 2,
    title: "Youtube Watch Time",
    services: [
      {
        id: 1,
        title: "Youtube Watch Time Guarantee Non Drop 2000 Hours",
        image: "/youtube.png",
        rating: 4,
        originalPrice: 8499,
        discountPrice: 2499,
        paymentLink: "#",
      },
      {
        id: 2,
        title: "Youtube Watch Time Guarantee Non Drop 4000 Hours",
        image: "/youtube.png",
        rating: 5,
        originalPrice: 14999,
        discountPrice: 3999,
        paymentLink: "#",
      },
    ],
  },
  {
    id: 3,
    title: "Youtube Views",
    services: [
      {
        id: 1,
        title: "Youtube Lifetime Guarantee View 1000",
        image: "/youtube.png",
        rating: 4,
        originalPrice: 799,
        discountPrice: 298,
        paymentLink: "#",
      },
      {
        id: 2,
        title: "Youtube Lifetime Guarantee View 10000",
        image: "/youtube.png",
        rating: 4,
        originalPrice: 9999,
        discountPrice: 1978,
        paymentLink: "#",
      },
      {
        id: 3,
        title: "Youtube Views",
        image: "/youtube.png",
        rating: 4,
        originalPrice: 10,
        discountPrice: 8,
        paymentLink: "#",
      },
      {
        id: 4,
        title: "Youtube Views",
        image: "/youtube.png",
        rating: 4,
        originalPrice: 10,
        discountPrice: 8,
        paymentLink: "#",
      },
    ],
  },
  {
    id: 4,
    title: "Instagram Followers",
    services: [
      {
        id: 1,
        title: "Instagram Followers",
        image: "/youtube.png",
        rating: 4,
        originalPrice: 10,
        discountPrice: 8,
        paymentLink: "https://www.instagram.com/vinay.sawan.20/",
      },
      {
        id: 2,
        title: "Instagram Followers",
        image: "/youtube.png",
        rating: 4,
        originalPrice: 10,
        discountPrice: 8,
        paymentLink: "https://www.instagram.com/vinay.sawan.20/",
      },
      {
        id: 3,
        title: "Instagram Followers",
        image: "/youtube.png",
        rating: 4,
        originalPrice: 10,
        discountPrice: 8,
        paymentLink: "https://www.instagram.com/vinay.sawan.20/",
      },
    ],
  },
  {
    id: 5,
    title: "Instagram Views",
    services: [
      {
        id: 1,
        title: "Instagram Views",
        image: "/youtube.png",
        rating: 4,
        originalPrice: 10,
        discountPrice: 8,
        paymentLink: "https://www.instagram.com/vinay.sawan.20/",
      },
      {
        id: 2,
        title: "Instagram Views",
        image: "/youtube.png",
        rating: 4,
        originalPrice: 10,
        discountPrice: 8,
        paymentLink: "https://www.instagram.com/vinay.sawan.20/",
      },
      {
        id: 3,
        title: "Instagram Views",
        image: "/youtube.png",
        rating: 4,
        originalPrice: 10,
        discountPrice: 8,
        paymentLink: "https://www.instagram.com/vinay.sawan.20/",
      },
    ],
  },
  {
    id: 6,
    title: "Facebook Services",
    services: [
      {
        id: 1,
        title: "Facebook Services",
        image: "/youtube.png",
        rating: 4,
        originalPrice: 10,
        discountPrice: 8,
        paymentLink: "https://www.facebook.com/vinay.sawan.20/",
      },
      {
        id: 2,
        title: "Facebook Services",
        image: "/youtube.png",
        rating: 4,
        originalPrice: 10,
        discountPrice: 8,
        paymentLink: "https://www.facebook.com/vinay.sawan.20/",
      },
    ],
  },
];

const Services = () => {
  return (
    <div>
      {data.map((item) => (
        <Service key={item.id} data={item} />
      ))}
    </div>
  );
};

export default Services;
