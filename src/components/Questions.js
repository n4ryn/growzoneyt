import { faqData } from "@/utils/constants";

const Questions = () => {
  return (
    <div className="p-10 overflow-hidden">
      <h1 className="text-3xl font-bold text-center mb-10">
        Frequently Asked Questions
      </h1>
      {faqData.map((item) => (
        <div
          key={item.id}
          className="flex gap-16 bg-base-300 mt-10 p-4 rounded-lg shadow-lg/10"
        >
          {item.id % 2 === 1 && <img src={item.image} className="flex-1/5" />}
          <div className="flex-4/5">
            <h1 className="text-3xl font-bold">{item.title}</h1>
            <p className="py-6">{item.content}</p>
          </div>
          {item.id % 2 === 0 && <img src={item.image} className="flex-1/5" />}
        </div>
      ))}
    </div>
  );
};

export default Questions;
