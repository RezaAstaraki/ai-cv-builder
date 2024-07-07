"use server";

console.log("some things run server actions");

// import { revalidatePath, revalidateTag } from "next/cache";

const API_KEY = process.env.NEXT_STAPI_API_KEY;

const baseUrl = "http://localhost:1337/api/";

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

const get = async (endpoint: string) => {
  try {
    const res = await fetch(`${baseUrl}${endpoint}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${API_KEY}`,
      },
      // cache: "no-store",
      // next: { tags: ["getUserResumes"] },
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

export const savePersonalInfo = async (id: string, body: FormData | string) => {
  const endpoint = `user-resumes/${id}`;
  const sendingBody =
    typeof body === "string"
      ? body
      : JSON.stringify({ data: Object.fromEntries(body.entries()) });
  // revalidateTag("savePersonalInfo");
  console.log(sendingBody);
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

export const getUserResumes = async (userEmail?: string) => {
  // const endpoint = `user-resumes/?filters[userEmail][$eq]=${userEmail}&fields[0]=documentId&fields[1]=resumeId`;
  const endpoint = `user-resumes/?filters[userEmail][$eq]=${userEmail}`;

  const res = await get(endpoint);
  // revalidateTag("getUserResumes");
  return res;
};

export const getResume = async (documentId: string) => {
  const endpoint = `user-resumes/${documentId}`;
  const res = await get(endpoint);
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
