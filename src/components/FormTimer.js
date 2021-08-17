/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useMemo} from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';
import TimerButton from './TimerButton';

const FormTimer = ({onSubmit, initialState, onCancel}) => {
  const [initialData, setInitialData] = useState(initialState);

  const handleChangeText = fieldName => text => {
    setInitialData({...initialData, [fieldName]: text});
  };

  const handleSubmit = () => {
    onSubmit(initialData);
    onCancel();
  };

  const handleCancel = () => {
    onCancel();
  };

  const titleButton = useMemo(() => {
    return initialState.title !== '' && initialState.project !== ''
      ? 'Update'
      : 'Create';
  }, []);

  return (
    <View style={styles.formContainer}>
      <View style={styles.attributeContainer}>
        <Text style={styles.labelInput}>Title</Text>
        <View style={styles.textInputContainer}>
          <TextInput
            style={styles.textInput}
            value={initialData.title}
            onChangeText={handleChangeText('title')}
            underlineColorAndroid="transparent"
          />
        </View>
      </View>
      <View style={styles.attributeContainer}>
        <Text style={styles.labelInput}>Project</Text>
        <View style={styles.textInputContainer}>
          <TextInput
            style={styles.textInput}
            value={initialData.project}
            onChangeText={handleChangeText('project')}
            underlineColorAndroid="transparent"
          />
        </View>
      </View>
      <View style={styles.buttonGroup}>
        <TimerButton
          color="#21BA45"
          title={titleButton}
          onPress={handleSubmit}
        />
        <TimerButton color="#DB2828" title="Cancel" onPress={handleCancel} />
      </View>
    </View>
  );
};

export default FormTimer;

FormTimer.defaultProps = {
  initialState: {
    title: '',
    project: '',
  },
};

const styles = StyleSheet.create({
  formContainer: {
    backgroundColor: 'white',
    borderColor: '#D6D7DA',
    borderWidth: 2,
    borderRadius: 10,
    padding: 15,
    margin: 15,
    marginBottom: 0,
  },
  attributeContainer: {
    marginVertical: 8,
  },
  textInputContainer: {
    borderColor: '#D6D7DA',
    borderRadius: 2,
    borderWidth: 1,
    marginBottom: 5,
  },
  textInput: {
    height: 30,
    padding: 5,
    fontSize: 12,
  },
  labelInput: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
