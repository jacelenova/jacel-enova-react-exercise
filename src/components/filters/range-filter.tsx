
import { FlexColumn } from '../flex/flex-column';
import './range-filter.css';

interface RangeFilterProps {
  label: string,
  min: number,
  max: number,
  changeEvent: (val: number) => void,
  value: number,
}

export const RangeFilter = ({ label, min, max, changeEvent, value }: RangeFilterProps) => {

  return (
    <FlexColumn>
      <div className='label'>{label}</div>
      <div className='range'>
        <div>${value}</div>
        <input type='range' min={min} max={max} onChange={(event) => changeEvent(event.target.valueAsNumber)} value={value}></input>
      </div>
      <div className='minmax'>
        <div className='min'>${min}</div>
        <div className='max'>${max}</div>
      </div>
    </FlexColumn>
  )
}