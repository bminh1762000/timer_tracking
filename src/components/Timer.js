import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import TimerButton from './TimerButton';
import {millisecondsToHuman} from '../utils/TimerUtils';

const Timer = ({timer, onEdit, onRemove, onStart, onStop}) => {
  const elapsedString = millisecondsToHuman(timer?.elapsed);

  return (
    <View style={styles.timerContainer}>
      <Text style={styles.title}>{timer?.title}</Text>
      <Text style={styles.project}>{timer?.project}</Text>
      <Text style={styles.elapsedTime}>{elapsedString}</Text>
      <View style={styles.buttonGroup}>
        <TimerButton title="Edit" color="blue" small onPress={onEdit} />
        <TimerButton title="Remove" color="red" small onPress={onRemove} />
      </View>
      <TimerButton
        title={timer?.isRunning ? 'Stop' : 'Start'}
        color={timer?.isRunning ? '#c0392b' : '#21BA45'}
        onPress={timer?.isRunning ? onStop : onStart}
      />
    </View>
  );
};

export default Timer;

const styles = StyleSheet.create({
  timerContainer: {
    backgroundColor: 'white',
    borderColor: '#d6d7da',
    borderWidth: 2,
    borderRadius: 10,
    padding: 15,
    margin: 15,
    marginBottom: 0,
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  elapsedTime: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 15,
  },
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
