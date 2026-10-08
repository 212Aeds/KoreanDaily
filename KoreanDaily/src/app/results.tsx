import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';

export default function ResultsScreen(){
    const router = useRouter();
    const params = useLocalSearchParams();

    const score = Number(params.score);

    return(
        <View style={styles.container}>
            <Text style={styles.title}>Lesson Complete!</Text>

            <Text style={styles.subtitle}>
                Great job!
            </Text>

            <Text style={styles.score}>
                {score} / 5
            </Text>

            <Text style={styles.message}>
                You got {score} out of 5 questions correct.
            </Text>

            <Pressable
                style={styles.button}
                onPress={() => router.push('/')}
            >
                <Text style={styles.buttonText}>
                    Back to Home
                </Text>
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
        fontSize: 32,
        fontWeight: 'bold',
        marginBottom: 15,
    },

    subtitle:{
        fontSize: 20,
        marginBottom: 25,
    },

    score:{
        fontSize: 60,
        fontWeight: 'bold',
        marginBottom: 20,
    },

    message:{
        fontSize: 18,
        marginBottom: 35,
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