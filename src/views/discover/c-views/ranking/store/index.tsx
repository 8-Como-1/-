import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getPlaylistDetail } from '@/api/recommend';
import { getAllRankingsList } from '@/api/rankings';

export const fetchAllRankingDataAction = createAsyncThunk(
  'rankings',
  (_, { dispatch }) => {
    getAllRankingsList().then((res) => {
      // console.log(res);
      dispatch(changeCloudMusicSpecialAction(res.list));
    });
  },
);

const initialState = {
  cloudMusicSpecial: [] as any[],
};

const rankings = createSlice({
  name: 'rankings',
  initialState,
  reducers: {
    changeCloudMusicSpecialAction(state, { payload }) {
      state.cloudMusicSpecial = payload;
    },
  },
});

export const { changeCloudMusicSpecialAction } = rankings.actions;

export default rankings.reducer;
