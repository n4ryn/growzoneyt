import { aboutUsData } from "@/utils/constants";
import Image from "next/image";

const Page = () => {
  return (
    <div className="p-4 md:px-10 md:pb-10">
      <h1 className="text-white text-4xl font-bold text-center py-10">
        About Us
      </h1>

      <div className="bg-base-100 md:flex gap-4 items-center justify-center p-4 rounded-lg">
        <img
          src="/about1.jpg"
          className="hidden md:block w-2/5 rounded-xl"
          alt="Shoes"
        />

        <p className="text-justify font-regular text-lg">
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

      <h2 className="text-3xl text-white font-bold text-center py-10 px-4">
        Reason to choose us
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 bg-base-100 p-4 rounded-xl">
        {aboutUsData.map((item) => (
          <div
            key={item.id}
            className="card bg-base-100 w-full shadow-md/30 hover:shadow-lg/30 border-1 border-blue-300"
          >
            <figure className="px-10 pt-10 h-3/4">
              {item.image && (
                <Image
                  src={item.image}
                  alt="Shoes"
                  className="rounded-xl"
                  width={200}
                  height={200}
                  priority
                />
              )}
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
