import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';
import { useRouter } from 'expo-router';

const words = [
    {
        korean: '안녕하세요',
        pronunciation: 'annyeonghaseyo',
        meaning: 'Hello',
        example: '안녕하세요!',
    },
    {
        korean: '감사합니다',
        pronunciation: 'gamsahamnida',
        meaning: 'Thank you',
        example: '감사합니다!',
    },
    {
        korean: '친구',
        pronunciation: 'chingu',
        meaning: 'Friend',
        example: '내 친구예요.',
    },
    {
        korean: '학교',
        pronunciation: 'hakgyo',
        meaning: 'School',
        example: '학교에 가요.',
    },
    {
        korean: '사랑',
        pronunciation: 'sarang',
        meaning: 'Love',
        example: '사랑해요.',
    },
];

export default function LessonScreen(){
    const [currentWord, setCurrentWord] = useState(0);
    const rouer = useRouter();
    
    const word = words[currentWord];
    
    function nextWord(){
        if(currentWord < words.length - 1){
            setCurrentWord(currentWord + 1);
        }
    }

    return(
        <View style={styles.container}>
            <Text style={styles.title}>Today's Lesson</Text>
            <Text style ={styles.progress}>Word {currentWord + 1} of {words.length}</Text>
            <Text style={styles.word}>{word.korean}</Text>
            <Text style={styles.pronunciation}>{word.pronunciation}</Text>
            <Text style={styles.meaning}>{word.meaning}</Text>
            <Text style={styles.example}>{word.example}</Text>
            <Pressable style={styles.button} onPress={nextWord}>
                <Text style={styles.buttonText}>{currentWord === words.length - 1 ? 'Start Quiz' : 'Next Word'}</Text>
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
        marginBottom: 15,
    },

    progress:{
        fontSize: 16,
        marginBottom: 30,
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