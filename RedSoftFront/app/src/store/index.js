import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { productsReducer as products } from './products';
import { ordersReducer as order } from './order'
import { preferenceReducer as preference } from "./preference";
import { loginispcubeReducer as loginispcube } from "./loginispcube";
import { sessionReducer as session } from "./session";

const reducer = combineReducers({
 products,
 order,
 preference,
 loginispcube,
 session,
});

export { productsActions } from './products';
export { ordersActions } from './order';
export { preferenceActions } from './preference';
export { loginispcubeActions } from './loginispcube';
export { sessionActions } from './session';

export default configureStore({ reducer });
