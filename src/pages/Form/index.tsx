import React from 'react';
import styled from 'styled-components';
import { media } from '../../styles/mediaQueries';

import SavingCard from '../../components/SavingCard';
import PageLayout from '../../components/PageLayout';
import { useParams } from 'react-router-dom';
import { cards } from '../../utils/constants';

const StyledTitle = styled.h1`
  color: #1b31a8;
  font-size: 1.8rem;
  line-height: 1.44;
  margin-top: 2.3rem;
  margin-bottom: 2.4rem;

  ${media.desktop} {
    font-size: 2.4rem;
    line-height: 1.33;
    margin-top: 5.4rem;
    margin-bottom: 4rem;
  }

  & > strong {
    font-weight: 600;
  }
`;

const StyledSavingCard = styled(SavingCard)`
  align-self: stretch;

  ${media.mobile} {
    flex-grow: 1;
  }

  ${media.desktop} {
    align-self: center;
    width: 56rem;
  }
`;

const Form = () => {
  const { id } = useParams();
  const { title, icon } = cards.find(c => c.id === id) || {};
  return (
    <PageLayout>
      <StyledTitle>
        Let&apos;s plan your <strong>saving goal</strong>
      </StyledTitle>
      <StyledSavingCard iconSrc={icon} iconAlt="Icon alt text" title={title} />
    </PageLayout>
  );
};

export default Form;
