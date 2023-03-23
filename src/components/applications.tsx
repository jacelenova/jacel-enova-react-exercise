import { useContext, useEffect, useState } from 'react';
import { AppContext } from "../contexts/app-context"
import { ApplicationRecord } from '../models/application-record';
import { Application } from './application';
import { Flex } from './flex/flex';

export const Applications = () => {
  const { appData, spendingValue } = useContext(AppContext);
  const [filteredApps, setFilteredApps] = useState<ApplicationRecord[]>([])

  const styles: React.CSSProperties = {
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
  }

  useEffect(() => {
    const filtered = appData?.filter((app) => {
      return app.spend >= spendingValue;
    });
    setFilteredApps(filtered || []);
  }, [appData, spendingValue])

  return (
    <Flex styles={styles}>
      {
        filteredApps && filteredApps.map((app) => {
          return <Application key={app.id} application={app}></Application>
        })
      }
    </Flex>
  )
}