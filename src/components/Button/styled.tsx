import { DefaultColor } from '../colorsConfig';
import { ButtonRounded, ButtonSize, ButtonType, ButtonVariant } from './Button';
import styled from 'styled-components';

type StateColors = {
  regular: string;
  hover: string;
};

export const variantColors: { [key in ButtonVariant]: StateColors } = {
  primary: {
    regular: DefaultColor.primary,
    hover: DefaultColor.primaryHover,
  },
  secondary: {
    regular: 'rgba(0, 0, 0, 0.1)',
    hover: 'rgba(0, 0, 0, 0.3)',
  },
  danger: {
    regular: '#F45050',
    hover: '#E06469',
  },
};

interface StyledButtonProps {
  buttonVariant: ButtonVariant;
  size: ButtonSize;
  rounded: ButtonRounded;
  buttonType: ButtonType;
  isWithIcon: boolean;
}

export const StyledButton = styled.button<StyledButtonProps>`
	background: ${(props: StyledButtonProps) =>
    props.buttonType === 'outlined'
      ? '#fff'
      : props.buttonType === 'default'
      ? '#bbb'
      : props.buttonType === 'ghost'
      ? 'rgba(0,0,0,0.09)'
      : variantColors[props.buttonVariant].regular};
	border: ${(props: StyledButtonProps) =>
    props.buttonType === 'outlined'
      ? `2px solid ${variantColors[props.buttonVariant].regular}`
      : 'none'};
	color: ${(props: StyledButtonProps) =>
    props.buttonType === 'outlined'
      ? `${variantColors[props.buttonVariant].regular}`
      : '#fff'};
	padding: ${(props: StyledButtonProps) =>
    props.size === 'sm'
      ? `0.5rem 1rem`
      : props.size === 'md'
      ? `0.8rem 1.6rem`
      : props.size === 'lg'
      ? `1rem 2rem`
      : '0.8rem 1.6rem'};
	border-radius: ${(props: StyledButtonProps) =>
    props.rounded === 'sm'
      ? '4px'
      : props.rounded === 'md'
      ? '8px'
      : props.rounded === 'lg'
      ? '12px'
      : props.rounded === 'full'
      ? '2rem'
      : '4px'};
	transition: 0.3s;
	display: flex;
	align-items: center;
	cursor: pointer;
	font-size: ${(props: StyledButtonProps) =>
    props.size === 'sm' ? '0.8rem' : '1rem'};
	transition: 0.1s;
	${(props: StyledButtonProps) =>
    props.isWithIcon ? 'padding-left: 0.5rem;' : ''}
	${(props: StyledButtonProps) =>
    props.isWithIcon && props.size === 'sm' ? 'padding-right: 0.9rem;' : ''}
  ${(props: StyledButtonProps) =>
    props.isWithIcon && props.size === 'md' ? 'padding-right: 1.4rem;' : ''}
  ${(props: StyledButtonProps) =>
    props.isWithIcon && props.size === 'lg' ? 'padding-right: 1.9rem;' : ''}
  
  &:active {
		transform: scale(0.9);
	}

	&:hover {
		background: ${(props: StyledButtonProps) =>
      props.buttonType === 'outlined'
        ? '#fff'
        : props.buttonType === 'default'
        ? '#bbb'
        : props.buttonType === 'ghost'
        ? 'rgba(0,0,0,0.09)'
        : variantColors[props.buttonVariant].hover};
		border: ${(props: StyledButtonProps) =>
      props.buttonType === 'outlined'
        ? `2px solid ${variantColors[props.buttonVariant].hover}`
        : 'none'};
		color: ${(props: StyledButtonProps) =>
      props.buttonType === 'outlined'
        ? `${variantColors[props.buttonVariant].hover}`
        : '#fff'};
	}
`;
