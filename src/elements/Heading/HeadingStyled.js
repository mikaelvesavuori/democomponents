import styled from 'styled-components';

import HeadingCss from './HeadingCss';

import spacing from 'tokens/spacing';

const HeadingStyled = styled.div`
  ${HeadingCss};
  margin: 0 0 ${spacing.big} 0;
`;

export default HeadingStyled;