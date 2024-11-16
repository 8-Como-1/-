import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IState {
  count: number;
  message: string;
  address: string;
  height: number;
  direction: 'left' | 'right' | 'up' | 'bottom';
}

const initialState: IState = {
  count: 10,
  message: 'Hello World',
  address: '深圳市',
  height: 180,
  direction: 'left',
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    changeMessageAction(state, action: PayloadAction<string>) {
      state.message = action.payload;
    },
  },
});

export const { changeMessageAction } = counterSlice.actions;
export default counterSlice.reducer;
