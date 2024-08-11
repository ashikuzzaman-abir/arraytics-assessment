import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type PlansState = {
	billingMode: 'Billed monthly' | 'Billed yearly';
	selectedGrowth: string;
	selectedBasic: string;
	selectedPro: string;
	selectedFree: string;
};

const initialState: PlansState = {
	billingMode: 'Billed monthly',
	selectedGrowth: '',
	selectedBasic: '',
	selectedPro: '',
	selectedFree: '',
};

const plansSlice = createSlice({
	name: 'plans',
	initialState,
	reducers: {
		setBillingPeriod: (
			state,
			action: PayloadAction<'Billed monthly' | 'Billed yearly'>
		) => {
			state.billingMode = action.payload;
		},
		setSelectedGrowth: (state, action: PayloadAction<string>) => {
			state.selectedGrowth = action.payload;
		},
		setSelectedBasic: (state, action: PayloadAction<string>) => {
			state.selectedBasic = action.payload;
		},
		setSelectedPro: (state, action: PayloadAction<string>) => {
			state.selectedPro = action.payload;
		},
		setSelectedFree: (state, action: PayloadAction<string>) => {
			state.selectedFree = action.payload;
		},
	},
});

export const {
	setBillingPeriod,
	setSelectedGrowth,
	setSelectedBasic,
	setSelectedFree,
	setSelectedPro,
} = plansSlice.actions;

export default plansSlice.reducer;
