import ChatWindow from "../app/components/ChatWindow";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      <h1 className="text-4xl font-bold text-center py-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg">
        Chatbot App
      </h1>
      <ChatWindow />
    </div>
  );
}