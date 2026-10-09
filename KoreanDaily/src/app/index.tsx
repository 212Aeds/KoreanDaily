import { useState } from 'react';
import { useRouter } from 'expo-router';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';

const durations = [5, 10, 15];

export default function HomeScreen(){
  const router = useRouter();
  const [duration, setDuration] = useState(10);

  return(
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <View style={styles.logo}>
          <Text style={styles.logoText}>한</Text>
        </View>
        <View>
          <Text style={styles.appName}>KoreanDaily</Text>
          <Text style={styles.tagline}>A little Korean every day</Text>
        </View>
      </View>
      
      <View style={styles.intro}>
        <Text style={styles.title}>What would you like to learn today?</Text>
        <Text style={styles.subtitle}>Choose how much time you want to practice</Text>
      </View>
      
      <View style={styles.durationRow}>
        {durations.map((minutes) => (
          <Pressable
            key={minutes}
            style={[
              styles.durationCard,
              duration === minutes && styles.selectedCard,
            ]}
            onPress={() => setDuration(minutes)}
          >
            <Text
              style={[
                styles.durationText,
                duration === minutes && styles.selectedText,
              ]}
            >
              {minutes} min
            </Text>
            <Text
              style={[
                styles.durationDescription,
                duration === minutes && styles.selectedText,
              ]}
            >
              {minutes === 5
                ? 'Quick'
                : minutes === 10
                ? 'Balanced'
                : 'More practice'}
            </Text>
          </Pressable>
        ))}
      </View>

      <View style={styles.lessonCard}>
        <Text style={styles.eyebrow}>SUGGESTED FOR BEGINNERS</Text>
        <Text style={styles.lessonTitle}>Start with Korean Basics</Text>
        <Text style={styles.lessonDescription}>Learn useful words, see example sentences, and test what you remember.</Text>
        <Text style={styles.estimatedTime}>Practice goal: {duration} minutes</Text>

        <Pressable 
          style={styles.button} 
          onPress={() => 
            router.push({
              pathname: './topics',
              params: { duration: String(duration) },
            })
          }>
          <Text style={styles.buttonText}>Choose a Topic</Text>
        </Pressable>
      </View>

      <Text style={styles.footer}>Learn at your own pace. Every word counts.</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container:{
    flexGrow: 1,
    backgroundColor: '#FAFAF7',
    padding: 24,
    paddingTop: 55,
  },

  header:{
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginBottom: 45,
  },

  logo:{
    width: 48,
    height: 48,
    borderRadius: 14,
    backgroundColor: '#DCECE0',
    justifyContent: 'center',
    alignItems: 'center',
  },

  logoText:{
    fontSize: 27,
    fontWeight: 'bold',
    color: '#24543D'
  },
  
  appName:{
    fontSize: 22,
    fontWeight: 'bold',
    color: '#24352B',
  },

  tagline:{
    fontSize: 13,
    color: '#68756C',
    marginTop: 3,
  },

  intro:{
    marginBottom: 24,
  },

  title:{
    fontSize: 30,
    fontWeight: 'bold',
    color: '#24352B',
    lineHeight: 38,
  },

  subtitle:{
    fontSize: 16,
    color: '#68756C',
    marginTop: 10,
    lineHeight: 23,
  },

  durationRow:{
    flexDirection: 'row',
    gap: 10,
    marginBottom: 28,
  },

  durationCard:{
    flex: 1,
    paddingVertical: 18,
    paddingHorizontal: 4,
    alignItems: 'center',
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#D9DED7',
    backgroundColor: '#FFFFFF',
  },

  selectedCard:{
    backgroundColor: '#E3F0E6',
    borderColor: '#398260',
    borderWidth: 2,
  },

  durationText:{
    fontSize: 17,
    fontWeight: 'bold',
    color: '#34483A',
  },

  durationDescription:{
    fontSize: 11,
    color: '#68756C',
    marginTop: 6,
  },

  selectedText:{
    color: '#24543D',
  },

  lessonCard:{
    backgroundColor: '#FFFFFF',
    padding: 24,
    borderRadius: 22,
    borderWidth: 1,
    borderColor: '#E6E8E1',
  },

  eyebrow:{
    fontSize: 11,
    fontWeight: 'bold',
    letterSpacing: 1,
    color: '#398260',
    marginBottom: 12,
  },

  cardTitle:{
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
  },

  lessonTitle:{
    fontSize: 24,
    fontWeight: 'bold',
    color: '#24352B',
  },
  
  lessonDescription:{
    fontSize: 15,
    lineHeight: 23,
    color: '#68756C',
    marginTop: 12,
  },

  estimatedTime:{
    fontSize: 14,
    fontWeight: '600',
    color: '#34483A',
    marginTop: 18,
  },

  button:{
    backgroundColor: '#24543D',
    paddingVertical: 16,
    borderRadius: 13,
    alignItems: 'center',
    marginTop: 22,
  },

  buttonText:{
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },

  footer:{
    textAlign: 'center',
    fontSize: 13,
    color: '#7A847C',
    marginTop: 28,
    marginBottom: 12,
  }
});