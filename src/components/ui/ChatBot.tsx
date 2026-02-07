'use client';
import { useEffect } from 'react';
import Script from 'next/script';

interface WindowWithChatbot extends Window {
  chatbotConfig?: {
    botId: string;
  };
}

const ChatBot = () => {
  useEffect(() => {
    // Ensure window object exists
    if (typeof window !== 'undefined') {
      (window as WindowWithChatbot).chatbotConfig = {
        botId: 'ff8022b7-1c5b-49f8-a169-c85eaeea8c25',
      };
    }
  }, []);

  return (
    <>
      <Script
        id="chatbot-config"
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{
          __html: `
            window.chatbotConfig = {
              botId: 'ff8022b7-1c5b-49f8-a169-c85eaeea8c25'
            };
          `,
        }}
      />
      <Script
        src="https://chatlyfy.com/widget/chatbot-widget.js"
        strategy="lazyOnload"
        onLoad={() => {
          console.log('Chatbot script loaded successfully');
        }}
        onError={() => {
          console.error('Failed to load chatbot script');
        }}
      />
    </>
  );
};

export default ChatBot;