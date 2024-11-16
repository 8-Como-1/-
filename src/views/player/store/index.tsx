import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getSongDetail, getSongLyric } from '../service/player';
import { parseLyric, ILyric } from '@/utils/parseLyric';
import type { RootState } from '@/store';

interface IThunkState {
  state: RootState;
}
export const fetchCurrentSongAction = createAsyncThunk<
  void,
  number,
  IThunkState
>('currentSong', (id: number, { dispatch, getState }) => {
  const playSongList = getState().player.playSongList;
  const findIndex = playSongList.findIndex((item) => item.id === id);
  if (findIndex === -1) {
    //没有找到相同的
    //1、获取歌曲信息
    getSongDetail(id).then((res) => {
      // console.log('歌曲', res.songs[0]);
      if (!res.songs.length) return;
      const song = res.songs[0];

      //将song放到currentSong中
      const newPlaySongList = [...playSongList];
      newPlaySongList.push(song);
      dispatch(changeCurrentSongAction(song));
      dispatch(changePlaySongListAction(newPlaySongList));
      dispatch(changePlaySongIndexAction(newPlaySongList.length - 1));
    });
  } else {
    //找到了相同的
    const song = playSongList[findIndex];
    dispatch(changeCurrentSongAction(song));
    dispatch(changePlaySongIndexAction(findIndex));
  }

  //2、获取歌词
  getSongLyric(id).then((res) => {
    //1获取歌词的字符串
    const lyricString = res.lrc.lyric;
    //2、解析歌词(对象数组)
    const lyrics = parseLyric(lyricString);
    // console.log('歌词', lyrics);
    dispatch(changeSongLyricAction(lyrics));
  });
});

//切换歌曲
export const changeMusicAction = createAsyncThunk<void, boolean, IThunkState>(
  'changemusic',
  (isNext, { dispatch, getState }) => {
    //1、获取state中的数据
    const playMode = getState().player.playMode;
    const songList = getState().player.playSongList;
    const songIndex = getState().player.playSongIndex;

    //2、根据不同的模式计算下一首歌曲的索引
    let newIndex = songIndex;
    if (playMode === 1) {
      //随机播放
      newIndex = Math.floor(Math.random() * songList.length);
    } else {
      //单曲循环和顺序播放
      newIndex = isNext ? songIndex + 1 : songIndex - 1;
      //越界判断
      if (newIndex > songList.length - 1) {
        newIndex = 0;
      } else if (newIndex < 0) {
        newIndex = songList.length - 1;
      }
    }

    //3、获取当前的歌曲
    const song = songList[newIndex];
    dispatch(changeCurrentSongAction(song));
    dispatch(changePlaySongIndexAction(newIndex));

    //2、获取歌词
    getSongLyric(song.id).then((res) => {
      //1获取歌词的字符串
      const lyricString = res.lrc.lyric;
      //2、解析歌词(对象数组)
      const lyrics = parseLyric(lyricString);
      // console.log('歌词', lyrics);
      dispatch(changeSongLyricAction(lyrics));
    });
  },
);

interface IPlayerState {
  currentSong: any;
  lyrics: ILyric[];
  lyricIndex: number;
  playSongIndex: number;
  playSongList: any[];
  playMode: number;
}

