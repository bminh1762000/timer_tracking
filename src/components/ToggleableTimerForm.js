import React from 'react';
import {StyleSheet, View} from 'react-native';

import TimerButton from './TimerButton';
import FormTimer from './FormTimer';

const ToggleableTimerForm = ({isOpen, setIsOpen, createNewTimer}) => {
  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <View style={[styles.container, !isOpen && styles.buttonPadding]}>
      {isOpen ? (
        <FormTimer onCancel={handleClose} onSubmit={createNewTimer} />
      ) : (
        <TimerButton color="black" title="+" onPress={handleOpen} />
      )}
    </View>
  );
};

export default ToggleableTimerForm;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
  },
  buttonPadding: {
    paddingHorizontal: 15,
  },
});
