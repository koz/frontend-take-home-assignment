import React from 'react';
import styled from 'styled-components';
import Header from '../Header';

const StyledPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #f4f8fa;
  min-height: 100vh;
`;

const PageLayout: React.FC = ({ children }) => (
  <StyledPageContainer>
    <Header />
    {children}
  </StyledPageContainer>
);

export default PageLayout;
