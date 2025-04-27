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
            <Iconify
              icon={"material-symbols:star"}
              className={rating >= 1 ? "text-amber-300" : "text-secondary"}
            ></Iconify>
            <Iconify
              icon={"material-symbols:star"}
              className={rating >= 2 ? "text-amber-300" : "text-secondary"}
            ></Iconify>
            <Iconify
              icon={"material-symbols:star"}
              className={rating >= 3 ? "text-amber-300" : "text-secondary"}
            ></Iconify>
            <Iconify
              icon={"material-symbols:star"}
              className={rating >= 4 ? "text-amber-300" : "text-secondary"}
            ></Iconify>
            <Iconify
              icon={"material-symbols:star"}
              className={rating >= 5 ? "text-amber-300" : "text-secondary"}
            ></Iconify>
          </div>
          <Typography variant="h5" className="text-secondary">
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
      <Typography className="text-black opacity-50 text-justify" variant="p">
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
