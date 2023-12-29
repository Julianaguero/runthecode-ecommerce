import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";
import { ProductsPropsRating } from "../types";

export default function Rating({ rating, numReviews }: ProductsPropsRating) {
  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center">
        <span>
          <i>
            {rating >= 1 ? (
              <FaStar />
            ) : rating >= 0.5 ? (
              <FaStarHalfAlt />
            ) : (
              <FaRegStar />
            )}
          </i>
        </span>
        <span>
          <i>
            {rating >= 2 ? (
              <FaStar />
            ) : rating >= 1.5 ? (
              <FaStarHalfAlt />
            ) : (
              <FaRegStar />
            )}
          </i>
        </span>
        <span>
          <i>
            {rating >= 3 ? (
              <FaStar />
            ) : rating >= 2.5 ? (
              <FaStarHalfAlt />
            ) : (
              <FaRegStar />
            )}
          </i>
        </span>
        <span>
          <i>
            {rating >= 4 ? (
              <FaStar />
            ) : rating >= 3.5 ? (
              <FaStarHalfAlt />
            ) : (
              <FaRegStar />
            )}
          </i>
        </span>
        <span>
          <i>
            {rating >= 5 ? (
              <FaStar />
            ) : rating >= 4.5 ? (
              <FaStarHalfAlt />
            ) : (
              <FaRegStar />
            )}
          </i>
        </span>
      </div>
      {numReviews != 0 ? <span className="text-sm">{`${numReviews} reviews`}</span> : ""}
    </div>
  );
}
