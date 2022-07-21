import React from 'react'
import { 
    Timeline, 
    TimelineSeparator, 
    TimelineItem, 
    TimelineDot,
    TimelineConnector, 
    TimelineContent, 
    TimelineOppositeContent} from '@mui/lab';
function MuiTimeLine() {
  return (
    <Timeline>
        <TimelineItem>
            <TimelineOppositeContent>9:30 AM</TimelineOppositeContent>
            <TimelineSeparator>
                <TimelineDot color='secondary' />
                <TimelineConnector/>
            </TimelineSeparator>
            <TimelineContent>City A</TimelineContent>
        </TimelineItem>

        <TimelineItem>
            <TimelineOppositeContent>10:30 AM</TimelineOppositeContent>
            <TimelineSeparator>            
                <TimelineDot color='secondary' />
                <TimelineConnector/>
            </TimelineSeparator>
            <TimelineContent>City B</TimelineContent>
        </TimelineItem>

        <TimelineItem>
        <TimelineOppositeContent>11:30 AM</TimelineOppositeContent>
            <TimelineSeparator>
                <TimelineDot color='secondary' />
            </TimelineSeparator>
            <TimelineContent>City C</TimelineContent>
        </TimelineItem>
    </Timeline>
  )
}

export default MuiTimeLine