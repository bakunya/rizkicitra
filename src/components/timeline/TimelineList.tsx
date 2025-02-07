import { twclsx } from '@/libs/twclsx'

import { Timeline } from './Timeline'

import type { Timeline as TimelineType } from 'rizkicitra'

interface TimelineListProps {
  timeline: Array<TimelineType>
}

export const TimelineList: React.FunctionComponent<TimelineListProps> = ({ timeline }) => (
  <ul className={twclsx('pl-2')}>
    {timeline
      .sort((a, b) => (new Date(a.start_date) < new Date(b.start_date) ? 1 : -1))
      .map((data: TimelineType, idx: number) => (
        <Timeline {...data} key={data.title + idx} />
      ))}
  </ul>
)
