import { ProductStars } from "./style";
import {ReactComponent as Star} from '../../assets/icons/star.svg';
import {ReactComponent as StarEmpty} from '../../assets/icons/starempty.svg';


export const RatingStars = (rating) => {
  const limitStars = 5;

  return (
    <ProductStars>
      {
        Array(limitStars).fill().map((_, index) => {
          const star = index + 1;
          return (
            <span key={star}>
              {star <= rating.rating ? <Star/> : <StarEmpty/>}
            </span>
          );
        })
      }
    </ProductStars>
  );
};