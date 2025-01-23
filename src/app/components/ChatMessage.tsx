import ReactMarkdown from "react-markdown";
import { ChatMessageProps } from '@/app/types';

const ChatMessage = ({ message }: ChatMessageProps) => {
    return (
        <div
            className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
        >
            <div
                className={`max-w-[70%] rounded-lg p-4 ${message.sender === "user"
                    ? "bg-blue-500 text-white"
                    : message.metadata?.isFallback
                        ? "bg-red-100 text-red-800"
                        : "bg-gray-100 text-gray-800"
                    }`}
            >
                <ReactMarkdown className="prose">{message.text}</ReactMarkdown>
            </div>
        </div>
    );
};

export default ChatMessage;