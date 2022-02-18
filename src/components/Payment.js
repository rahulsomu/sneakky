import './payment.css';
import { Shoe } from '../Context/Shoe';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import CreditCardIcon from '@material-ui/icons/CreditCard';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import MoneyIcon from '@material-ui/icons/Money';
import { useSelector, useDispatch } from 'react-redux';
import { checkoutActions } from '../actions';
import BottomBar from './BottomBar';
const Payment = () => {
  const dispatch = useDispatch();
  const { userDetails } = useContext(Shoe);
  const paymentMode = useSelector(state => state.checkoutDetails.paymentMode);
  const paymentModeHandler = e => {
    dispatch(checkoutActions.setPaymentMode(e.target.value));
  };

  return (
    <div className="payment-page">
      <div className="payment-container">
        <div className="payment-options">
          <h1>Select a payment option</h1>
          <div className="payment-option-container">
            <div className="payment">
              <CreditCardIcon />
              <label htmlFor="credit">Credit-Card</label>
              <input
                type="radio"
                name="payment"
                value="Credit-Card"
                id="credit"
                onChange={paymentModeHandler}
              />
            </div>
            <div className="payment">
              <CreditCardIcon />
              <label htmlFor="debit">Dedit-Card</label>
              <input
                type="radio"
                name="payment"
                id="debit"
                value="Debit-Card"
                onChange={paymentModeHandler}
              />
            </div>
            <div className="payment">
              <AccountBalanceWalletIcon />
              <label htmlFor="upi">UPI</label>
              <input
                type="radio"
                name="payment"
                id="upi"
                value="UPI"
                onChange={paymentModeHandler}
              />
            </div>
            <div className="payment">
              <MoneyIcon />
              <label htmlFor="cod">Cash on Delivery</label>
              <input
                type="radio"
                name="payment"
                value="Cash on Delivery"
                id="cod"
                onChange={paymentModeHandler}
              />
            </div>
          </div>
        </div>
        <div className="payment-details">
          <h2>Order Details</h2>
          <span>Shipment To-</span>

          <p>
            <span>Name: </span>
            {userDetails.firstName} {userDetails.lastName}
          </p>

          <p>
            <span>Address: </span>
            {userDetails.addressL1},{userDetails.addressL2},
            {userDetails.pincode}.
          </p>

          <p>
            <span>Phone No.: </span>
            {userDetails.phoneNo}
          </p>
          {paymentMode && (
            <p>
              <span>Payment Mode: </span>
              {paymentMode}
            </p>
          )}
        </div>
      </div>
      <BottomBar>
        <Link to={paymentMode ? '/thankyou' : '/payment'}>
          <button className="btn" disabled={!paymentMode}>
            <p>Place Order</p>
          </button>
        </Link>
      </BottomBar>
    </div>
  );
};

export default Payment;
