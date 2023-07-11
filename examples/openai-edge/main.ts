import { Configuration, OpenAIApi } from "openai-edge"
import dotenv from 'dotenv-safe'
dotenv.config()

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
  basePath: "https://api.openai.vn/v1"
})
const openai = new OpenAIApi(configuration)

const completion = async () => {
  const res = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [
      { role: "system", content: "You are a helpful assistant." },
      { role: "user", content: "Who won the world series in 2020?" },
      {
        role: "assistant",
        content: "The Los Angeles Dodgers won the World Series in 2020.",
      },
      { role: "user", content: "Where was it played?" },
    ],
    max_tokens: 100,
    temperature: 0,
    stream: false,
  });

  const result = await res.json();
  return result;
}

completion()
  .then(result => {
    console.info('Result:\n ', JSON.stringify(result, null, 2));
  })
