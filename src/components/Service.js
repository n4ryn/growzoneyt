import React from "react";
import Card from "./Card";

const Service = (props) => {
  const { title, services } = props.data;

  return (
    <div className="p-10">
      <p className="text-3xl font-semibold text-center mb-8 bg-red-200/40 rounded-2xl py-4">
        {title}
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {services.map((item) => (
          <Card key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
};

export default Service;
