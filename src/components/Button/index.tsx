import React from 'react';
import styled from 'styled-components';
import { media } from '../../styles/mediaQueries';

const StyledButton = styled.button`
  background: #1b31a8;
  width: 100%;
  font-size: 1.8rem;
  line-height: 1.33;
  font-weight: 600;
  color: #fff;
  border-radius: 3.2rem;
  cursor: pointer;

  ${media.desktop} {
    max-width: 40rem;
  }
`;

interface Props {
  onClick?: (e: React.MouseEvent) => void;
  className?: string;
}

const Button: React.FC<Props> = ({ onClick, children, className }) => (
  <StyledButton className={className} onClick={onClick}>
    {children}
  </StyledButton>
);

export default Button;
