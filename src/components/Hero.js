import Countdown from "./Countdown";

const Hero = () => {
  return (
    <div className="my-10 flex flex-col items-center justify-center gap-10">
      <iframe
        src="https://www.youtube.com/embed/NBACLM6X3sw"
        title="1000 subscriber 4k watch time complete 📞9235128365  💥link  discretion complete 40% off 🤠"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        className="px-4 h-[262px] w-full sm:h-[462px] md:w-[820px]"
      ></iframe>

      <p className="text-center text-4xl font-bold text-black">
        Sale is <span className="text-red-600 animate-ping">Live!!!</span>
      </p>

      <Countdown />
    </div>
  );
};

export default Hero;
