import { View, TextInput, Button, StyleSheet, Modal, Image } from "react-native"

function GoalInput(props) {
    return (
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.inputContainer}>
                <Image 
                    source={require('../assets/images/goal.png')} 
                    style={styles.image}
                />
                <TextInput
                    style={styles.textInput}
                    placeholder='Your course goal!'
                    onChangeText={props.goalInputHandler}
                    value={props.value}
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title='Cancel' onPress={props.closeHandler} color="#f31282" />
                    </View>
                    <View style={styles.button}>
                        <Button title='Add Goal' onPress={props.addGoalHandler} color="#b180f0" />
                    </View>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#311b6b'
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#e4d0ff',
        backgroundColor: '#e4d0ff',
        color: '#120438',
        borderRadius: 6,
        width: '70%',
        marginRight: 8,
        padding: 16
    },
    buttonContainer: {
        flexDirection: 'row',
        marginTop: 16
    },
    button: {
        width: 100,
        marginHorizontal: 8
    },
    image: {
        width: 100,
        height: 100,
        margin: 20
    }
})

export default GoalInput