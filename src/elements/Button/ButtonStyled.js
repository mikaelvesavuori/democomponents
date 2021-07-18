import styled from 'styled-components';

import ButtonCss from './ButtonCss';

import spacing from 'tokens/spacing';

const ButtonStyled = styled.div`
  ${ButtonCss};
  cursor: pointer;
  transition: 0.15s;
  line-height: ${spacing.tall};
`;

export default ButtonStyled;