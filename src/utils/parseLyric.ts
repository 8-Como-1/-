export interface ILyric {
  time: number;
  text: string;
}
//解析歌词
const timeRegExp = /\[(\d{2}):(\d{2})\.(\d{2,3})\]/;
export function parseLyric(lyricString: string) {
  //拿到一行行歌词
  const lines: string[] = lyricString.split('\n');

  //对每句歌词进行解析，解析成对应的对象
  const lyrics: ILyric[] = [];
  for (const line of lines) {
    //匹配结果
    const result = timeRegExp.exec(line);
    if (!result) continue;

    //获取每一组的时间
    const time1 = Number(result[1]) * 60 * 1000;
    const time2 = Number(result[2]) * 1000;
    const time3 =
      result[3].length === 2 ? Number(result[3]) * 10 : Number(result[3]);
    const time = time1 + time2 + time3;

    //获取每一组文本
    const text = line.replace(timeRegExp, '');

    //将解析后的对象添加到数组中
    lyrics.push({ time, text });
  }

  return lyrics;
}
