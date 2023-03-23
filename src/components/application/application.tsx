
import { ApplicationRecord } from '../../models/application-record';
import './application.css';

export const Application = ({application }: {application: ApplicationRecord}) => {
  return (
    <div className='application'>
      <div className='app-name'>{application.id}</div>
      <div className='app-spend'>Total spend: ${application.spend}</div>
    </div>
  )
}