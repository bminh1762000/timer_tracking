import React from 'react';
import {ScrollView} from 'react-native';
import EditableTimer from './EditableTimer';

const TimerList = ({
  listTimer,
  editTimer,
  removeTimer,
  onStartPress,
  onStopPress,
}) => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {listTimer.map(timer => (
        <EditableTimer
          key={timer?.id}
          timer={timer}
          editTimer={editTimer}
          removeTimer={removeTimer}
          onStopPress={onStopPress}
          onStartPress={onStartPress}
        />
      ))}
    </ScrollView>
  );
};

export default TimerList;
