import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const TaskList = ({ navigation }) => {
  const [tasks, setTasks] = useState([]);

  const handleAddTask = () => {
    navigation.navigate('AddTask', {
      onTaskAdded: (newTask) => {
        setTasks([...tasks, newTask]);
      },
    });
  };

  const handleTaskToggle = (taskIndex) => {
    const updatedTasks = [...tasks];
    updatedTasks[taskIndex].completed = !updatedTasks[taskIndex].completed;
    setTasks(updatedTasks);
  };

  const handleTaskDelete = (taskIndex) => {
    Alert.alert(
      'Confirmation',
      'Are you sure you want to delete this task?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Delete',
          style: 'destructive',
          onPress: () => {
            const updatedTasks = [...tasks];
            updatedTasks.splice(taskIndex, 1);
            setTasks(updatedTasks);
          },
        },
      ],
      { cancelable: true }
    );
  };

  const renderTaskItem = ({ item, index }) => {
    return (
      <TouchableOpacity onPress={() => handleTaskToggle(index)} style={styles.taskItem}>
        <Icon
          name={item.completed ? 'check-circle' : 'circle-thin'}
          size={24}
          color={item.completed ? '#00C851' : '#BDBDBD'}
          style={styles.icon}
        />
        <Text style={[styles.taskTitle, item.completed && styles.completedTask]}>{item.title}</Text>
        <TouchableOpacity onPress={() => handleTaskDelete(index)} style={styles.deleteButton}>
          <Icon name="trash-o" size={20} color="#FF4444" />
        </TouchableOpacity>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={tasks}
        renderItem={renderTaskItem}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={styles.taskList}
        ListEmptyComponent={<Text style={styles.emptyText}>No tasks available</Text>}
      />
      <TouchableOpacity onPress={handleAddTask} style={styles.addButton}>
        <Text style={styles.addButtonText}>Add Task</Text>
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
  taskList: {
    flexGrow: 1,
  },
  taskItem: {
    backgroundColor: '#FFF',
    marginBottom: 8,
    padding: 16,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: 12,
  },
  taskTitle: {
    flex: 1,
    fontSize: 18,
  },
  completedTask: {
    textDecorationLine: 'line-through',
    color: '#888',
  },
  deleteButton: {
    padding: 8,
  },
  addButton: {
    backgroundColor: '#2196F3',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  addButtonText: {
    color: '#FFF',
    fontSize: 18,
  },
  emptyText: {
    textAlign: 'center',
    fontSize: 18,
    marginTop: 16,
  },
});

export default TaskList;
