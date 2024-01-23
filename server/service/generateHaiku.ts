import {OpenAI} from "openai";
import * as dotenv from "dotenv";
dotenv.config()

const openAiInstance = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // This is the necessary and can be omitted
});
const generateHaikuUsingLLM = async() => {
  const chatCompletion = await openAiInstance.chat.completions.create({
    messages: [{ role: 'user', content: 'Generate a haiku'}],
    model: process.env.OPENAI_MODEL_VERSION || 'gpt-3.5-turbo'

  });
  return chatCompletion?.choices[0]?.message?.content || ""
};

export default generateHaikuUsingLLM