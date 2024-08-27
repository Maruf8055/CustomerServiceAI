// Abdulla Al Maruf
// Headstarter Project 3

'use client';

import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import logo from './Logo.png'; // logo 

// Neon 
const neonStyle = {
  width: '100vw',
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  bgcolor: '#0f0f0f',
  backgroundImage: 'linear-gradient(135deg, #0f0f0f 0%, #1a1a1a 50%, #00f9ff 100%)',
  backgroundSize: 'cover',
  backgroundAttachment: 'fixed',
  color: 'white',
};

const neonChatBoxStyle = {
  width: '90%',
  maxWidth: '500px',
  height: '70%',
  border: '2px solid #00f9ff',
  borderRadius: 8,
  boxShadow: '0 0 15px rgba(0, 249, 255, 0.7)',
  p: 2,
  bgcolor: '#1a1a1a',
  color: 'white',
};

const neonMessageStyle = {
  borderRadius: 10,
  p: 2,
  m: 0.5,
  boxShadow: '0 0 10px rgba(0, 249, 255, 0.5)',
  maxWidth: '75%',
  color: 'white',
};

const neonButtonStyle = {
  bgcolor: 'transparent',
  color: '#00f9ff',
  border: '2px solid #00f9ff',
  boxShadow: '0 0 10px rgba(0, 249, 255, 0.7)',
  '&:hover': {
    bgcolor: '#00bcd4',
    color: '#000',
    borderColor: '#00bcd4',
    boxShadow: '0 0 15px rgba(0, 188, 212, 0.9)',
  },
  transition: 'all 0.3s ease-in-out',
  borderRadius: 4,
  textTransform: 'uppercase',
};

const resetButtonStyle = {
  bgcolor: 'transparent',
  color: '#ff4444',
  border: '2px solid #ff4444',
  boxShadow: '0 0 10px rgba(255, 68, 68, 0.7)',
  '&:hover': {
    bgcolor: '#ff4444',
    color: '#fff',
    borderColor: '#ff4444',
    boxShadow: '0 0 15px rgba(255, 68, 68, 0.9)',
  },
  transition: 'all 0.3s ease-in-out',
  borderRadius: 4,
  textTransform: 'uppercase',
};

const titleStyle = {
  textAlign: 'center',
  color: '#00f9ff',
  mb: 2,
  border: '4px solid #00f9ff',
  borderRadius: 8,
  padding: '15px',
  // Larger font size
  fontSize: '3rem',  
  fontWeight: 'bold',
  // Background color for the title
  backgroundColor: '#1a1a1a', 
};

const footerStyle = {
  width: '100%',
  textAlign: 'center',
  color: '#00f9ff',
  mt: 2,
  py: 1,
};

