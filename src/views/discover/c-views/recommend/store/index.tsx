import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {
  getBanners,
  getHotRecommend,
  getNewAlbum,
  getPlaylistDetail,
  getArtistList,
} from '@/api/recommend';

//异步操作，获取轮播图、热门推荐、新碟上架,入驻歌手的数据
export const fetchRecommendDataAction = createAsyncThunk(
  'fetchData',
  (_, { dispatch }) => {
    getBanners().then((res) => {
      // console.log(res);
      dispatch(changeBannersAction(res.banners));
    });
    getHotRecommend(8).then((res) => {
      // console.log('res', res);
      dispatch(changeHotRecommendAction(res.result));
    });
    getNewAlbum().then((res) => {
      dispatch(changeNewAlbumAction(res.albums));
    });
    getArtistList().then((res) => {
      // console.log('入驻歌手', res);
      dispatch(changeArtistListAction(res.artists));
    });
  },
);

//异步操作，获取榜单数据
const rankingIds = [19723756, 3779629, 2884035];
export const fetchRankingDataAction = createAsyncThunk(
  'rankingData',
  (_, { dispatch }) => {
    //获取到的数据有正确的顺序
    const promises: Promise<any>[] = [];
    for (const id of rankingIds) {
      promises.push(getPlaylistDetail(id));
    }

    Promise.all(promises).then((res) => {
      const rankings = res
        .filter((item) => item.playlist)
        .map((item) => item.playlist);
      dispatch(changeRankingsAction(rankings));
    });
  },
);

interface IRecommendState {
  banners: any[];
  hotRecommend: any[];
  newAlbum: any[];
  rankings: any[];
  artistList: any[];
}

const initialState: IRecommendState = {
  banners: [],
  hotRecommend: [],
  newAlbum: [],
  rankings: [],
  artistList: [],
};

const recommendSlice = createSlice({
  name: 'recommend',
  initialState,
  reducers: {
    changeBannersAction(state, action) {
      state.banners = action.payload;
    },
    changeHotRecommendAction(state, action) {
      state.hotRecommend = action.payload;
    },
    changeNewAlbumAction(state, action) {
      state.newAlbum = action.payload;
    },
    changeRankingsAction(state, action) {
      state.rankings = action.payload;
    },
    changeArtistListAction(state, action) {
      state.artistList = action.payload;
    },
  },
});

export default recommendSlice.reducer;
export const {
  changeBannersAction,
  changeHotRecommendAction,
  changeNewAlbumAction,
  changeRankingsAction,
  changeArtistListAction,
} = recommendSlice.actions;
