import { useContext, useEffect } from 'react';
import { RangeFilter } from './range-filter';
import { AppContext } from '../../contexts/app-context';
import { FlexColumn } from '../flex/flex-column';
import './filters.css';

export const Filters = () => {
  const { minSpendingValue, maxSpendingValue, spendingValue, setSpendingValue } = useContext(AppContext);
  const spendFilterChange = (val: number) => {
    if (setSpendingValue != null) {
      setSpendingValue(val);
    }
  }

  const spendProps = {
    label: 'Spending',
    min: minSpendingValue,
    max: maxSpendingValue,
    value: spendingValue,
    changeEvent: spendFilterChange
  }

  useEffect(() => {
    const mid = Math.round(minSpendingValue + ((maxSpendingValue - minSpendingValue) / 2));
    setSpendingValue(mid);
  }, [minSpendingValue, maxSpendingValue, setSpendingValue])

  return (
    <FlexColumn className='filters'>
      <div className='border-top'></div>
      <div className='filters-label'>Filters</div>
      <RangeFilter {...spendProps}></RangeFilter>
    </FlexColumn>
  )
}