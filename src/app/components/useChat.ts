import { useState, useEffect } from "react";
import { Message } from "@/app/types";

const useChat = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState<string>("");

  useEffect(() => {
    setMessages([{ text: "Hi, ask me something.", sender: "bot" }]);
  }, []);

  const handleSend = async () => {
    if (input.trim()) {
      const userMessage: Message = { text: input, sender: "user" };
      setMessages([...messages, userMessage]);
      setInput("");

      try {
        const response = await fetch("/api/chat", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ message: input }),
        });
        const data = await response.json();

        if (data.error) {
          setMessages((prev) => [
            ...prev,
            {
              text: data.error,
              sender: "bot",
              metadata: { isFallback: true },
            },
          ]);
        } else {
          // Show the actual response
          setMessages((prev) => [...prev, { text: data.reply, sender: "bot" }]);
        }
      } catch (error) {
        console.error(error);
        setMessages((prev) => [
          ...prev,
          {
            text: "Failed to fetch bot response. Please try again later or check the API docs.",
            sender: "bot",
            metadata: { isFallback: true },
          },
        ]);
      }
    }
  };

  return {
    messages,
    input,
    setInput,
    handleSend,
  };
};

export default useChat;
