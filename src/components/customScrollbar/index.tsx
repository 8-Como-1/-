import cls from 'classnames';
import { UIScrollbars } from './style';
import './style.less';

interface CustomScrollbarProps {
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
  paddingRight?: number;
  native?: boolean;
}

export const CustomScrollbar: React.FC<CustomScrollbarProps> = ({
  children,
  className,
  style = {},
  paddingRight,
  native = false,
}) => {
  if (native) {
    return <>{children}</>;
  }
  return (
    <UIScrollbars
      className={cls('scrollbar', className)}
      style={style}
      autoHide
      universal
      padding={paddingRight}
    >
      {paddingRight ? <div style={{ paddingRight }}>{children}</div> : children}
    </UIScrollbars>
  );
};