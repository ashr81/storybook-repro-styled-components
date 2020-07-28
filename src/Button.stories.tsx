import React, { ReactNode } from 'react';
import styled from 'styled-components';

export interface ButtonProps {
  isActive?: boolean;
  children: ReactNode;
}
const ButtonContainer = styled.button`
`

export const Button = ({children, ...props}: ButtonProps) => <ButtonContainer {...props}>{children}</ButtonContainer>;

Button.displayName = 'Button';

Button.defaultProps = {
  isActive: true,
  children: 'Some text'
}

export default {
  title: 'Button',
  component: Button,
  argsType: {
    isActive: {
      description: 'overwriting text'
    }
  }
}