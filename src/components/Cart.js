import './cart.css';
import Product from './Product';
import { Shoe } from '../Context/Shoe';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import BottomBar from './BottomBar';

const Cart = () => {
  const total = useSelector(state => state.checkoutDetails.total);
  const shoeQuantity = useSelector(state => state.checkoutDetails.shoeQuantity);
  const selectedSize = useSelector(state => state.checkoutDetails.size);
  return (
    <>
      <div className="cartpage">
        <h1 style={{ marginTop: '2rem', fontSize: '3rem', marginLeft: '1rem' }}>
          Cart
        </h1>
        <div className="cart-container">
          {shoeQuantity > 0 ? (
            <Product />
          ) : (
            <div>
              <h1
                style={{
                  textAlign: 'center',
                  marginTop: '5rem',
                  color: '#888',
                  fontSize: '3rem',
                }}
              >
                Oops! Cart Empty ☹️
              </h1>
              <Link to="/" style={{ textDecoration: 'none' }}>
                <div
                  className="btn"
                  style={{
                    width: 'max-content',
                    margin: '5rem auto',
                    fontSize: '1.5rem',
                    fontWeight: '700',
                  }}
                >
                  Back to Home
                </div>
              </Link>
            </div>
          )}
        </div>
        <BottomBar>
          {shoeQuantity > 0 && (
            <>
              <p className="total-price">
                <p></p>INR {total}
              </p>

              <Link to={selectedSize ? '/address' : '/cart'}>
                <button className="btn" disabled={!selectedSize}>
                  Proceed
                </button>
              </Link>
            </>
          )}
        </BottomBar>
      </div>
    </>
  );
};

export default Cart;
