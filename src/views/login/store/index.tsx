import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

interface IProps{
  isShowModal?:boolean
}

const initialState:IProps = {
  isShowModal:false
}
const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    changeShowModal(state, action) {
      state.isShowModal = action.payload;
    }
  }
})

export const { changeShowModal } = loginSlice.actions;
export default loginSlice.reducer;