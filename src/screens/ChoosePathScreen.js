import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

export default function ChoosePathScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={styles.backButton}>← Back</Text>
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Choose Path</Text>
          <View style={styles.placeholder} />
        </View>

        {/* Subtitle */}
        <Text style={styles.subtitle}>How would you like to start?</Text>

        {/* Solo Mode Card */}
        <View style={styles.card}>
          <Text style={styles.cardEmoji}>😌</Text>
          <Text style={styles.cardTitle}>Solo Mode</Text>
          <Text style={styles.cardDescription}>
            Use Focus Timer & Tasks for personal productivity.
          </Text>
          <TouchableOpacity 
            style={styles.soloButton}
            onPress={() => navigation.navigate('Home')}
          >
            <Text style={styles.soloButtonText}>Start Free</Text>
          </TouchableOpacity>
        </View>

        {/* Student Card */}
        <View style={styles.card}>
          <Text style={styles.cardEmoji}>👥</Text>
          <Text style={styles.cardTitle}>I Have a Mentor PIN</Text>
          <Text style={styles.cardDescription}>
            Connect with a mentor using their 6-digit PIN.
          </Text>
          <TouchableOpacity 
            style={styles.studentButton}
            onPress={() => navigation.navigate('EnterPIN')}
          >
            <Text style={styles.studentButtonText}>Enter PIN - #350/mo</Text>
          </TouchableOpacity>
        </View>

        {/* Mentor Card */}
        <View style={[styles.card, styles.lastCard]}>
          <Text style={styles.cardEmoji}>🧑‍🏫</Text>
          <Text style={styles.cardTitle}>I Want to Be a Mentor</Text>
          <Text style={styles.cardDescription}>
            Mentor students, assign tasks, and track progress.
          </Text>
          <TouchableOpacity 
            style={styles.mentorButton}
            onPress={() => navigation.navigate('MentorSubscribe')}
          >
            <Text style={styles.mentorButtonText}>Become Mentor - #1,000/mo</Text>
          </TouchableOpacity>
        </View>

        {/* Maybe Later */}
        <TouchableOpacity 
          style={styles.maybeLater}
          onPress={() => navigation.navigate('Home')}
        >
          <Text style={styles.maybeLaterText}>Maybe Later</Text>
        </TouchableOpacity>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    paddingTop: 20,
    paddingBottom: 16,
  },
  backButton: {
    fontSize: 18,
    color: '#7C3AED',
    fontWeight: '500',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#1A1A1A',
  },
  placeholder: {
    width: 50,
  },
  subtitle: {
    fontSize: 16,
    color: '#6B7280',
    paddingHorizontal: 24,
    marginBottom: 24,
  },
  card: {
    backgroundColor: '#F9FAFB',
    borderRadius: 20,
    padding: 24,
    marginHorizontal: 24,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  lastCard: {
    marginBottom: 24,
  },
  cardEmoji: {
    fontSize: 40,
    marginBottom: 16,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#1A1A1A',
    marginBottom: 8,
  },
  cardDescription: {
    fontSize: 14,
    color: '#6B7280',
    marginBottom: 20,
    lineHeight: 20,
  },
  soloButton: {
    backgroundColor: '#F3F4F6',
    paddingVertical: 12,
    borderRadius: 12,
    alignItems: 'center',
  },
  soloButtonText: {
    color: '#374151',
    fontSize: 16,
    fontWeight: '600',
  },
  studentButton: {
    backgroundColor: 'transparent',
    paddingVertical: 12,
    borderRadius: 12,
    alignItems: 'center',
    borderWidth: 1.5,
    borderColor: '#7C3AED',
  },
  studentButtonText: {
    color: '#7C3AED',
    fontSize: 16,
    fontWeight: '600',
  },
  mentorButton: {
    backgroundColor: 'transparent',
    paddingVertical: 12,
    borderRadius: 12,
    alignItems: 'center',
    borderWidth: 1.5,
    borderColor: '#7C3AED',
  },
  mentorButtonText: {
    color: '#7C3AED',
    fontSize: 16,
    fontWeight: '600',
  },
  maybeLater: {
    alignItems: 'center',
    paddingVertical: 20,
  },
  maybeLaterText: {
    color: '#9CA3AF',
    fontSize: 16,
    fontWeight: '500',
  },
});