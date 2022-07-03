import {MouseEvent} from 'react';
import './Button.css';

type Props = {
  label: string;
  type?: 'lg' | 'md';
  active?: boolean;
  loading?: boolean;
  icon?: any;
  style?: any;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  outline?: {
    color: string;
  };
};

export const Button = ({
  label,
  icon,
  type = 'md',
  active = true,
  onClick,
  loading = false,
  outline,
}: Props) => {
  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    if (!loading && active) {
      onClick && onClick(e);
    } else if (active === undefined) {
      onClick && onClick(e);
    }
  };

  return outline ? (
    <button
      disabled={!active}
      onClick={handleClick}
      type="button"
      className={`button-outline ${type === 'lg' ? 'button-full ' : ''}`}
      style={{
        color: outline.color || '#3bc97d',
        border: `1px solid ${outline.color}`,
      }}
    >
      {icon} {label}
    </button>
  ) : (
    <button
      disabled={!active}
      onClick={handleClick}
      type="button"
      className={`button ${type === 'lg' ? 'button-full ' : ''}`}
    >
      {icon} {label}
    </button>
  );
};
