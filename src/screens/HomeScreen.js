import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from 'react-native';

export default function HomeScreen({ navigation }) {
  const [tasks, setTasks] = useState([
    { id: '1', title: 'Study Math', category: 'Study', duration: '45m', subtasks: '3/4', mentor: 'Bola', completed: false },
    { id: '2', title: 'Read Chapter 4', category: 'Reading', duration: '30m', subtasks: '0/0', mentor: 'Personal', completed: false },
    { id: '3', title: 'Morning Review', category: 'Assignment', duration: '15m', subtasks: '0/0', mentor: 'Personal', completed: true },
    { id: '4', title: 'Attend Class', category: 'Project', duration: '60m', subtasks: '0/0', mentor: 'Personal', completed: true },
  ]);
  const [newTask, setNewTask] = useState('');
  const [activeTab, setActiveTab] = useState('Student');

  const categoryColors = {
    Study: '#2563EB',
    Assignment: '#16A34A',
    Reading: '#CA8A04',
    ExamPrep: '#DC2626',
    Project: '#7C3AED',
    Personal: '#9CA3AF',
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const addTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, {
        id: Date.now().toString(),
        title: newTask,
        category: 'Personal',
        duration: '30m',
        subtasks: '0/0',
        mentor: 'Personal',
        completed: false,
      }]);
      setNewTask('');
    }
  };

  const incompleteTasks = tasks.filter(t => !t.completed);
  const completedTasks = tasks.filter(t => t.completed);

  return (
    <SafeAreaView style={styles.container}>
      
      {/* Role Toggle */}
      <View style={styles.roleToggle}>
        <TouchableOpacity 
          style={[styles.roleButton, activeTab === 'Student' && styles.roleButtonActive]}
          onPress={() => setActiveTab('Student')}
        >
          <Text style={[styles.roleText, activeTab === 'Student' && styles.roleTextActive]}>
            Student
          </Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.roleButton, activeTab === 'Mentor' && styles.roleButtonActive]}
          onPress={() => setActiveTab('Mentor')}
        >
          <Text style={[styles.roleText, activeTab === 'Mentor' && styles.roleTextActive]}>
            Mentor
          </Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.content}>
        
        {/* Date Header */}
        <Text style={styles.dateHeader}>📅 Today - Mon, Apr 14</Text>

        {/* In Progress Section */}
        <Text style={styles.sectionTitle}>IN PROGRESS ({incompleteTasks.length})</Text>
        
        {incompleteTasks.map(task => (
          <View key={task.id} style={styles.taskItem}>
            <TouchableOpacity onPress={() => toggleTask(task.id)}>
              <View style={styles.checkbox} />
            </TouchableOpacity>
            <View style={styles.taskContent}>
              <Text style={styles.taskTitle}>{task.title}</Text>
              <View style={styles.taskMeta}>
                <View style={styles.category}>
                  <View style={[styles.categoryDot, { backgroundColor: categoryColors[task.category] }]} />
                  <Text style={styles.categoryText}>{task.category}</Text>
                </View>
                <Text style={styles.metaText}>⏱️ {task.duration}</Text>
                <Text style={styles.metaText}>📋 {task.subtasks}</Text>
                <Text style={styles.metaText}>👤 {task.mentor}</Text>
              </View>
            </View>
          </View>
        ))}

        {/* Completed Section */}
        {completedTasks.length > 0 && (
          <>
            <Text style={[styles.sectionTitle, styles.completedHeader]}>
              COMPLETED ({completedTasks.length})
            </Text>
            
            {completedTasks.map(task => (
              <View key={task.id} style={styles.taskItem}>
                <TouchableOpacity onPress={() => toggleTask(task.id)}>
                  <View style={[styles.checkbox, styles.checkboxChecked]}>
                    <Text style={styles.checkmark}>✓</Text>
                  </View>
                </TouchableOpacity>
                <View style={styles.taskContent}>
                  <Text style={[styles.taskTitle, styles.taskCompleted]}>{task.title}</Text>
                  <View style={styles.taskMeta}>
                    <View style={styles.category}>
                      <View style={[styles.categoryDot, { backgroundColor: categoryColors[task.category] }]} />
                      <Text style={styles.categoryText}>{task.category}</Text>
                    </View>
                    <Text style={styles.metaText}>⏱️ {task.duration}</Text>
                  </View>
                </View>
              </View>
            ))}
          </>
        )}

      </ScrollView>

      {/* Add Task Input */}
      <View style={styles.addTaskContainer}>
        <TextInput
          style={styles.addTaskInput}
          placeholder="+ Add a task..."
          placeholderTextColor="#9CA3AF"
          value={newTask}
          onChangeText={setNewTask}
          onSubmitEditing={addTask}
        />
      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  roleToggle: {
    flexDirection: 'row',
    backgroundColor: '#F3F4F6',
    marginHorizontal: 16,
    marginTop: 12,
    marginBottom: 8,
    padding: 4,
    borderRadius: 30,
  },
  roleButton: {
    flex: 1,
    paddingVertical: 10,
    borderRadius: 30,
    alignItems: 'center',
  },
  roleButtonActive: {
    backgroundColor: '#FFFFFF',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  roleText: {
    fontSize: 15,
    fontWeight: '500',
    color: '#9CA3AF',
  },
  roleTextActive: {
    color: '#7C3AED',
  },
  content: {
    flex: 1,
    paddingHorizontal: 16,
  },
  dateHeader: {
    fontSize: 22,
    fontWeight: '700',
    color: '#1A1A1A',
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 12,
    fontWeight: '600',
    color: '#9CA3AF',
    letterSpacing: 0.5,
    marginBottom: 12,
  },
  completedHeader: {
    marginTop: 24,
  },
  taskItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  checkbox: {
    width: 22,
    height: 22,
    borderWidth: 2,
    borderColor: '#D1D5DB',
    borderRadius: 6,
    marginRight: 12,
    marginTop: 2,
  },
  checkboxChecked: {
    backgroundColor: '#16A34A',
    borderColor: '#16A34A',
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkmark: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '700',
  },
  taskContent: {
    flex: 1,
  },
  taskTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#1A1A1A',
    marginBottom: 6,
  },
  taskCompleted: {
    textDecorationLine: 'line-through',
    color: '#9CA3AF',
  },
  taskMeta: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: 12,
  },
  category: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  categoryDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginRight: 4,
  },
  categoryText: {
    fontSize: 13,
    color: '#6B7280',
  },
  metaText: {
    fontSize: 13,
    color: '#6B7280',
  },
  addTaskContainer: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderTopWidth: 1,
    borderTopColor: '#F0F0F0',
  },
  addTaskInput: {
    backgroundColor: '#F9FAFB',
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderStyle: 'dashed',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 14,
    fontSize: 16,
    color: '#1A1A1A',
  },
});