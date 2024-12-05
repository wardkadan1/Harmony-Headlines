const url = `https://api.mediastack.com/v1/news`;
const secretKey = import.meta.env.VITE_SECRET_KEY;

export function getNews() {
  const params = {
    languages: "en",
    countries: "us,il,ae",
    access_key: secretKey,
    keywords: "israel,palestine",
    limit: 10,
  };
  const urlParams = new URLSearchParams(params).toString();
  return fetch(`${url}?${urlParams}`)
    .then((res) => res.json())
    .then((res) => {
      return res;
    });
}

import { GoogleGenerativeAI } from "@google/generative-ai";
const apiKey = import.meta.env.VITE_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

export async function processTitleMood(titles) {
  let prompt = `for each sentence of the following sentences, 
    give a score based on sentiment analysis, ranging from 0 to 10,
    0 being the most friendly, supportive and empathetic, while 10
    is the most aggressive and charged. return only a list of numbers,
    without any further explanations. make sure that the number of scores
    you return match the numbers of sentences. the sentences are: `;
  prompt += JSON.stringify(titles);
  const result = await model.generateContent(prompt);
  const answer = result.response.text();
  return JSON.parse(answer);
}

export async function changeMood(data, mood) {
  const prompt = `I will give you a title, a news story, and a mood number (from 1 to 10). 
  You need to adjust the tone of the title and description based on the mood:
  - Mood 1: Extremely calm, neutral, and reassuring.
  - Mood 10: Very intense, alarming, or even dramatic.
  
  Your task is to transform the title and description to match the specified mood level, while keeping all the important facts intact.
  
  The mood is: ${mood}.
  The title is: ${data.title}.
  The description is: ${data.description}.
  
  Return the new value as an object in this format:
  {
    title: <new updated title here>,
    description: <new updated description here>,
    mood: <new updated mood here>
  }.
  Return ONLY this object, without any additional text or explanations.
  Don't add anything before or after the {} of the object. Don't return markdown.`;

  const result = await model.generateContent(prompt);
  const answer = result.response.text().trim();
  return JSON.parse(answer);
}
