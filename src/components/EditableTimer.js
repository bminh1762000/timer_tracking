import React, {useState} from 'react';
import FormTimer from './FormTimer';
import Timer from './Timer';

const EditableTimer = ({
  timer,
  editTimer,
  removeTimer,
  onStopPress,
  onStartPress,
}) => {
  const [editFormOpen, setEditFormOpen] = useState(false);

  const handleStartPress = () => {
    onStartPress(timer?.id);
  };

  const handleStopPress = () => {
    onStopPress(timer?.id);
  };

  const onCancel = () => {
    setEditFormOpen(false);
  };

  const onEdit = () => {
    setEditFormOpen(true);
  };

  const handleEdit = data => {
    const editData = {...data, id: timer?.id};
    editTimer(editData);
  };

  const handleRemove = () => {
    removeTimer(timer?.id);
  };

  if (editFormOpen) {
    return (
      <FormTimer
        onCancel={onCancel}
        initialState={{title: timer.title, project: timer?.project}}
        onSubmit={handleEdit}
      />
    );
  }
  return (
    <Timer
      timer={timer}
      onEdit={onEdit}
      onRemove={handleRemove}
      onStart={handleStartPress}
      onStop={handleStopPress}
    />
  );
};

export default EditableTimer;
