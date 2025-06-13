import { faqData } from "@/utils/constants";
import Image from "next/image";

const Questions = () => {
  return (
    <div className="p-4 md:p-10 overflow-hidden w-full">
      <h1 className="text-2xl font-bold text-center bg-red-500 text-white mb-10 w-full py-4 rounded-2xl">
        Frequently Asked Questions
      </h1>
      {faqData.map((item) => (
        <div
          key={item.id}
          className="flex flex-col md:flex-row justify-center items-center gap-16 bg-base-300 mt-10 p-4 rounded-lg shadow-lg/10"
        >
          {item.id % 2 === 1 && (
            <img
              src={item.image}
              className="hidden md:block md:flex-2/5"
              alt="image"
            />
          )}
          <div className="flex-3/5">
            <h1 className="text-2xl font-bold">{item.title}</h1>
            <p className="py-6 text-sm text-justify">{item.content}</p>
          </div>
          {item.id % 2 === 0 && (
            <img
              src={item.image}
              className="hidden md:block md:flex-2/5"
              alt="image"
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default Questions;
