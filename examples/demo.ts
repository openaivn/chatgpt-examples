import dotenv from 'dotenv-safe'
import { oraPromise } from 'ora'

import { ChatGPTAPI } from 'chatgpt'

dotenv.config()

/**
 * Demo CLI for testing basic functionality.
 *
 * ```
 * npx tsx demos/demo.ts
 * ```
 */
async function main() {
  const api = new ChatGPTAPI({
    apiKey: process.env.OPENAI_API_KEY,
    apiBaseUrl: process.env.OPENAI_API_ENDPOINT,
    debug: false
  })

  const prompt =
    'Write a javascript version of bubble sort. Do not include example usage.'

  const res = await oraPromise(api.sendMessage(prompt), {
    text: prompt
  })
  console.log(res.text)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
