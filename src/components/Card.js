import Image from "next/image";

const Card = (props) => {
  const { title, image, rating, originalPrice, discountPrice, paymentLink } =
    props.data;

  const INR = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
  });

  return (
    <div className="card bg-base-100 w-full shadow-md/20 indicator">
      <span className="indicator-item indicator-start [--indicator-x:0%] [--indicator-y:0%] h-10 text-white badge bg-red-500">
        Sale !
      </span>
      <figure className="px-10 pt-10">
        {image && (
          <Image
            src={image}
            alt="Shoes"
            className="rounded-xl"
            width={200}
            height={200}
            priority
          />
        )}
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title text-sm font-extrabold">{title}</h2>
        <p className="text-xs font-bold">
          <span className="line-through mr-2">{INR.format(originalPrice)}</span>
          {INR.format(discountPrice)}
        </p>
        <div className="rating">
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
            aria-label="1 star"
            aria-current={rating === 1}
          />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
            aria-label="2 star"
            aria-current={rating === 2}
          />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
            aria-label="3 star"
            aria-current={rating === 3}
          />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
            aria-label="4 star"
            aria-current={rating === 4}
          />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
            aria-label="5 star"
            aria-current={rating === 5}
          />
        </div>
        <div className="card-actions w-full">
          <a
            href={paymentLink}
            className="btn bg-green-700 text-white w-full rounded-sm"
          >
            BUY NOW
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
