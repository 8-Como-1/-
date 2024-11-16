import React, { memo, useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Slider } from 'antd';
import { useAppDispatch, useAppSelector } from '@/store';
import { shallowEqual } from 'react-redux';
import { getImageSize } from '@/utils/format';
import { formatTime } from '@/utils/format';
import { getSongPlayUrl } from '@/utils/handle-player';
import changeLyricIndexAction from '@/views/player/store';
import { Tooltip } from 'antd';
import { changePlayModeAction, changeMusicAction } from '@/views/player/store';
import { message } from 'antd';
import {
  UIBarWrapper,
  UIBarControl,
  UIBarPlayerInfo,
  UIBarOperator,
} from './style';

const AppPlayerBar = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [isSliding, setIsSliding] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const dispatch = useAppDispatch();

  const { currentSong, lyrics, lyricIndex, playMode } = useAppSelector(
    (state) => {
      return {
        currentSong: state.player.currentSong,
        lyrics: state.player.lyrics,
        lyricIndex: state.player.lyricIndex,
        playMode: state.player.playMode,
      };
    },
    shallowEqual,
  );

  useEffect(() => {
    audioRef.current!.src = getSongPlayUrl(currentSong.id);

    audioRef
      .current!.play()
      .then(() => {
        setIsPlaying(true);
      })
      .catch((err) => {
        setIsPlaying(false);
        console.log('播放失败', err);
      });

    //获取总时长
    setDuration(currentSong.dt);
  }, [currentSong]);

  //播放器的点击事件
  const handlePlayBtnClick = () => {
    // 1、播放器的暂停/播放
    isPlaying
      ? audioRef.current?.pause()
      : audioRef.current?.play().catch((err) => {
          // console.log('播放失败dianji ', err);
          // alert('当前歌曲无法播放，请播放其他歌曲');
          setIsPlaying(false);
        }),
      // 2、播放符号改变
      setIsPlaying(!isPlaying);
  };

  //播放进度条控制
  const handleTimeUpdate = () => {
    //1、当前播放时间
    const currentTime = audioRef.current?.currentTime! * 1000;

    //2、计算当前歌曲进度
    if (!isSliding) {
      const progress = (currentTime / duration) * 100;
      setProgress(progress);
      setCurrentTime(currentTime);
    }

    //4、根据当前的时间匹配对应的歌词
    let index = lyrics.length - 1;
    for (let i = 0; i < lyrics.length; i++) {
      const lyric = lyrics[i];
      if (currentTime < lyric.time) {
        index = i - 1;
        break;
      }
      // console.log(lyrics[i].text);
    }

    //5、匹配对应歌词的index
    if (lyricIndex === index || index === -1) return;
    // dispatch(changeLyricIndexAction(index));
    // console.log('index', lyrics[index].text);

    //6、展示对应的歌词
    message.open({
      content: lyrics[index].text,
      key: 'lyric',
      duration: 8,
    });
  };

  //当点击进度条轨道时,currentTime/progreses改变
  const handleChangeComplete = (value: number) => {
    //1 点击位置的时间
    const currentTime = (value / 100) * duration;

    //2 当前播放时间
    audioRef.current!.currentTime = currentTime / 1000;

    //progress/currentTime
    setProgress(value);
    setCurrentTime(currentTime);
  };

  //当点击进度条轨道时，按钮自动跳到指定位置
  const handleChange = (value: number) => {
    //点击位置的时间变化
    const currentTime = (value / 100) * duration;
    setCurrentTime(currentTime);
    setProgress(value);
    setIsSliding(false);
  };

  //播放模式
  const handlePlayMode = () => {
    let newPlayMode = playMode + 1;
    if (newPlayMode > 2) {
      newPlayMode = 0;
    }
    dispatch(changePlayModeAction(newPlayMode));
  };

  //切换歌曲
  const handleChangeMusic = (isNext = true) => {
    dispatch(changeMusicAction(isNext));
  };

  //歌曲播放结束
  const handleTimeEnded = () => {
    if (playMode === 2) {
      audioRef.current!.currentTime = 0;
      audioRef.current!.play();
    } else {
      handleChangeMusic(true);
    }
  };

  //Tooltip模式转换
  const handleTitle = (playMode: number) => {
    switch (playMode) {
      case 0:
        return '顺序播放';
      case 1:
        return '随机播放';
      case 2:
        return '单曲循环';
      default:
        return '顺序播放';
    }
  };

  return (
    <UIBarWrapper className="sprite_playbar">
      <div className="content wrap-v2">
        <UIBarControl $isplaying={isPlaying}>
          <button
            className="btn sprite_playbar prev"
            onClick={() => {
              handleChangeMusic(false);
            }}
          ></button>
          <button
            className="btn sprite_playbar play"
            onClick={handlePlayBtnClick}
          ></button>
          <button
            className="btn sprite_playbar next"
            onClick={() => {
              handleChangeMusic(true);
            }}
          ></button>
        </UIBarControl>
        <UIBarPlayerInfo>
          <Link to="/player">
            <img
              className="image"
              src={getImageSize(currentSong?.al?.picUrl, 50)}
              alt=""
            />
          </Link>
          <div className="info">
            <div className="song">
              <span className="song-name">{currentSong.name}</span>
              <span className="singer-name">{currentSong?.ar?.[0]?.name}</span>
            </div>
            <div className="progress">
              <Slider
                step={0.5}
                value={progress}
                onChangeComplete={handleChangeComplete}
                onChange={handleChange}
                tooltip={{
                  formatter: null,
                }}
              />
              <div className="time">
                <span className="current">{formatTime(currentTime)}</span>
                <span className="divider">/</span>
                <span className="duration">{formatTime(duration)}</span>
              </div>
            </div>
          </div>
        </UIBarPlayerInfo>
        <UIBarOperator $playMode={playMode}>
          <div className="left">
            <button className="btn pip"></button>
            <button className="btn sprite_playbar favor"></button>
            <button className="btn sprite_playbar share"></button>
          </div>
          <div className="right spirte_playbar">
            <button className="btn sprite_playbar volume"></button>
            <Tooltip placement="top" title={handleTitle(playMode)}>
              <button
                className="btn sprite_playbar loop"
                onClick={handlePlayMode}
              ></button>
            </Tooltip>
            <button className="btn sprite_playbar playlist"></button>
          </div>
        </UIBarOperator>
      </div>
      <audio
        ref={audioRef}
        onTimeUpdate={handleTimeUpdate}
        onEnded={handleTimeEnded}
      />
    </UIBarWrapper>
  );
};

export default memo(AppPlayerBar);