const initialState: IPlayerState = {
  currentSong: {},
  lyrics: [],
  lyricIndex: -1,
  playSongIndex: -1,
  playSongList: [
    {
      name: '一直很安静',
      id: 1968781675,
      pst: 0,
      t: 0,
      ar: [
        {
          id: 14312549,
          name: '王贰浪',
          tns: [],
          alias: [],
        },
      ],
      alia: [],
      pop: 100,
      st: 0,
      rt: '',
      fee: 8,
      v: 6,
      crbt: null,
      cf: '',
      al: {
        id: 149013204,
        name: '一直很安静',
        picUrl:
          'https://p2.music.126.net/d3P6hiIEDH4Gp9cApS5b3A==/109951167740623345.jpg',
        tns: [],
        pic_str: '109951167740623345',
        pic: 109951167740623340,
      },
      dt: 228565,
      h: {
        br: 320000,
        fid: 0,
        size: 9145005,
        vd: -21850,
        sr: 48000,
      },
      m: {
        br: 192000,
        fid: 0,
        size: 5487021,
        vd: -19214,
        sr: 48000,
      },
      l: {
        br: 128000,
        fid: 0,
        size: 3658029,
        vd: -17445,
        sr: 48000,
      },
      sq: {
        br: 827288,
        fid: 0,
        size: 23636181,
        vd: -21846,
        sr: 48000,
      },
      hr: {
        br: 1596963,
        fid: 0,
        size: 45626308,
        vd: -21846,
        sr: 48000,
      },
      a: null,
      cd: '01',
      no: 0,
      rtUrl: null,
      ftype: 0,
      rtUrls: [],
      djId: 0,
      copyright: 0,
      s_id: 0,
      mark: 17716748288,
      originCoverType: 2,
      originSongSimpleData: {
        songId: 5260494,
        name: '一直很安静',
        artists: [
          {
            id: 7061,
            name: '阿桑',
          },
        ],
        albumMeta: {
          id: 512384,
          name: 'Listen To HIM',
        },
      },
      tagPicList: null,
      resourceState: true,
      version: 6,
      songJumpInfo: null,
      entertainmentTags: null,
      awardTags: null,
      single: 0,
      noCopyrightRcmd: null,
      mv: 0,
      mst: 9,
      cp: 0,
      rtype: 0,
      rurl: null,
      publishTime: 0,
    },
    {
      name: '七月七日晴',
      id: 307780,
      pst: 0,
      t: 0,
      ar: [
        {
          id: 9950,
          name: '许慧欣',
          tns: [],
          alias: [],
        },
      ],
      alia: ['台视九点档偶像剧《心动列车》片尾曲'],
      pop: 100,
      st: 0,
      rt: '600902000001024402',
      fee: 1,
      v: 71,
      crbt: null,
      cf: '',
      al: {
        id: 30564,
        name: '万中选一',
        picUrl:
          'https://p1.music.126.net/OqkcG-E55JOfRw3rl8q3Ww==/109951169280559422.jpg',
        tns: [],
        pic_str: '109951169280559422',
        pic: 109951169280559420,
      },
      dt: 243893,
      h: null,
      m: {
        br: 192000,
        fid: 0,
        size: 5855025,
        vd: -34143,
        sr: 44100,
      },
      l: {
        br: 128000,
        fid: 0,
        size: 3903364,
        vd: -32495,
        sr: 44100,
      },
      sq: {
        br: 926627,
        fid: 0,
        size: 28249789,
        vd: -36816,
        sr: 44100,
      },
      hr: null,
      a: null,
      cd: '1',
      no: 11,
      rtUrl: null,
      ftype: 0,
      rtUrls: [],
      djId: 0,
      copyright: 1,
      s_id: 0,
      mark: 17179877376,
      originCoverType: 1,
      originSongSimpleData: null,
      tagPicList: null,
      resourceState: true,
      version: 71,
      songJumpInfo: null,
      entertainmentTags: null,
      awardTags: null,
      single: 0,
      noCopyrightRcmd: null,
      mv: 5307748,
      rtype: 0,
      rurl: null,
      mst: 9,
      cp: 7003,
      publishTime: 1104508800000,
    },
  ],
  playMode: 0, // 0顺序播放 1随机播放 2单曲循环
};

const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    // 改变当前播放歌曲
    changeCurrentSongAction(state, action) {
      state.currentSong = action.payload;
    },
    // 改变歌词
    changeSongLyricAction(state, action) {
      state.lyrics = action.payload;
    },
    // 改变当前歌词索引
    changeLyricIndexAction(state, { payload }) {
      state.lyricIndex = payload;
    },
    // 改变播放歌曲索引
    changePlaySongIndexAction(state, { payload }) {
      state.playSongIndex = payload;
    },
    // 改变播放歌曲列表
    changePlaySongListAction(state, { payload }) {
      state.playSongList = payload;
    },
    // 改变播放模式
    changePlayModeAction(state, { payload }) {
      state.playMode = payload;
    },
  },
});

export default playerSlice.reducer;

export const {
  changeCurrentSongAction,
  changeSongLyricAction,
  changeLyricIndexAction,
  changePlaySongIndexAction,
  changePlaySongListAction,
  changePlayModeAction,
} = playerSlice.actions;
