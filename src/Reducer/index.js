import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  details: {
    name: 'Nike Presto 2021 Edition',
  },
  orderSize: 0,
  shoeQuantity: 0,

  size: null,

  price: 12999,
  total: 0,
  paymentMode: null,
};

const initialUserState = {
  userDetails: {
    firstName: null,
    lastName: null,
    phoneNo: null,
    addressL1: null,
    addressL2: null,
    pincode: null,
  },
};

export const userSlice = createSlice({
  name: 'user',
  initialState: initialUserState,
  reducers: {
    setUserDetails(state, action) {
      state.userDetails = {
        ...state.userDetails,
        [action.payload.name]: action.payload.value,
      };
    },
  },
});
export const checkoutSlice = createSlice({
  name: 'checkout',
  initialState: initialState,
  reducers: {
    increaseQuantity(state) {
      state.shoeQuantity++;
    },
    decreaseQuantity(state) {
      state.shoeQuantity--;
    },
    updateTotal(state) {
      state.total = state.shoeQuantity * state.price;
    },
    cartReset(state) {
      state.shoeQuantity = 0;
    },
    setPaymentMode(state, action) {
      state.paymentMode = action.payload;
    },
    setSize(state, action) {
      state.size = action.payload;
    },
  },
});

const initialLoginState = {
  email: '',
  isLoggedIn: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState: initialLoginState,
  reducers: {
    login(state, action) {
      state.isLoggedIn = true;
      state.email = action.payload;
    },
    logout(state) {
      state.isLoggedIn = false;
    },
    updateLoginState(state, action) {
      state.isLoggedIn = action.payload;
    },
  },
});

export const successMsgSlice = createSlice({
  name: 'successMsg',
  initialState: {
    successMsg: false,
    msg: '',
    color: '#B3E140',
  },
  reducers: {
    showSuccessMsg(state, action) {
      state.successMsg = true;
      state.msg = action.payload.msg;
      state.color = action.payload.color;
    },
    hideSuccessMsg(state, action) {
      state.successMsg = false;
    },
  },
});

// export const rootReducer=(state=initialState,action)=>{
//     switch(action.type){
//      case  'increaseQuantity':return {
//          shoeQuantity:state.shoeQuantity+1
//      }

//      case 'decreaseQuantity': return {
//           shoeQuantity:state.shoeQuantity-1,
//      }
//      case 'updateTotal' : return {
//          total:state.shoeQuantity * state.price,
//      }
//      case 'cartReset': return {
//          shoeQuantity:0
//      }

//      default :  return state;
//     }

// }
