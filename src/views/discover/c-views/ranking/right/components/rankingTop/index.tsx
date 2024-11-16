import { UIRankingTop, UICenter } from './style';

export const RankingTop = (props: any) => {
  return (
    <UIRankingTop>
      <UICenter>
        <div className="image">
          <img src={props.picUrl} alt="" />
        </div>
        <div className="content">
          <div className="name">飙升榜</div>
          <div className="update">最近更新:11月16日(每天更新)</div>
          <div className="btn">
            <div className="forecast">
              <button className="play">播放</button>
              <button className="jia">+</button>
            </div>
          </div>
        </div>
      </UICenter>
    </UIRankingTop>
  );
};
