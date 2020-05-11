import React from 'react';
import styled from 'styled-components';
import Card from '../Card';
import CardIcon from '../Card/CardIcon';
import MoneyInput from '../MoneyInput';
import DateInput from '../DateInput';
import Button from '../Button';
import CardTitle from '../Card/CardTitle';
import CardSubtitle from '../Card/CardSubtitle';
import CardSummary from '../Card/CardSummary';
import { media } from '../../styles/mediaQueries';
import { toCurrency } from '../MoneyInput/utils';
import { monthsDiffFromToday, months } from '../../utils/date';
import { getMonthlyPayment } from './utils';

const StyledCardTitle = styled(CardTitle)`
  margin-top: 0.4rem;
`;

const StyledCardSubtitle = styled(CardSubtitle)`
  ${media.desktop} {
    margin-top: 0.2rem;
  }
`;

const StyledInputTitle = styled.div`
  font-size: 1.6rem;
  line-height: 1.25rem;
  font-weight: 500;
  margin-bottom: 0.4rem;
`;

const StyledInputsContainer = styled.div`
  margin-top: 3.6rem;

  ${media.desktop} {
    display: flex;
    justify-content: space-between;
    margin-top: 4rem;
  }
`;

const StyledDateInputContainer = styled.div`
  ${media.mobile} {
    margin-top: 1.6rem;
  }
  ${media.desktop} {
    width: calc(50% - 0.85rem);
  }
`;

const StyleMoneyInputContainer = styled.div`
  ${media.desktop} {
    width: calc(50% - 0.85rem);
  }
`;

const StyledSummary = styled(CardSummary)`
  margin-top: 3rem;
`;

const StyledButton = styled(Button)`
  min-width: 32.8rem;
  margin-top: 3.6rem;
  padding: 1.6rem 0;

  ${media.desktop} {
    margin-top: 3.1rem;
    align-self: center;
  }
`;

const StyledCard = styled(Card)`
  display: flex;
  flex-direction: column;
  padding: 2.8rem 2.4rem;

  ${media.desktop} {
    padding: 4rem 4rem 4.9rem;
  }
`;

interface SavingCardProps {
  iconSrc: string;
  iconAlt: string;
  title: string;
  className?: string;
  id: string;
}

const SavingCard: React.FC<SavingCardProps> = ({
  iconSrc,
  iconAlt,
  title,
  className,
  id
}) => {
  const [moneyValue, setMoneyValue] = React.useState(25000);
  const today = new Date();
  const [month, setMonth] = React.useState(today.getMonth());
  const [year, setYear] = React.useState(today.getFullYear());

  React.useEffect(() => {
    const savedData = localStorage.getItem(id);
    if (savedData) {
      const { value, month, year } = JSON.parse(savedData);
      setMoneyValue(value);
      setMonth(month);
      setYear(year);
    }
  }, [id]);

  const monthsToPay = monthsDiffFromToday(year, month);
  const monthlyPayment = getMonthlyPayment(monthsToPay, moneyValue);

  const handleSubmitCallback = React.useCallback(() => {
    localStorage.setItem(
      id,
      JSON.stringify({
        value: moneyValue,
        month,
        year
      })
    );
  }, [moneyValue, month, year, id]);

  return (
    <StyledCard className={className}>
      <CardIcon src={iconSrc} alt={iconAlt} />
      <StyledCardTitle>{title}</StyledCardTitle>
      <StyledCardSubtitle>Saving goal</StyledCardSubtitle>
      <StyledInputsContainer>
        <StyleMoneyInputContainer>
          <StyledInputTitle>Total amount</StyledInputTitle>
          <MoneyInput value={moneyValue} onChange={setMoneyValue} />
        </StyleMoneyInputContainer>
        <StyledDateInputContainer>
          <StyledInputTitle>Reach goal by</StyledInputTitle>
          <DateInput
            month={month}
            year={year}
            setMonth={setMonth}
            setYear={setYear}
          />
        </StyledDateInputContainer>
      </StyledInputsContainer>
      <StyledSummary value={monthlyPayment}>
        {`You’re planning `}
        <strong>
          {monthsToPay} monthly {monthsToPay === 1 ? 'deposit' : 'deposits'}
        </strong>
        {` to reach your `}
        <strong>{toCurrency(moneyValue, false)}</strong>
        {` goal by `}
        <strong>
          {months[month]} {year}.
        </strong>
      </StyledSummary>
      <StyledButton data-testid="button" onClick={handleSubmitCallback}>
        Confirm
      </StyledButton>
    </StyledCard>
  );
};

export default SavingCard;
