export interface Message {
  text: string;
  sender: "user" | "bot";
  metadata?: {
    isFallback?: boolean;
  };
}

export interface ChatInputProps {
  input: string;
  setInput: (value: string) => void;
  handleSend: () => void;
  handleKeyPress: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

export interface ChatMessageProps {
  message: Message;
}

export interface ChatRequest {
  message: string;
}

export interface ChatResponse {
  reply?: string;
  error?: string;
}
