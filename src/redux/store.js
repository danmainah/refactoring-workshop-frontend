import { configureStore} from "@reduxjs/toolkit"
import { cartRedux } from "./cart/cart"
import { authRedux } from "./auth/auth"
const store = configureStore({
  reducer: {
    auth: authRedux.reducer,
    cart: cartRedux.reducer,
  },
})

export default store
