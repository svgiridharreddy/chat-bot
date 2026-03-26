import { useEffect, useRef } from 'react';
import ReactMarkdown from 'react-markdown';

export type Messsage = {
  content: string;
  role: 'user' | 'bot';
};

type Props = {
  messages: Messsage[];
};

const ChatMessages = ({ messages }: Props) => {
  const lastMessageRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    lastMessageRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const onCopyMessage = (e: React.ClipboardEvent) => {
    const selection = window.getSelection()?.toString().trim();
    if (selection) {
      e.preventDefault();
      e.clipboardData.setData('text/plain', selection);
    }
  };

  return (
    <div className="flex flex-col gap-3">
      {messages.map((message, index) => (
        <div
          onCopy={onCopyMessage}
          key={index}
          ref={index === messages.length - 1 ? lastMessageRef : null}
          className={`px-3 py-1 rounded-xl ${
            message.role === 'user'
              ? 'bg-blue-600 text-white self-end mr-10'
              : 'bg-gray-100 text-black self-start'
          }`}
        >
          <ReactMarkdown>{message.content}</ReactMarkdown>
        </div>
      ))}
    </div>
  );
};

export default ChatMessages;
