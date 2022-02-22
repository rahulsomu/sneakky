import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import './header.css';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { authActions, successMsgActions } from '../actions';
import logo from '../assets/nike.png';
const Header = ({ bg }) => {
  const dispatch = useDispatch();
  const cartValue = useSelector(state => state.checkoutDetails.shoeQuantity);
  const username = useSelector(state => state.authentication.username);
  const isLoggedIn = useSelector(state => state.authentication.isLoggedIn);
  const successMsg = useSelector(state => state.successMsg.successMsg);
  const message = useSelector(state => state.successMsg);
  return (
    <div className="header" style={{ background: bg }}>
      <Link to="/">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
      </Link>

      <div className="header-right">
        <Link to={isLoggedIn ? '' : '/login'}>
          <button
            className="login"
            onClick={() => {
              {
                isLoggedIn && dispatch(authActions.logout());
              }
              localStorage.setItem('isLoggedIn', isLoggedIn);
            }}
          >
            <p>{isLoggedIn ? 'Logout' : 'Login'}</p>
          </button>
        </Link>

        <Link to={isLoggedIn ? '/cart' : '/login'}>
          <div
            className="cart"
            onClick={() => {
              !isLoggedIn &&
                dispatch(
                  successMsgActions.showSuccessMsg({
                    msg: 'Please login to access Cart',
                    color: 'blue',
                  })
                );
              setTimeout(() => {
                dispatch(successMsgActions.hideSuccessMsg());
              }, 3000);
            }}
          >
            {cartValue > 0 && (
              <div className="cart-count">
                <p>{cartValue}</p>
              </div>
            )}

            <ShoppingCartIcon />
          </div>
        </Link>
      </div>
      {successMsg && (
        <div className="message">
          <p style={{ color: message.color }}>{message.msg}</p>
        </div>
      )}
    </div>
  );
};

export default Header;
