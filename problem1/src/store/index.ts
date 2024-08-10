import { configureStore } from '@reduxjs/toolkit';
import plansReducer from './slices/plans';
import { setupListeners } from '@reduxjs/toolkit/query';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
const store = configureStore({
	reducer: {
		plans: plansReducer,
	},

	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(),
	devTools: true,
});




export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

store.subscribe(() => {});

setupListeners(store.dispatch);



export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;


export default store;