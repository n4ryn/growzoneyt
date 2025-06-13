import Card from "./Card";

const Service = (props) => {
  const { title, services } = props.data;

  return (
    <div className="p-4 md:p-10">
      <p className="text-3xl font-semibold text-center mb-8 bg-red-500 text-white rounded-2xl py-4">
        {title}
      </p>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-10">
        {services.map((item) => (
          <Card key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
};

export default Service;
