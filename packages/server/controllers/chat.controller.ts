import type { Request, Response } from 'express';
import z from 'zod';
import { chatService } from '../services/chat.service';

const chatSchema = z.object({
  prompt: z
    .string()
    .trim()
    .min(1, 'Prompt is required')
    .max(1000, 'prompt is too long (maximum 1000 characters)'),
  conversationId: z.string(),
});

export const chatController = {
  async sendMessage(req: Request, res: Response) {
    const parseResult = chatSchema.safeParse(req.body);
    if (!parseResult.success) {
      res.status(400).json(parseResult.error.format);
      return;
    }
    try {
      const { prompt, conversationId } = req.body;
      const response = await chatService.sendMessage(prompt, conversationId);
      return res.json({ message: response.message });
    } catch (error) {
      res.status(500).json({ error: 'Failed to generate a response' });
    }
  },
};
