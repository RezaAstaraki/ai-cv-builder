"use server";

import { revalidateTag } from "next/cache";
import Anthropic from "@anthropic-ai/sdk";

const API_KEY = process.env.NEXT_STAPI_API_KEY;
const baseUrl = process.env.NEXT_PUBLIC_STAPI_BASE_URL;

// const baseUrl = "http://localhost:1337/api/";
// const baseUrl = "https://strapi-base-7f9g.onrender.com/api/";

const post = async (endpoint: string, body: string) => {
  try {
    const res = await fetch(`${baseUrl}${endpoint}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${API_KEY}`,
      },
      body: body,
    });

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const response = await res.json();
    return response;
  } catch (error) {
    console.error("Error adding resume:", error);
    throw error;
  }
};

const put = async (endpoint: string, body: string) => {
  try {
    const res = await fetch(`${baseUrl}${endpoint}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${API_KEY}`,
      },
      body: body,

      // next: { tags: ["savePersonalInfo"] },
    });

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const response = await res.json();
    return response;
  } catch (error) {
    console.error("Error adding resume:", error);
    throw error;
  }
};

export const get = async (endpoint: string) => {
  // await new Promise((resolve) => setTimeout(resolve, 5000));
  try {
    const res = await fetch(`${baseUrl}${endpoint}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${API_KEY}`,
      },
      // cache: "no-store",
      next: { tags: ["getUserResumes", "resumeDelete"] },
    });

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const response = await res.json();

    return response;
  } catch (error) {
    console.error("Error fetching resume:", error);
    throw error;
  }
};

export const deleteRequest = async (endpoint: string) => {
  console.log(`${baseUrl}${endpoint}`);
  try {
    const res = await fetch(`${baseUrl}${endpoint}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${API_KEY}`,
      },
      // cache: "no-store",
      // next: { tags: [""] },
    });

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    const response = await res.json();
    revalidateTag("resumeDelete");
    return response;
  } catch (error) {
    console.error("Error fetching resume:", error);
    throw error;
  }
};

export const getResume = async (documentId: string) => {
  const endpoint = `user-resumes/${documentId}?populate=*`;
  const res = await get(endpoint);
  return res;
};

export const savePersonalInfo = async (id: string, body: FormData | string) => {
  const endpoint = `user-resumes/${id}`;
  const sendingBody =
    typeof body === "string"
      ? body
      : JSON.stringify({ data: Object.fromEntries(body.entries()) });
  // revalidateTag("savePersonalInfo");
  const res = await put(endpoint, sendingBody);
};

export const addResume = async (
  title: string,
  uuid: string,
  userEmail?: string,
  userName?: string | null
) => {
  const endpoint = "user-resumes";
  const data = JSON.stringify({
    data: {
      title: title,
      resumeId: uuid,
      userEmail: userEmail,
      userName: userName,
    },
  });
  const res = await post(endpoint, data);
  return res;
};

export const revalidateDashboard = () => {
  // revalidatePath("/dashboard");
  // revalidateTag("getUserResumes");
  // console.log("revalidate run");
};

export const dummy = () => {
  console.log("dummy");
};

export const getUserResumes = async (userEmail?: string) => {
  // await new Promise((resolve) => setTimeout(resolve, 3000));
  const endpoint = `user-resumes/?filters[userEmail][$eq]=${userEmail}`;
  try {
    const res = await get(endpoint);
    return res;
  } catch (error) {
    console.error("Error fetching user resumes:", error);
    throw error;
  }
};

// const anthropic = new Anthropic();

// export const getAiResponse = async () => {
//   const msg = await anthropic.messages.create({
//     model: "claude-3-5-sonnet-20240620",
//     max_tokens: 1000,
//     temperature: 0,
//     system: "Respond only with short poems.",

//     messages: [
//       {
//         role: "user",
//         content: [
//           {
//             type: "text",
//             text: "Why is the ocean salty?",
//           },
//         ],
//       },
//     ],
//   });
//   console.log(msg);
//   return msg;
// };

// pages/api/openai.js
// import OpenAI from "openai";

// const openai = new OpenAI();

// export const getAiResponse = async () => {
//   try {
//     const completion = await openai.chat.completions.create({
//       messages: [{ role: "system", content: "You are a helpful assistant." }],
//       model: "gpt-3.5-turbo",
//     });
//     console.log(completion.choices[0]);
//     return completion.choices[0];
//   } catch (e: any) {
//     // console.log(
//     //   "***************",
//     //   "\n",
//     //   "\n",
//     //   "e=",
//     //   e,
//     //   "\n",
//     //   "******************"
//     // );
//     return e.error;
//   }
// };

// #########################################################

import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = process.env.GOOGLE_AI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey || "no api key");
const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: "application/json",
};

const AIChatSession = model.startChat({
  generationConfig,
  // safetySettings: Adjust safety settings
  // See https://ai.google.dev/gemini-api/docs/safety-settings
  history: [],
});

export const generateSummeryFromAI = async (prompt: string) => {
  const PROMPT = "";
  // console.log(PROMPT);
  // const result = await AIChatSession.sendMessage(PROMPT);
  const result = await model.generateContent(prompt);
  console.log("***************\n\n\n\n\n*********************");
  console.log(result);
  console.log("***************\n\n\n\n\n*********************");

  console.log(result.response.text());
  console.log("***************\n\n\n\n\n*********************");

  return result.response.text();
};
