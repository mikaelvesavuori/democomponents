import styled from 'styled-components';

import DescriptionCss from './DescriptionCss';

import colors from 'tokens/colors';
import fontSizes from 'tokens/fontSizes';
import spacing from 'tokens/spacing';

// Extend the below as needed
const DescriptionStyled = styled.div`
  ${DescriptionCss};
  height: auto;
  text-align: ${props => props.right ? "right" : "left"};
  font-weight: ${props => props.bold ? "bold" : "normal"};
  color: ${props => props.purple ? `${colors.purple}`: `${colors.black}`};
  font-size: ${fontSizes.regular};
  line-height: 1.5rem;
  margin: 0 0 ${spacing.small} 0;
`;

export default DescriptionStyled;