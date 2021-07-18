import styled from 'styled-components';

import FooterCss from './FooterCss';

import spacing from 'tokens/spacing';

const FooterStyled = styled.footer`
  ${FooterCss};
  width: 98%;
  bottom: ${spacing.big};
`;

export default FooterStyled;