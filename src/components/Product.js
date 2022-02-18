import './product.css';
import { Shoe } from '../Context/Shoe';
import { useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { checkoutActions, successMsgActions } from '../actions/index';
import DeleteIcon from '@material-ui/icons/Delete';

const Product = () => {
  const dispatch = useDispatch();
  const shoeQuantity = useSelector(state => state.checkoutDetails.shoeQuantity);

  const total = useSelector(state => state.checkoutDetails.total);

  const { details, size } = useContext(Shoe);
  const selectedSize = useSelector(state => state.checkoutDetails.size);

  const sizes = ['UK6', 'UK7', 'UK8', 'UK9', 'UK10', 'UK11', 'UK12'];

  const selectSize = e => {
    dispatch(checkoutActions.setSize(e.target.innerHTML));
  };

  return (
    <div className="product">
      <div className="bin">
        <DeleteIcon
          onClick={() => {
            dispatch(checkoutActions.cartReset());
            dispatch(
              successMsgActions.showSuccessMsg({
                msg: 'Item removed from Cart',
                color: 'red',
              })
            );
            setTimeout(() => {
              dispatch(successMsgActions.hideSuccessMsg());
            }, 3000);
          }}
        />
      </div>
      <div className="product-left">
        <div className="product-img">
          <img src="shoe.jpg" alt="" />
        </div>
        <div className="order-info">
          <p className="info-name">{details.name}</p>
          <p className="info-color">Color : Green</p>
          <div className="order-count">
            <button
              className="dec"
              disabled={shoeQuantity == 1}
              onClick={() => {
                if (shoeQuantity > 1) {
                  dispatch(checkoutActions.decreaseQuantity());
                  dispatch(checkoutActions.updateTotal());
                }
              }}
            >
              -
            </button>
            <p>{shoeQuantity}</p>

            <button
              className="inc"
              onClick={() => {
                dispatch(checkoutActions.increaseQuantity());
                dispatch(checkoutActions.updateTotal());
              }}
            >
              +
            </button>
          </div>
          <div className="sizes">
            {sizes.map((size, index) => {
              return (
                <button
                  key={index}
                  className="size"
                  style={
                    selectedSize == size
                      ? { background: '#B3E140' }
                      : { background: 'white' }
                  }
                  onClick={selectSize}
                >
                  {size}
                </button>
              );
            })}
          </div>
        </div>
      </div>
      <div className="product-right">
        <p>Price- </p>
        <p className="product-price">
          <span>INR</span> {total}
        </p>
      </div>
    </div>
  );
};

export default Product;
