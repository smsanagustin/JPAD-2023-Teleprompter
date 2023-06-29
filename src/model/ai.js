import { useState } from 'react';

const useAI = () => {
  const [response, setResponse] = useState({ finish_reason: '', message: '' });

  const rewrite = async (input, instruction) => {
    try {
      const result = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer YOUR_API_KEY`,
        },
        body: JSON.stringify({
          model: 'gpt-3.5-turbo',
          messages: [
            { role: 'system', content: instruction },
            { role: 'user', content: input },
          ],
        }),
      });
      const data = await result.json();
      setResponse(data);
    } catch (error) {
      console.error(error);
    }
  };

  return [response, rewrite];
};

export default useAI;