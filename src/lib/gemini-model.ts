import { google } from "@ai-sdk/google";

export const geminiModel = google("models/gemini-1.5-flash-001", {
  // safetySettings: [
  //   {
  //     category: "HARM_CATEGORY_DANGEROUS_CONTENT",
  //     threshold: "BLOCK_NONE",
  //   },
  //   {
  //     category: "HARM_CATEGORY_HARASSMENT",
  //     threshold: "BLOCK_NONE",
  //   },
  //   {
  //     category: "HARM_CATEGORY_HATE_SPEECH",
  //     threshold: "BLOCK_NONE",
  //   },
  //   {
  //     category: "HARM_CATEGORY_SEXUALLY_EXPLICIT",
  //     threshold: "BLOCK_NONE",
  //   },
  // ],
});
