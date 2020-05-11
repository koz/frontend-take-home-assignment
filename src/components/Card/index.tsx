import styled from 'styled-components';
import { media } from '../../styles/mediaQueries';

export default styled.div`
  border-radius: 0.8rem;
  background: #fff;
  border: 0.1rem solid #e1e8ed;
  box-shadow: 0 0.1rem 0.4rem rgba(150, 164, 176, 0.1);

  ${media.mobile} {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }
`;
