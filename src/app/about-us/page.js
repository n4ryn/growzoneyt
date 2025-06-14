import { aboutUsData } from "@/utils/constants";

const Page = () => {
  return (
    <div className="pb-10">
      <h1 className="text-white text-4xl font-bold text-center py-10">
        About Us
      </h1>
      <div className="md:flex items-center justify-center gap-20 p-4 md:p-10 bg-base-100 rounded-xl">
        <img
          src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
          className="hidden md:block object-cover object-top md:w-1/2"
          alt="Shoes"
        />

        <p className="text-justify mt-4 font-regular text-lg md:w-1/2">
          Since 2018, GrowZoneYT has been a leader in the social media services
          industry. GrowZoneYT has continually evolved to meet the demands of
          savvy customers by launching an innovative marketplace that seamlessly
          connects buyers and sellers like no other platform.
          <br />
          <br />
          Designed with a highly intuitive and user-friendly interface, our
          website enables buyers to access a trusted network of professional
          sellers offering top-quality services at competitive prices with
          faster delivery. In short, we make it easy to get exactly what you
          need — with exceptional quality and the best value available.
        </p>
      </div>

      <h1 className="text-4xl text-white font-bold text-center py-10 px-4">
        Reason to choose us
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 p-4 md:p-10 bg-base-100 rounded-xl">
        {aboutUsData.map((item) => (
          <div
            key={item.id}
            className="card bg-base-100 w-full md:w-80 shadow-lg/30"
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
