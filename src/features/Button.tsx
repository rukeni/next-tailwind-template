import type { FC } from 'react';

type ButtonProps = {
  label: 'Button' | 'Submit';
};

const Button: FC<ButtonProps> = ({ label = 'Button' }) => {
  return <button type='button'>{label}</button>;
};

export default Button;
