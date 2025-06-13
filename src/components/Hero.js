import Countdown from "./Countdown";

const Hero = () => {
  return (
    <div className="my-10 flex flex-col items-center justify-center gap-10 overflow-hidden">
      <iframe
        width="820"
        height="462"
        src="https://www.youtube.com/embed/NBACLM6X3sw"
        title="1000 subscriber 4k watch time complete 📞9235128365  💥link  discretion complete 40% off 🤠"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        // className="rounded-2xl"
        className="rounded-2xl w-[380px] h-[262px] sm:[w-620px] sm:[h-362px] md:w-[820px] md:h-[462px]"
      ></iframe>

      <Countdown />
    </div>
  );
};

export default Hero;
