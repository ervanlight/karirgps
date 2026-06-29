import { GoogleGenAI } from '@google/genai'
import dotenv from 'dotenv'
dotenv.config({ path: '.env.local' })

async function checkModels() {
  const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY! })
  try {
    let pageToken = undefined;
    do {
      const response = await ai.models.list({ pageToken });
      for (const model of response) {
        console.log(model.name)
      }
      pageToken = response.nextPageToken;
    } while (pageToken);
  } catch (err) {
    console.error(err)
  }
}
checkModels()
