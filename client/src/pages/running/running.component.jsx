import React from 'react';
import RunningChart from '../../components/running-chart/running-chart.component';

const RunningPage = () => (
  <>
    <RunningChart title="Неделя 1" items={[
      ['ПН, 21', 'ВТ, 22', 'СР, 23', 'ЧТ, 24', 'ПТ, 25', 'СБ, 26'],
      [6.38, 6.45, 5.56, 5.58, 5.58, 5.22],
      [5.13, 4.06, 6.58, 4.14, 7.01, 10.30] // distance
    ]} />
    <RunningChart title="Неделя 2" items={[
      ['ПН, 21', 'ВТ, 22', 'СР, 23', 'ЧТ, 24', 'ПТ, 25', 'СБ, 26'],
      [6.38],
      [5.13] // distance
    ]} />
  </>
)

export default RunningPage;
