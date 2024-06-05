import { ProductsPropsRating } from "../../types";
import { StarOutlineIcon, StarHalfOutlineIcon, StarFullOutlineIcon } from "../icons/index";

export default function Rating({ rating, numReviews }: ProductsPropsRating) {
  return (
    <div className="hidden sm:flex items-center gap-2 py-2">
      <div className="flex items-center">
        <span>
          <i>
            {rating >= 1 ? (
              <StarFullOutlineIcon />
            ) : rating >= 0.5 ? (
              <StarHalfOutlineIcon />
            ) : (
              <StarOutlineIcon />
            )}
          </i>
        </span>
        <span>
          <i>
            {rating >= 2 ? (
              <StarFullOutlineIcon />
            ) : rating >= 1.5 ? (
              <StarHalfOutlineIcon />
            ) : (
              <StarOutlineIcon />
            )}
          </i>
        </span>
        <span>
          <i>
            {rating >= 3 ? (
              <StarFullOutlineIcon />
            ) : rating >= 2.5 ? (
              <StarHalfOutlineIcon />
            ) : (
              <StarOutlineIcon />
            )}
          </i>
        </span>
        <span>
          <i>
            {rating >= 4 ? (
              <StarFullOutlineIcon />
            ) : rating >= 3.5 ? (
              <StarHalfOutlineIcon />
            ) : (
              <StarOutlineIcon />
            )}
          </i>
        </span>
        <span>
          <i>
            {rating >= 5 ? (
              <StarFullOutlineIcon />
            ) : rating >= 4.5 ? (
              <StarHalfOutlineIcon />
            ) : (
              <StarOutlineIcon />
            )}
          </i>
        </span>
      </div>
      {numReviews != 0 ? <span className="text-sm">{`${numReviews} reviews`}</span> : ""}
    </div>
  );
}
