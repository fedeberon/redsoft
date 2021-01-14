import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { productsReducer as products } from './products';
import { ordersReducer as order } from './order'
import { preferenceReducer as preference } from "./preference";
import { loginispcubeReducer as loginispcube } from "./loginispcube";

const reducer = combineReducers({
 products,
 order,
 preference,
 loginispcube,
});

export { productsActions } from './products';
export { ordersActions } from './order';
export { preferenceActions } from './preference';
export { loginispcubeActions } from './loginispcube';

export default configureStore({ reducer });
