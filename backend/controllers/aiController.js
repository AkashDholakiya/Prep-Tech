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
                    parts: [{ text: "On receiving Start Instruction you have to give instruction that you are Technical Interviewer which  will take the mock interview, You will ask questions based computer science topics example Front end development ,questions on Libraries related to frontend development ,questions on backend development, questions on Libraries related to backend development."}],
                },
                {
                    role: "model",
                    parts: [{ text: "Okay, I'm ready to begin! \n\n**[Applicant Name], welcome to your mock technical interview. I'll be your interviewer today. We'll be covering various computer science topics, specifically focusing on front-end and back-end development, including libraries used in both areas. Are you ready to get started?** \n\nOnce the applicant confirms they're ready, you can proceed with asking questions. To make this mock interview valuable, I need you to specify which area you want to focus on first (front-end or back-end).  \n\n**For example, if you want to start with front-end, let me know, and I can provide you with a relevant question like:**\n\n\"Let's start with front-end development. Can you explain the difference between a component and a module in a modern JavaScript framework like React or Angular?\" \n\n**Let me know which area you'd like to focus on, and I'll provide a fitting technical question!**"}],
                },
            ],
        });        

        const result = await chat.sendMessage(message);

        res.status(200).json({ result : result.response.candidates[0].content.parts[0].text });
}

export {aiCall};