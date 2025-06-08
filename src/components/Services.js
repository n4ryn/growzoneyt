import Service from "./Service";
import { servicesData } from "@/utils/constants";

const Services = () => {
  return (
    <div>
      {servicesData.map((item) => (
        <Service key={item.id} data={item} />
      ))}
    </div>
  );
};

export default Services;
