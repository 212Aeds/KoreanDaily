import {Pressable, StyleSheet, Text, View} from 'react-native';
import {useRouter} from 'expo-router';
  
export default function HomeScreen(){
  const router = useRouter();
  return(
    <View style={styles.container}>
      <Text style={styles.title}>KR Korean Daily</Text>
      <Text style={styles.subtitle}>Learn Korean a little every day</Text>
      <View style={styles.lessonCard}>
        <Text style={styles.cardTitle}>Today's lesson</Text>
        <Text style={styles.cardText}>5 new words</Text>
        <Text style={styles.cardText}>About 5 minutes</Text>
        <Pressable 
          style={styles.button}
          onPress={() => router.push('./lesson')}
        >
          <Text style={styles.buttonText}>Start Lesson</Text>
        </Pressable>
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
    marginBottom: 10,
  },

  subtitle:{
    fontSize: 18,
    marginBottom: 30,
  },

  lessonCard:{
    width: '100%',
    padding: 25,
    borderRadius: 20,
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
  },

  cardTitle:{
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  
  cardText:{
    fontSize: 16,
    marginBottom: 5,
  },

  button:{
    marginTop: 20,
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