import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Plan {
  id: number;
  name: string;
  price: number;
}

interface PlansState {
  plans: Plan[];
}

const initialState: PlansState = {
  plans: [],
};

const plansSlice = createSlice({
  name: 'plans',
  initialState,
  reducers: {
    addPlan: (state, action: PayloadAction<Plan>) => {
      state.plans.push(action.payload);
    },
    removePlan: (state, action: PayloadAction<number>) => {
      state.plans = state.plans.filter(plan => plan.id !== action.payload);
    },
    updatePlan: (state, action: PayloadAction<Plan>) => {
      const { id, name, price } = action.payload;
      const plan = state.plans.find(plan => plan.id === id);
      if (plan) {
        plan.name = name;
        plan.price = price;
      }
    },
  },
});

export const { addPlan, removePlan, updatePlan } = plansSlice.actions;

export default plansSlice.reducer;