import { aboutUsData } from "@/utils/constants";

const Page = () => {
  return (
    <div className="p-10">
      <h1 className="bg-base-200 text-4xl font-bold text-center py-10 px-4">
        About Us
      </h1>
      <div className="md:flex items-center justify-center gap-20">
        <img
          src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
          className="hidden md:block object-cover object-top md:w-1/2 p-10"
          alt="Shoes"
        />

        <p className="text-justify mt-4 font-regular text-lg md:w-1/2">
          Since 2018, Monotizantion has led the market in social media services.
          QQTube has expanded to meet the needs of discerning customers in an
          advanced market with an all-new marketplace, bringing buyers and
          sellers together like no other website in the world!
          <br />
          <br />
          With an amazingly user-friendly website experience, buyers can connect
          with a network of professional sellers that offer services, affordable
          pricing, and faster delivery. In short, you can get exactly what you
          want at the highest standard of excellence – and the lowest prices
        </p>
      </div>

      <h1 className="text-4xl font-bold text-center py-10 px-4">
        Reason to choose us
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {aboutUsData.map((item) => (
          <div
            key={item.id}
            className="card bg-base-100 w-full md:w-80 shadow-md/10"
          >
            <figure>
              <img
                src={item.image}
                className="object-cover object-top w-full h-60"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{item.title}</h2>
              <p>{item.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
