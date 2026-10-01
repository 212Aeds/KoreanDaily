import { StyleSheet, Text, View } from 'react-native';

export default function LessonScreen(){
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Today's Lesson</Text>
            <Text style={styles.subtitle}>Learn these 5 words.</Text>
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
        fontSize: 18,
        textAlign: 'center',
    },
});