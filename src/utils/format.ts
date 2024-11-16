export const formatCount = (count: number) => {
  if (count > 100000) {
    return (count / 10000).toFixed(1) + '万';
  } else {
    return count;
  }
};

export const getImageSize = (
  imageUrl: string,
  width: number,
  height: number = width,
) => {
  return imageUrl + '?param=${width}*${height}';
};

export const formatTime = (time: number) => {
  const allseconds = time / 1000;

  const minutes = Math.floor(allseconds / 60);
  const seconds = Math.floor(allseconds % 60);

  return `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
};
