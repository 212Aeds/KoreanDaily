import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';
import { useRouter } from 'expo-router';

const questions = [
    {
        korean: '안녕하세요',
        question: 'What does this mean?',
        answer: 'Hello',
        choices: ['Hello', 'Thank you', 'Friend', 'School'],
    },
    {
        korean: '감사합니다',
        question: 'What does this mean?',
        answer: 'Thank you',
        choices: ['Love', 'School', 'Thank you', 'Friend'],
    },
    {
        korean: '친구',
        question: 'What does this mean?',
        answer: 'Friend',
        choices: ['Friend', 'Hello', 'Love', 'School'],
    },
    {
        korean: '학교',
        question: 'What does this mean?',
        answer: 'School',
        choices: ['Thank you', 'School', 'Friend', 'Hello'],
    },
    {
        korean: '사랑',
        question: 'What does this mean?',
        answer: 'Love',
        choices: ['School', 'Love', 'Hello', 'Thank you'],
    },
];

export default function QuizScreen(){
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [finished, setFinished] = useState(false);

    const router = useRouter();

    const question = questions[currentQuestion];

    function chooseAnswer(choice: string){
        let newScore = score;

        if(choice === question.answer){
            newScore = score + 1;
            setScore(newScore);
        }

        if(currentQuestion < questions.length - 1){
            setCurrentQuestion(currentQuestion + 1);
        }
        else{
            router.push(`/results?score=${newScore}`);
        }
    }

    return(
        <View style={styles.container}>
            <Text style={styles.title}>Korean Quiz</Text>

            <Text style={styles.progress}>
                Question {currentQuestion + 1} of {questions.length}
            </Text>

            <Text style={styles.word}>
                {question.korean}
            </Text>

            <Text style={styles.question}>
                {question.question}
            </Text>

            <View style={styles.choices}>
                {question.choices.map((choice) => (
                    <Pressable
                        key={choice}
                        style={styles.choiceButton}
                        onPress={() => chooseAnswer(choice)}
                    >
                        <Text style={styles.choiceText}>
                            {choice}
                        </Text>
                    </Pressable>
                ))}
            </View>
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
        fontSize: 32,
        fontWeight: 'bold',
        marginBottom: 15,
    },

    progress:{
        fontSize: 16,
        marginBottom: 35,
    },

    word:{
        fontSize: 48,
        fontWeight: 'bold',
        marginBottom: 20,
    },

    question:{
        fontSize: 20,
        marginBottom: 25,
    },

    choices:{
        width: '100%',
    },

    choiceButton:{
        padding: 18,
        borderRadius: 10,
        backgroundColor: '#f0f0f0',
        marginBottom: 12,
        alignItems: 'center',
    },

    choiceText:{
        fontSize: 18,
    },
});