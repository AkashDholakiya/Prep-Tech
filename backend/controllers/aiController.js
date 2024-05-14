// node --version # Should be >= 18
// npm install @google/generative-ai
import dotenv from 'dotenv';
import { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } from "@google/generative-ai";
dotenv.config();


const aiCall = async (req, res) => {
    const { message } = req.body;  

    const MODEL_NAME = "gemini-1.0-pro";
    const API_KEY = process.env.GEMINI_API;
    const genAI = new GoogleGenerativeAI(API_KEY);
    const model = genAI.getGenerativeModel({ model: MODEL_NAME });

        const generationConfig = {
            temperature: 0.9,
            topK: 1,  
            topP: 1,
            maxOutputTokens: 2048,
        };

        const safetySettings = [
            {
                category: HarmCategory.HARM_CATEGORY_HARASSMENT,
                threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
            },
            {
                category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
                threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
            },
            {
                category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
                threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
            },
            {
                category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
                threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
            },
        ];

        const chat = model.startChat({
            generationConfig,
            safetySettings,
            history: [
                {
                    role: "user",
                    parts: [{ text: "You have to be a technical Interviewer and take mock interview where you have to ask questions related to basic computer science concepts and basic questions related to front end back end , machine learning, data science, postgre sql ,databases. You will begin the Interview once the user says Begin."}],
                  },
                  {
                    role: "model",
                    parts: [{ text: "Okay, I'm ready to begin the interview. Please let me know when you're ready by saying \"Begin\". I will then proceed to ask you a series of questions, tailoring them to your responses and interests. \n\nI'm looking forward to learning more about your technical skills and experience!"}],
                  },
                  {
                    role: "user",
                    parts: [{ text: "Begin"}],
                  },
                  {
                    role: "model",
                    parts: [{ text: "Alright, let's begin! \n\nFirst, tell me a little bit about yourself and your technical background. What are some areas of computer science you're most passionate about and why?"}],
                  },
                  {
                    role: "user",
                    parts: [{ text: "I am an aspiring front end developer , I have keen interest in Data Science and Artificial Intelligence"}],
                  },
                  {
                    role: "model",
                    parts: [{ text: "Excellent, It's great to hear about your passion for front-end development, data science, and AI. \n\nLet's start with some front-end development questions.\n\n1. *Can you describe the difference between HTML, CSS, and JavaScript? What role does each play in building a website?*\n\nWe can then move on to exploring your interests in Data Science and AI. Does that sound good?"}],
                  },
                  {
                    role: "user",
                    parts: [{ text: "You have to ask only one question at a time after the user has answered the question"}],
                  },
                  {
                    role: "model",
                    parts: [{ text: "Okay, I understand.\n\nCan you describe the difference between HTML, CSS, and JavaScript? What role does each play in building a website?"}],
                  },
                  // {
                  //   role: "user",
                  //   parts: [{ text: "html is the skeleton of a website CSS is the styling done in a website and Javascript is the brain of a website"}],
                  // },
                  // {
                  //   role: "model",
                  //   parts: [{ text: "That's a great analogy! You're right, HTML provides the basic structure, CSS styles the look and feel, and JavaScript adds interactivity and dynamic behavior.\n\nNow, let's dive a bit deeper into CSS. Can you explain the difference between inline, internal, and external CSS?  Which method do you prefer and why?"}],
                  // },
                  // {
                  //   role: "user",
                  //   parts: [{ text: "Do not include asterix in your responses when you are conducting the Interview"}],
                  // },
                  // {
                  //   role: "model",
                  //   parts: [{ text: "Noted. \n\nCan you explain the difference between inline, internal, and external CSS?  Which method do you prefer and why? \n\nI will refrain from using asterisks in my responses."}],
                  // },
            ],
        });        

        const result = await chat.sendMessage(message);

        res.status(200).json({ result : result.response.candidates[0].content.parts[0].text });
}

export {aiCall};