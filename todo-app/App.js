import { StatusBar } from 'expo-status-bar';
import { 
  Button, 
  StyleSheet, 
  TextInput, 
  View, 
  FlatList
} from 'react-native';
import { useState } from 'react';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {

  const [enteredGoalText, setEnteredGoalText] = useState('')
  const [courseGoals, setCourseGoals] = useState([])
  const [modalIsVisible, setModalIsVisible] = useState(false)

  function startAddGoalHandler() {
    setModalIsVisible(true)
  }

  function endAddGoalHandler() {
    setModalIsVisible(false)
  }

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText)
  }

  function addGoalHandler() {
    setCourseGoals(currentCourseGoals => [
      ...currentCourseGoals, 
      {text: enteredGoalText, id: Math.random().toString()}
    ])
    setEnteredGoalText('')
    endAddGoalHandler()
  }

  function deleteGoalHandler(id) {
    setCourseGoals((courseGoals) => {
      return courseGoals.filter((goal) => goal.id !== id)
    })
  }

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <Button 
          title='Add New Goal'
          color="#5e0acc"
          onPress={startAddGoalHandler}
        />
        <GoalInput
          goalInputHandler={goalInputHandler}
          addGoalHandler={addGoalHandler}
          closeHandler={endAddGoalHandler}
          value={enteredGoalText}
          visible={modalIsVisible}
        />
        <View style={styles.goalsContainer}>
          <FlatList
            data={courseGoals}
            alwaysBounceVertical={false}
            renderItem={(itemData) => {
              return <GoalItem 
                        text={itemData.item.text} 
                        id={itemData.item.id}
                        onDelete={deleteGoalHandler}
                      />
            }}
            keyExtractor={(item, index) => {
              return item.id
            }}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor: '#1e085a'
  },
  goalsContainer: {
    flex: 5
  }
});
