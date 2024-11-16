import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useSelector, useDispatch } from 'react-redux';

import counterReducer from './modules/counter';
import recommendReducer from '@/views/discover/c-views/recommend/store/index';
import playerReducer from '@/views/player/store/index';
import loginReducer from '@/views/login/store/index';
import rankingsReducer from '@/views/discover/c-views/ranking/store/index';

const store = configureStore({
  reducer: {
    counter: counterReducer,
    recommend: recommendReducer,
    player: playerReducer,
    login: loginReducer,
    rankings: rankingsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch: () => AppDispatch = useDispatch;

export default store;
