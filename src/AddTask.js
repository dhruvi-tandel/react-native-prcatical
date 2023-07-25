import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';

const AddTask = ({ navigation, route }) => {
  const [taskTitle, setTaskTitle] = useState('');

  const handleSaveTask = () => {
    const newTask = { title: taskTitle, completed: false };
    route.params.onTaskAdded(newTask);
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter task title"
        onChangeText={setTaskTitle}
      />
      <TouchableOpacity onPress={handleSaveTask} style={styles.saveButton}>
        <Text style={styles.saveButtonText}>Save</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#F8F8F8',
  },
  input: {
    borderWidth: 1,
    borderColor: '#CCC',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    fontSize: 18,
    backgroundColor: '#FFF',
  },
  saveButton: {
    backgroundColor: '#2196F3',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  saveButtonText: {
    color: '#FFF',
    fontSize: 18,
  },
});

export default AddTask;
