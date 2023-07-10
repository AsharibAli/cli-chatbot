import "dotenv/config";
import { OpenAI } from "langchain/llms/openai";
const model = new OpenAI({
  openAIApiKey: process.env.OPENAI_API_KEY,
  temperature: 0.9,
});
const res = await model.call(
  "IN SIMPLE TERMS ${How to convert HTML Elements Into react style components?} "
);
console.log(res);
//  "AN ATTRACTIVE HOOK ${What is gerative Ai, let me in simple terms?} "
