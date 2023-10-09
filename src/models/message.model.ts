import { Schema, model, Document } from 'mongoose';

export interface Message extends Document {
  queueName: string;
  message: string;
}

const messageSchema = new Schema<Message>(
  {
    queueName: { type: String, required: true },
    message: { type: String, required: true },
  },
  { timestamps: true },
);
export const MessageModel = model<Message>('Message', messageSchema);