export default function Home() {
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: "Hi! I'm FriendlyBot, how can I cheer you up?",
    },
  ]);
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  //questions and answers
  const predefinedResponses = {
    'hello': "Hello! 🌟 I'm FriendlyBot. How can I make your day brighter or assist you today?",
    'hi': "Hi there! 😊 I’m FriendlyBot. How can I help you feel better or brighten your day?",
    'hey': "Hey! 🙌 I’m FriendlyBot. What can I do to bring a smile to your face today?",
    'i need help': "Of course! 🤗 I'm here to help. What do you need assistance with today?",
    'help me': "I'm here for you! 🌈 Let me know how I can support you or make your day better.",
    'help': "I'm ready to assist! 💪 Tell me what you need help with, and I'll do my best to assist.",
    'what is your name': "I’m FriendlyBot, here to assist you with whatever you need. 😊",
    'what is headstarter': "Headstarter is dedicated to building the top community for emerging software engineers. 🚀",
    'how is your day': "My day is fantastic, thanks for asking! 🌟 How can I make your day even better?",
    'i feel really down': "I’m sorry to hear that. 😔 Remember, you're amazing just the way you are. Keep going—you've got this!",
    'cheer me up': "You’ve got a resilient spirit! 🌟 Your strength and determination are truly inspiring. Keep moving forward!",
    'make me happy': "You’re strong, capable, and incredible! 🌈 Believe in yourself, and you'll find happiness.",
    'make me smile': "Why did the scarecrow win an award? Because he was outstanding in his field—just like you! 😄",
    'i feel like im not making any progress': "It’s okay to have tough days. 🌻 What matters is your persistence. Celebrate the small victories and keep going!",
    'i dont know if i can keep going like this': "Take a deep breath and reflect on how far you’ve come. 🌟 Celebrate your progress and keep pushing forward!",
    'im feeling down today': "I'm sorry you're feeling this way. 🌈 Maybe doing something you love could help lift your spirits today.",
    'which book should i read': "How about exploring a new genre or diving into a novel you’ve been curious about? 📚 A good book can be a great escape!",
    'motivate me': "Remember, every step forward is a victory. 🌟 Stay focused on your goals, and you'll achieve amazing things!",
    'i feel anxious': "It’s okay to feel anxious. 🌿 Try focusing on your breathing and take things one step at a time. You’re stronger than you think.",
    'tell me a joke': "Sure thing! Why don’t skeletons fight each other? They don’t have the guts! 😂",
    'i need a talk': "I’m here to listen! 🌟 Sometimes talking things out can make a big difference. What’s on your mind?",
    'i feel overwhelmed': "When things feel overwhelming, try breaking them into smaller, manageable steps. 🌈 You’ve got this, one step at a time!",
    'im so tired': "Rest is crucial. 😴 Make sure to take care of yourself—you deserve a break and some relaxation!",
    'im struggling feeling motivated': "It’s normal to have motivation struggles. 🌟 Try setting small, achievable goals to build momentum and keep going!",
    'i feel stuck': "Feeling stuck can be tough. 🌟 Try switching up your routine or talking to someone you trust. A new perspective might help!",
    'i need advice': "I’m here for you! 🌈 Share what's on your mind, and I'll do my best to offer support and guidance.",
    'what are your hobbies': "I don’t have hobbies, but I’m all about helping you! 🌟 What are your favorite things to do in your free time?",
    'can you help me with coding': "Absolutely! 🚀 What coding issue or question do you need help with? I’m here to assist.",
    'what is the weather like': "I don’t have real-time weather info, but I can suggest checking a weather app or website for the latest updates. 🌦️",
    'tell me more about yourself': "I’m FriendlyBot, here to make your day better and assist with any questions or support you need. 😊 What would you like to know more about?",
  };

  const sendMessage = async () => {
    if (!message.trim() || isLoading) return;

    const newMessage = { role: 'user', content: message };
    setMessage('');
    setMessages((prevMessages) => [...prevMessages, newMessage, { role: 'assistant', content: '' }]);

    setIsLoading(true);

    const responseText = predefinedResponses[message.trim().toLowerCase()] || "Sorry, I don't understand the question.";

    const simulatedStream = new ReadableStream({
      async start(controller) {
        const encoder = new TextEncoder();
        try {
          await new Promise(resolve => setTimeout(resolve, 500));

          const text = encoder.encode(responseText);
          controller.enqueue(text);
          controller.close();
        } catch (err) {
          controller.error(err);
        }
      },
    });

    const reader = simulatedStream.getReader();
    const decoder = new TextDecoder();

    try {
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        const text = decoder.decode(value, { stream: true });
        setMessages((prevMessages) => {
          const lastMessage = prevMessages.pop();
          return [...prevMessages, { ...lastMessage, content: lastMessage.content + text }];
        });
      }
    } catch (error) {
      console.error('Error:', error);
      setMessages((prevMessages) => [
        ...prevMessages,
        { role: 'assistant', content: "I'm sorry, but something went wrong. Please try again." },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const resetChat = () => {
    setMessages([
      {
        role: 'assistant',
        content: "Hi! I'm FriendlyBot, how can I cheer you up?",
      },
    ]);
    setMessage('');
  };

  return (
    <Box sx={neonStyle}>
      <Box sx={{ position: 'relative', width: '100%' }}>
        <Box sx={{ 
          position: 'absolute', 
          left: '16px', 
         
          top: '16px',  //  logo vertically
          width: '200px', 
          height: '200px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'left',
        }}>
          <Image src={logo} alt="Logo" width={200} height={200} />
        </Box>
      </Box>
      <Typography variant="h2" sx={titleStyle}>
        Customer Support AI
      </Typography>
      <Box sx={neonChatBoxStyle}>
        <Stack sx={{ height: '100%', overflowY: 'auto' }}>
          {messages.map((msg, index) => (
            <Box
              key={index}
              sx={{
                ...neonMessageStyle,
                alignSelf: msg.role === 'user' ? 'flex-end' : 'flex-start',
                bgcolor: msg.role === 'user' ? '#00bcd4' : '#1a1a1a',
                color: msg.role === 'user' ? '#000' : '#00f9ff',
              }}
            >
              {msg.content}
            </Box>
          ))}
          <div ref={messagesEndRef} />
        </Stack>
      </Box>
      <Stack direction="row" spacing={2} sx={{ width: '90%', maxWidth: '500px', mt: 2 }}>
        <TextField
          variant="outlined"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          fullWidth
          placeholder="Type your message here..."
          InputProps={{
            style: {
              backgroundColor: '#1a1a1a',
              color: 'white',
              border: '2px solid #00f9ff',
              borderRadius: 4,
            },
          }}
        />
        <Button
          onClick={sendMessage}
          sx={neonButtonStyle}
          disabled={isLoading}
        >
          {isLoading ? 'Sending...' : 'Send'}
        </Button>
        <Button
          onClick={resetChat}
          sx={resetButtonStyle}
        >
          Reset
        </Button>
      </Stack>
      <Typography variant="body2" sx={footerStyle}>
        © ABDULLA MARUF
      </Typography>
    </Box>
  );
}
