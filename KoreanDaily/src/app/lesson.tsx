import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function LessonScreen(){
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Today's Lesson</Text>
            <Text style={styles.word}>안녕하세요</Text>
            <Text style={styles.pronunciation}>annyeonghaseyo</Text>
            <Text style={styles.meaning}>Hello</Text>
            <Text style={styles.example}>안녕하세요!</Text>
            <Pressable style={styles.button}>
                <Text style={styles.buttonText}>Next Word</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },

    title:{
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 40,
    },

    word:{
        fontSize: 48,
        fontWeight: 'bold',
        marginBottom: 10,
    },

    pronunciation:{
        fontSize: 20,
        marginBottom: 20,
    },

    meaning:{
        fontSize: 24,
        marginBottom: 20,
    },

    example:{
        fontSize: 22,
        marginBottom: 30,
    },

    button:{
        paddingVertical: 15,
        paddingHorizontal: 40,
        borderRadius: 10,
        backgroundColor: '#222',
    },

    buttonText:{
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
});