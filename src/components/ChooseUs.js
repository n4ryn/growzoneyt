import { chooseUsData } from "@/utils/constants";

const ChooseUs = () => {
  return (
    <div className="p-4 md:p-10 overflow-hidden w-full">
      <h1 className="text-2xl md:text-3xl font-bold text-center bg-red-500 text-white mb-10 w-full py-4 rounded-2xl">
        Why Choose Us?
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 bg-base-100 p-6 rounded-xl shadow-md">
        {chooseUsData.map((item) => (
          <div
            key={item.id}
            className="flex flex-col items-center justify-center gap-4 text-center"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-24 h-24 object-contain"
            />
            <p className="text-sm md:text-base font-semibold">{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChooseUs;
