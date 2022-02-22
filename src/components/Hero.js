import './hero.css';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { checkoutActions, successMsgActions } from '../actions/index';
import shoeImage from '../assets/shoe.jpg';

const Hero = () => {
  const shoePrice = useSelector(state => state.checkoutDetails.price);
  const isLoggedIn = useSelector(state => state.authentication.isLoggedIn);
  const dispatch = useDispatch();
  return (
    <div className="hero">
      <div className="heading-top">
        <h1>The All New Nike</h1>
      </div>
      <div className="heading-bottom">
        <h1>PRESTO 2022</h1>
      </div>
      <Link
        to={isLoggedIn ? '/cart' : '/login'}
        style={{ textDecoration: 'none' }}
      >
        <div
          className="checkout"
          onClick={() => {
            if (isLoggedIn) {
              dispatch(
                successMsgActions.showSuccessMsg({
                  msg: 'Item added to Cart',
                  color: '#B3E140',
                })
              );
              dispatch(checkoutActions.increaseQuantity());

              setTimeout(() => {
                dispatch(successMsgActions.hideSuccessMsg());
              }, 3000);
              dispatch(checkoutActions.updateTotal());
            } else {
              dispatch(
                successMsgActions.showSuccessMsg({
                  msg: 'Please Login to Checkout',
                  color: 'blue',
                })
              );
              setTimeout(() => {
                dispatch(successMsgActions.hideSuccessMsg());
              }, 3000);
            }
          }}
        >
          <p>Checkout</p>
        </div>
      </Link>

      <div className="price">
        <p>Launch price</p>
        <div
          className="hero-price"
          style={{ display: 'flex', marginTop: '1rem' }}
        >
          <h1>
            <span style={{ fontSize: '3rem' }}>INR</span>
            {shoePrice}
          </h1>
        </div>
      </div>
      <div className="background">
        <img src={shoeImage} alt="Green Shoe" />
      </div>
    </div>
  );
};

export default Hero;
