import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Send } from 'lucide-react-native';
import { format } from 'date-fns';
import axios from 'axios';

type Message = {
  id: string;
  content: string;
  timestamp: Date;
  type: 'user' | 'bot';
  status: 'sent' | 'delivered' | 'error';
};

export default function ChatScreen() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const sendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputMessage,
      timestamp: new Date(),
      type: 'user',
      status: 'sent',
    };

    try {
      setIsLoading(true);
      setMessages(prev => [...prev, userMessage]);
      setInputMessage('');

      const response = await axios.post('http://localhost:11434/api/generate', {
        model: 'deepseek-r1:7b',
        prompt: inputMessage,
        stream: false,
      });

      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: response.data.response,
        timestamp: new Date(),
        type: 'bot',
        status: 'delivered',
      };

      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error('Error sending message:', error);
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: 'Sorry, I encountered an error. Please try again.',
        timestamp: new Date(),
        type: 'bot',
        status: 'error',
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const renderMessage = ({ item }: { item: Message }) => (
    <View
      style={[
        styles.messageContainer,
        item.type === 'user' ? styles.userMessage : styles.botMessage,
      ]}>
      <Text style={[
        styles.messageText,
        item.type === 'bot' && styles.botMessageText
      ]}>{item.content}</Text>
      <Text style={[
        styles.timestamp,
        item.type === 'bot' && styles.botTimestamp
      ]}>
        {format(item.timestamp, 'HH:mm')}
      </Text>
      {item.status === 'error' && (
        <Text style={styles.errorText}>Error sending message</Text>
      )}
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Chat Assistant</Text>
      </View>
      <FlatList
        data={messages}
        renderItem={renderMessage}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.messagesList}
        inverted={false}
      />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={inputMessage}
          onChangeText={setInputMessage}
          placeholder="Type a message..."
          multiline
        />
        <TouchableOpacity
          style={styles.sendButton}
          onPress={sendMessage}
          disabled={isLoading || !inputMessage.trim()}>
          {isLoading ? (
            <ActivityIndicator color="#fff" />
          ) : (
            <Send size={20} color="#fff" />
          )}
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    padding: 16,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#e5e5e5',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#0f172a',
  },
  messagesList: {
    padding: 16,
  },
  messageContainer: {
    maxWidth: '80%',
    padding: 12,
    borderRadius: 16,
    marginBottom: 8,
  },
  userMessage: {
    backgroundColor: '#0891b2',
    alignSelf: 'flex-end',
  },
  botMessage: {
    backgroundColor: '#fff',
    alignSelf: 'flex-start',
  },
  messageText: {
    fontSize: 16,
    color: '#fff',
  },
  botMessageText: {
    color: '#0f172a',
  },
  timestamp: {
    fontSize: 12,
    color: 'rgba(255, 255, 255, 0.7)',
    marginTop: 4,
  },
  botTimestamp: {
    color: 'rgba(15, 23, 42, 0.5)',
  },
  errorText: {
    color: '#ef4444',
    fontSize: 12,
    marginTop: 4,
  },
  inputContainer: {
    flexDirection: 'row',
    padding: 16,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#e5e5e5',
  },
  input: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    borderRadius: 24,
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginRight: 8,
    fontSize: 16,
    maxHeight: 100,
  },
  sendButton: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#0891b2',
    justifyContent: 'center',
    alignItems: 'center',
  },
});