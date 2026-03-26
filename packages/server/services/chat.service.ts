import fs from 'fs';
import path from 'path';
import OpenAI from 'openai';
import { conversationRepository } from '../repositories/conversations.repository';
import template from '../prompts/chatbot.txt';

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

type ChatResponse = {
  id: string;
  message: string;
};

const parkInfo = fs.readFileSync(
  path.join(__dirname, '..', 'prompts', 'WonderWorld.md'),
  'utf-8'
);
const instructions = template.replace('{{parkInfo}}', parkInfo);

export const chatService = {
  async sendMessage(
    prompt: string,
    conversationId: string
  ): Promise<ChatResponse> {
    try {
      console.log(' **** In chat service');
      // const response = await client.responses.create({
      //   model: 'gpt-4o-mini',
      //   instructions,
      //   input: prompt,
      //   temperature: 0.2,
      //   max_output_tokens: 100,
      //   previous_response_id:
      //     conversationRepository.getLastConversationId(conversationId),
      // });
      // conversationRepository.setLastConversationId(conversationId, response.id);
      await new Promise((resolve) => setTimeout(resolve, 1000));
      const response = conversationRepository.getRandomDummyResponse();
      console.log('======= Response is ', response);
      return { id: response?.id ?? '', message: response?.output_text ?? '' };
    } catch (error) {
      const err = error;
      console.log('err in connecting to LLM', err);
      return { id: '', message: 'Something went wrong' };
    }
  },
};
