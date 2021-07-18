import styled from 'styled-components';

import LabelCss from './LabelCss';

import spacing from "tokens/spacing";

const LabelStyled = styled.label`
  ${LabelCss};
  display: inline-block;
  margin-bottom: ${spacing.small};
`;

export default LabelStyled;