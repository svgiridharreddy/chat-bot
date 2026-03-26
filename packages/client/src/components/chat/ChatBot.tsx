import axios from 'axios';
import { useRef, useState } from 'react';
import TypingIndicator from './TypingIndicator';
import type { Messsage } from './ChatMessages';
import ChatMessages from './ChatMessages';
import ChatInput, { type ChatFormData } from './ChatInput';

type ChatResponse = {
  id: string;
  message: string;
};

const ChatBot = () => {
  const [messages, setMessages] = useState<Messsage[]>([]);
  const [isBotTyping, setIsBotTyping] = useState(false);
  const [error, setError] = useState('');
  // const conversationId = useRef(crypto.randomUUID());
  const conversationId = useRef(Math.floor(Math.random() * 20) + 1);

  const onSubmit = async ({ prompt }: ChatFormData) => {
    try {
      setMessages((prev) => [...prev, { content: prompt, role: 'user' }]);
      setIsBotTyping(true);
      setError('');
      const { data } = await axios.post<ChatResponse>('/api/chat', {
        prompt,
        conversationId: `${conversationId.current}`,
      });
      setMessages((prev) => [...prev, { content: data.message, role: 'bot' }]);
    } catch (error) {
      console.log(error);
      setError('Something went wrong!');
    } finally {
      setIsBotTyping(false);
    }
  };

  return (
    <div className="ml-10 flex flex-col h-full">
      <div className="flex flex-col flex-1 gap-3 overflow-y-auto">
        <ChatMessages messages={messages} />
        {isBotTyping && <TypingIndicator />}
        {error && <p className="text-red-500">{error}</p>}
      </div>

      <ChatInput onSubmit={onSubmit} />
    </div>
  );
};

export default ChatBot;
