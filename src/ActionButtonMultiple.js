import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ActionMenu from 'react-native-circular-action-menu';
import Icon from 'react-native-vector-icons/FontAwesome';

const MultipleActionButton = ({ navigation, route }) => {
  const [taskTitle, setTaskTitle] = useState('');

    const handleActionClick = (action) => {
      console.log('Action Clicked:', action);
    };
  

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Circular Action Menu Example</Text>
      <ActionMenu
        active={false}
        buttonColor="rgba(231,76,60,1)"
        bgColor="rgba(255,255,255,0.8)"
        btnOutRange="rgba(158,158,158,1)"
        radius={120}
        icon={<Icon name="add" type="material" color="#FFFFFF" size={24} />}
        onPress={handleActionClick}
      >
        <ActionMenu.Item
          text="Action 1"
          onPress={() => handleActionClick('Action 1')}
          buttonColor="#9b59b6"
          textContainerStyle={styles.actionTextContainer}
        >
          <Icon name="alarm" type="material" color="#FFFFFF" size={20} />
        </ActionMenu.Item>
        <ActionMenu.Item
          text="Action 2"
          onPress={() => handleActionClick('Action 2')}
          buttonColor="#3498db"
          textContainerStyle={styles.actionTextContainer}
        >
          <Icon name="attachment" type="material" color="#FFFFFF" size={20} />
        </ActionMenu.Item>
        <ActionMenu.Item
          text="Action 3"
          onPress={() => handleActionClick('Action 3')}
          buttonColor="#1abc9c"
          textContainerStyle={styles.actionTextContainer}
        >
          <Icon name="bookmark" type="material" color="#FFFFFF" size={20} />
        </ActionMenu.Item>
      </ActionMenu>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  actionTextContainer: {
    backgroundColor: 'transparent',
    borderWidth: 0,
    borderRadius: 20,
  },
});


export default MultipleActionButton;
