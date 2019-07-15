import React from 'react';
import './TimeSelection.css';

const timeSelection = props => {
  const { startTime } = props;
  const { endTime } = props;

  let start = 7;
  let end = 8;
  const hours = [
    '',
    '9:00 AM',
    '10:00 AM',
    '11:00 AM',
    '12:00 PM',
    '1:00 PM',
    '2:00 PM',
    '3:00 PM',
    '4:00 PM',
    '5:00 PM'
  ];
  const startHours = hours.filter(hour => hour !== '5:00 PM');
  const endHours = hours.filter(hour => hour !== '9:00 AM');

  return (
    <div>
      <h3>Start Time</h3>
      <select className="times" name="startTime" value={startTime} onChange={props.handleChange}>
        {startHours.map((hour, index) => {
          start++;
          let startHourValue = start.toString();
          return (
            <option key={index} value={startHourValue}>
              {hour}
            </option>
          );
        })}
      </select>
      <h3> End Time</h3>
      <select className="times" name="endTime" value={endTime} onChange={props.handleChange}>
        {endHours.map((hour, index) => {
          end++;
          let endHourValue = end.toString();
          return (
            <option key={index} value={endHourValue}>
              {hour}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default timeSelection;
