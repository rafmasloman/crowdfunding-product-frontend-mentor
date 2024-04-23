import { IContainerPropsType } from './interfaces/Container.interface';

const Container = ({ children, className }: IContainerPropsType) => {
  return <div className={`container ${className}`}>{children}</div>;
};

export default Container;
