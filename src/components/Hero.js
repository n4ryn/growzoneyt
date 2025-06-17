import Countdown from "./Countdown";

const Hero = () => {
  return (
    <div className="my-10 flex flex-col items-center justify-center gap-10">
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/aX8ATaF0s-o?si=rtW4Ku6vVEXTc45H"
        title="YouTube 1 k subscriber 4 k watch time 🇮🇳📞7878682407 website link description and comment👉"
        frameBorder="0"
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
