import { Triangle } from 'react-loader-spinner';

export function Loader() {
  return (
    <Triangle
      height="300"
      width="300"
      color="#981728"
      ariaLabel="triangle-loading"
      wrapperStyle={{
        position: 'fixed',
        top: '40%',
        left: '40%',
        transform: 'translate (-50%, -50%)',
      }}
      wrapperClassName="triangle"
      visible={true}
    />
  );
}
