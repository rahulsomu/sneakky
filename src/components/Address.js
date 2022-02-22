import './address.css';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { userActions } from '../actions';
import BottomBar from './BottomBar';
import shoeImage from '../assets/shoe.jpg';

const Address = () => {
  const dispatch = useDispatch();
  const userDetails = useSelector(state => state.userDetails.userDetails);
  const details = useSelector(state => state.checkoutDetails);
  // const { details, userDetails, setUserDetails } = useContext(Shoe);
  const shoeQuantity = useSelector(state => state.checkoutDetails.shoeQuantity);
  const selectedSize = useSelector(state => state.checkoutDetails.size);
  const total = useSelector(state => state.checkoutDetails.total);
  let name, value;
  const handleForm = e => {
    name = e.target.name;
    value = e.target.value;

    dispatch(userActions.setUserDetails({ name, value }));
  };

  return (
    <div className="address-page">
      <div className="address-form">
        <h1>Please fill out the details.</h1>
        <form action="" autoComplete="off">
          <div className="form-field">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              autoComplete="off"
              value={userDetails.firstName}
              onChange={handleForm}
            />
          </div>
          <div className="form-field">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              name="lastName"
              id="lastName"
              autoComplete="off"
              value={userDetails.lastName}
              onChange={handleForm}
            />
          </div>
          <div className="form-field">
            <label htmlFor="phoneNo">Phone No.</label>
            <input
              type="text"
              name="phoneNo"
              id="phoneNo"
              autoComplete="off"
              value={userDetails.phoneNo}
              maxLength="10"
              onChange={handleForm}
            />
          </div>
          <div className="form-field">
            <label htmlFor="pincode">Pincode</label>
            <input
              type="text"
              name="pincode"
              id="pincode"
              maxLength="6"
              autoComplete="off"
              value={userDetails.pincode}
              onChange={handleForm}
            />
          </div>
          <div className="form-field">
            <label htmlFor="addressL1">Address Line 1</label>
            <input
              type="text"
              name="addressL1"
              id="addressL1"
              autoComplete="off"
              value={userDetails.addressL1}
              onChange={handleForm}
            />
          </div>
          <div className="form-field">
            <label htmlFor="addressL2">Address Line 2</label>
            <input
              type="text"
              name="addressL2"
              id="addressL2"
              autoComplete="off"
              value={userDetails.addressL2}
              onChange={handleForm}
            />
          </div>
        </form>
      </div>
      <div className="product-details-address">
        <div className="product-details-img">
          <img src={shoeImage} alt="" />
        </div>
        <div className="order-details">
          <h1>{details.name}</h1>
          <p style={{ textTransform: 'capitalize' }}>
            Size:
            <span style={{ fontWeight: 'bolder', marginLeft: '10px' }}>
              {selectedSize}
            </span>
          </p>
          <p>
            Quantity:
            <span style={{ fontWeight: 'bolder', marginLeft: '10px' }}>
              {shoeQuantity}
            </span>
          </p>
          <p>
            Subtotal:
            <span style={{ fontWeight: 'bolder', marginLeft: '10px' }}>
              INR {total}
            </span>
          </p>
        </div>
      </div>
      <BottomBar>
        <Link to="/payment">
          <button
            type="submit"
            className="btn"
            disabled={
              !userDetails.firstName ||
              !userDetails.lastName ||
              !userDetails.phoneNo ||
              !userDetails.addressL1 ||
              !userDetails.addressL2 ||
              !userDetails.pincode
            }
          >
            Continue to Payment
          </button>
        </Link>
      </BottomBar>
    </div>
  );
};

export default Address;
