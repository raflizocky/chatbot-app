import { NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    // Get the Gemini model
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    // Generate a response
    const result = await model.generateContent(message);
    const response = await result.response;
    const reply = response.text();

    // Return only the reply
    return NextResponse.json({ reply });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      {
        error:
          "Failed to fetch bot response. Please try again later or check the API docs.",
      },
      { status: 500 }
    );
  }
}
