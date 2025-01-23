"use client";

import useChat from "./useChat";
import ChatMessage from "./ChatMessage";
import ChatInput from "./ChatInput";

const ChatWindow = () => {
    const { messages, input, setInput, handleSend } = useChat();

    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            handleSend();
        }
    };

    return (
        <div className="flex flex-col h-[80vh] max-w-2xl mx-auto mt-8 bg-white rounded-lg shadow-xl overflow-hidden">
            {/* Chat Messages */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
                {messages.map((msg, index) => (
                    <ChatMessage key={index} message={msg} />
                ))}
            </div>

            {/* Input Area */}
            <ChatInput
                input={input}
                setInput={setInput}
                handleSend={handleSend}
                handleKeyPress={handleKeyPress}
            />

            {/* Footer */}
            <footer className="text-center p-4 text-sm text-gray-500 border-t border-gray-200">
                Built with ❤️ by <a href="https://github.com/raflizocky/chatbot-app" className="text-blue-500 hover:underline">Rafli Zocky Leonard</a>
            </footer>
        </div>
    );
};

export default ChatWindow;