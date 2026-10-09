
import { useLocalSearchParams, useRouter } from 'expo-router';
import { Pressable, ScrollView, StyleSheet, Text, View, } from 'react-native';

const topics = [
  {
    id: 'hangul',
    title: 'Hangul Basics',
    korean: '한글',
    description: 'Learn the Korean alphabet and pronunciation.',
    lessons: 'Letters and syllables',
  },
  {
    id: 'vocabulary',
    title: 'Everyday Vocabulary',
    korean: '단어',
    description: 'Learn useful words for everyday life.',
    lessons: 'Greetings, numbers, and more',
  },
  {
    id: 'conversation',
    title: 'Simple Conversations',
    korean: '대화',
    description: 'Practice expressions used in real conversations.',
    lessons: 'Introductions and greetings',
  },
];

export default function TopicsScreen() {
  const router = useRouter();
  const { duration } = useLocalSearchParams<{duration?: string;}>();

  return(
    <ScrollView contentContainerStyle={styles.container}>
      <Pressable onPress={() => router.back()}>
        <Text style={styles.back}>← Back</Text>
      </Pressable>

      <Text style={styles.title}>Choose a topic</Text>
      <Text style={styles.subtitle}>Find something you'd like to learn.</Text>

      {topics.map((topic) => (
        <Pressable
          key={topic.id}
          style={styles.card}
          onPress={() =>
            router.push({
              pathname: '/lesson',
              params: {
                topic: topic.id,
                duration: duration ?? '10',
              },
            })
          }
        >
          <View style={styles.koreanBadge}>
            <Text style={styles.korean}>{topic.korean}</Text>
          </View>

          <Text style={styles.cardTitle}>{topic.title}</Text>
          <Text style={styles.description}>{topic.description}</Text>
          <Text style={styles.lessons}>{topic.lessons}</Text>
          <Text style={styles.open}>View lessons →</Text>
        </Pressable>
      ))}
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

  back:{
    fontSize: 16,
    color: '#398260',
    marginBottom: 25,
  },

  title:{
    fontSize: 30,
    fontWeight: 'bold',
    color: '#24352B',
  },

  subtitle:{
    fontSize: 16,
    color: '#68756C',
    marginTop: 8,
    marginBottom: 25,
  },

  card:{
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E6E8E1',
    borderRadius: 18,
    padding: 20,
    marginBottom: 16,
  },

  koreanBadge:{
    backgroundColor: '#E3F0E6',
    alignSelf: 'flex-start',
    paddingHorizontal: 13,
    paddingVertical: 8,
    borderRadius: 10,
    marginBottom: 14,
  },

  korean:{
    fontSize: 20,
    fontWeight: 'bold',
    color: '#24543D',
  },

  cardTitle:{
    fontSize: 21,
    fontWeight: 'bold',
    color: '#24352B',
  },

  description:{
    fontSize: 15,
    lineHeight: 22,
    color: '#68756C',
    marginTop: 8,
  },

  lessons:{
    fontSize: 13,
    color: '#68756C',
    marginTop: 12,
  },

  open:{
    fontSize: 15,
    fontWeight: 'bold',
    color: '#398260',
    marginTop: 16,
  },
});