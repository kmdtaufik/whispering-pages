import React from "react";
import Iconify from "../Iconify/Iconify";
import Typography from "../Typography/Typography";

export default function ClientReview(props) {
  const { name, rating, title, review, imgUrl, profession } = props.reviews;
  return (
    <div className="bg-white p-5 rounded-lg shadow-md py-5 mb-5">
      <div className="flex items-center justify-between gap-10">
        <div className="">
          <div className="flex">
            {[1, 2, 3, 4, 5].map((i) => (
              <Iconify
                key={i}
                icon={"material-symbols:star"}
                className={rating >= i ? "text-amber-300" : "text-secondary"}
              ></Iconify>
            ))}
          </div>
          <Typography className="text-secondary font-primary font-bold text-[18px]">
            {title}
          </Typography>
        </div>
        <div>
          <Iconify
            icon={"bxs:quote-right"}
            className="text-secondary w-20 h-20"
          ></Iconify>
        </div>
      </div>
      <Typography className="text-stone-100 text-justify font-primary text-[14px]">
        {review}
      </Typography>
      <div className="flex items-center gap-5 py-5">
        <img
          src={imgUrl}
          alt=""
          className="w-10 h-10 rounded-full object-cover"
        />
        <div className="flex flex-col">
          <Typography variant="small" className="uppercase text-secondary">
            {name}
          </Typography>
          <Typography className="" variant="small">
            {profession}
          </Typography>
        </div>
      </div>
    </div>
  );
}
