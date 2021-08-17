/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react';
import uuidv4 from 'uuid/v4';
import {StyleSheet, Text, View} from 'react-native';
import ToggleableTimerForm from './src/components/ToggleableTimerForm';
import TimerList from './src/components/TimerList';

const timers = [
  {
    title: 'Mow the lawn',
    project: 'House Chores',
    id: uuidv4(),
    elapsed: 5456099,
    isRunning: true,
  },
  {
    title: 'Bake squash',
    project: 'Kitchen Chores',
    id: uuidv4(),
    elapsed: 1273998,
    isRunning: false,
  },
];

const TIME_INTERVAL = 1000;

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [listTimers, setListTimers] = useState(timers);

  const createTimer = data => {
    const newTimer = {
      id: uuidv4(),
      isRunning: false,
      elapsed: 0,
      ...data,
    };
    const updatedListTimer = [...listTimers, newTimer];
    setListTimers(updatedListTimer);
  };

  const editTimer = data => {
    const updatedListTimer = listTimers.map(timerItem =>
      timerItem?.id === data?.id ? {...timerItem, ...data} : timerItem,
    );
    setListTimers(updatedListTimer);
  };

  const removeTimer = timerId => {
    const updatedListTimer = listTimers.filter(
      timerItem => timerItem?.id !== timerId,
    );
    setListTimers(updatedListTimer);
  };

  const toggleTimer = timerId => {
    setListTimers(updateListTimer =>
      updateListTimer.map(timer =>
        timer.id === timerId ? {...timer, isRunning: !timer.isRunning} : timer,
      ),
    );
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setListTimers(newListTimer =>
        newListTimer.map(timer => {
          const {elapsed, isRunning} = timer;

          return {
            ...timer,
            elapsed: isRunning ? elapsed + TIME_INTERVAL : elapsed,
          };
        }),
      );
    }, TIME_INTERVAL);
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <View style={styles.appContainer}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Timers</Text>
      </View>
      <ToggleableTimerForm
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        createNewTimer={createTimer}
      />
      <TimerList
        listTimer={listTimers}
        editTimer={editTimer}
        removeTimer={removeTimer}
        onStartPress={toggleTimer}
        onStopPress={toggleTimer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
  },
  titleContainer: {
    paddingTop: 35,
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#D6D7DA',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default App;
