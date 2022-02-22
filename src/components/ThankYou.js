import React from 'react';
import { Link } from 'react-router-dom';
import './ThankYou.css';
import SuccessVideo from '../assets/check.mp4';
import { useContext } from 'react';
import { Shoe } from '../Context/Shoe';
import { useSelector, useDispatch } from 'react-redux';
import { checkoutActions } from '../actions/index';

const ThankYou = () => {
  const dispatch = useDispatch();
  const total = useSelector(state => state.checkoutDetails.total);
  const userDetails=useSelector(state=>state.userDetails.userDetails)
  const paymentMode=useSelector(state=>state.checkoutDetails.paymentMode)

  return (
    <div className="confirmation-msg-container">
      <div className="confirmation-card">
        <h1>Order Placed Successfully</h1>
        <video src={SuccessVideo} height="300px" autoPlay muted></video>
        <p>Thank You for Shopping with Us.</p>
      </div>
      <div className="order-confirmation-details">
        <h2>Order Details</h2>
        <span>Shipment To-</span>
        <br></br>
        <p>
          <span>Name: </span>
          {userDetails.firstName} {userDetails.lastName}
        </p>
        <br></br>
        <p>
          <span>Address: </span>
          {userDetails.addressL1},{userDetails.addressL2},{userDetails.pincode}.
        </p>
        <br />
        <p>
          <span>Phone No.: </span>
          {userDetails.phoneNo}
        </p>
        {paymentMode && (
          <p>
            Please pay
            <span> INR {total} </span>via
            <span> {paymentMode}</span>
          </p>
        )}
      </div>
      <div className="thankyou-btn">
        <Link to="/">
          <button
            onClick={() => {
              dispatch(checkoutActions.cartReset());
            }}
          >
            Back to Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ThankYou;
