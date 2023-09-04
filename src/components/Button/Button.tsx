import React, { ElementType, MouseEventHandler, ReactNode } from 'react';
import { StyledButton, variantColors } from './styled';
import MemoSpinner from './Spinner';

export type ButtonVariant = 'primary' | 'secondary' | 'danger';

export type ButtonSize = 'sm' | 'md' | 'lg';

export type ButtonRounded = 'sm' | 'md' | 'lg' | 'full';

export type ButtonType = 'default' | 'ghost' | 'outlined';

interface BaseButtonProps {
  buttonType?: ButtonType;
  variant?: ButtonVariant;
  htmlType?: 'button' | 'submit' | 'reset';
  size?: ButtonSize;
  rounded?: ButtonRounded;
  className?: string;
  children?: ReactNode;
  disabled?: boolean;
  loading?: boolean;
  icon?: ElementType;
}

type HTMLButtonProps = {
  onCLick?: MouseEventHandler<HTMLButtonElement>;
} & BaseButtonProps;

export type ButtonProps = HTMLButtonProps;

const Button: React.ForwardRefRenderFunction<unknown, ButtonProps> = (
  props,
  ref
) => {
  const {
    variant = 'primary',
    size = 'sm',
    className,
    children,
    rounded = 'sm',
    htmlType = 'button',
    disabled,
    buttonType = 'default',
    loading = false,
    icon = undefined,
  } = props;

  const extraProps = {
    buttonVariant: variant,
    rounded,
    size,
    disabled,
    buttonType,
    isWithIcon: loading || !!icon,
  };

  return (
    <StyledButton
      type={htmlType}
      className={className}
      ref={ref as React.MutableRefObject<HTMLButtonElement>}
      {...extraProps}
    >
      {loading ? (
        <>
          {children}{' '}
          <MemoSpinner
            style={{ marginLeft: '0.7em' }}
            stroke={variantColors[variant].regular}
            fontSize={
              size === 'sm'
                ? '1em'
                : size === 'md'
                ? '1.5em'
                : size === 'lg'
                ? '2em'
                : '1em'
            }
          />
        </>
      ) : (
        children
      )}
    </StyledButton>
  );
};

export default React.forwardRef<unknown, ButtonProps>(Button);
