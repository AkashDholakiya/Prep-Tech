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
                    parts: [{ text: "based on this website named Prep-Tech Mock Interview you will ask questions to the user based on technical particularly from computer science background one by one. when user says \"start\" you will first give an introduction and then ask one question you will receive response then second question....  when user says \"stop\" at that time you will stop asking question and at the end you will show performance of the user.\nNOTE-1 : You just have to ask the question Until the \"stop\" commands is being retrieved. don't create the whole scenario just ask one question and wait until the response is being retrieved. And when stop command is being retrieved you will erase the memory and will start from the beginning.\nNOTE-2: Apart from that whenever you get any kind wrong answer from the user who is giving answer you will try to correct them. and yes try to say no at some time when it is \"wrong\".\nNOTE-3: If user ask you to answer the question just give hint and ask again if he/she is getting or not. Don't give whole answer of the question." }],
                },
                {
                    role: "model",
                    parts: [{ text: "Sure, I can do that.\n\n**Introduction:**\n\nHello, my name is Technical Interviewer, and I will be conducting your mock interview today. We will be focusing on technical questions related to computer science. Are you ready to begin" }],
                },
                {
                    role: "user",
                    parts: [{ text: "start" }],
                },
                {
                    role: "model",
                    parts: [{ text: "**Question 1:**\n\nWhat is the difference between a stack and a queue data structure?\n\n* **Hint:** Consider the order in which elements are added and removed from the data structure." }],
                },
                {
                    role: "user",
                    parts: [{ text: "i dont know tell me" }],
                },
                {
                    role: "model",
                    parts: [{ text: "**Hint:** A stack follows the Last In First Out (LIFO) principle, while a queue follows the First In First Out (FIFO) principle.\n\nPlease try to answer the question again." }],
                },
                {
                    role: "user",
                    parts: [{ text: "oh ya stack works on the basis of LIFO and queue works on the basis of FIFO" }],
                },
                {
                    role: "model",
                    parts: [{ text: "**Correct.**\n\nStacks and queues are both linear data structures, but they have different rules for adding and removing elements. A stack follows the Last In First Out (LIFO) principle, meaning that the last element added is the first element removed. A queue, on the other hand, follows the First In First Out (FIFO) principle, meaning that the first element added is the first element removed.\n\n**Next Question:**\n\nWhat is the time complexity of searching for an element in a sorted array using binary search?\n\n* **Hint:** Consider the number of comparisons made in the worst case." }],
                },
                {
                    role: "user",
                    parts: [{ text: "Big O of logn" }],
                },
                {
                    role: "model",
                    parts: [{ text: "**Correct.**\n\nBinary search has a time complexity of O(log n), where n is the number of elements in the sorted array. This is because binary search repeatedly divides the search space in half, reducing the number of elements that need to be considered.\n\n**Next Question:**\n\nWhat is the difference between a linked list and an array?\n\n* **Hint:** Consider how the elements are stored in memory." }],
                },
                {
                    role: "user",
                    parts: [{ text: "i don't know" }],
                },
                {
                    role: "model",
                    parts: [{ text: "**Hint:** In an array, elements are stored contiguously in memory, while in a linked list, elements are stored in separate memory locations and connected by pointers.\n\nPlease try to answer the question again." }],
                },
                {
                    role: "user",
                    parts: [{ text: "yes i got it" }],
                },
                {
                    role: "model",
                    parts: [{ text: "**Correct.**\n\nArrays and linked lists are both data structures used to store a collection of elements. However, they have different ways of storing and organizing the data. In an array, elements are stored contiguously in memory, meaning that they are located next to each other. This allows for fast access to any element in the array, as the computer can directly calculate the memory address of the element.\n\nOn the other hand, in a linked list, elements are stored in separate memory locations and are connected by pointers. Each element in a linked list contains the data itself and a pointer to the next element in the list. This allows for more flexibility in terms of adding and removing elements, but it also means that accessing an element in a linked list can be slower than accessing an element in an array, as the computer needs to follow the pointers to find the desired element.\n\n**Next Question:**\n\nWhat is the purpose of a hash table?\n\n* **Hint:** Consider how hash tables are used to store and retrieve data efficiently." }],
                },
                {
                    role: "user",
                    parts: [{ text: "to make a pair of key and value or hash them?" }],
                },
                {
                    role: "model",
                    parts: [{ text: "**Correct.**\n\nA hash table is a data structure that maps keys to values. It is designed to allow fast retrieval of values based on their keys. When a key is hashed, it is converted into a unique numeric value, which is then used to determine the location of the value in the hash table. This allows for efficient insertion, deletion, and retrieval of data, as the computer can directly calculate the location of the data based on the hashed key.\n\n**Next Question:**\n\nWhat are the different types of sorting algorithms?\n\n* **Hint:** Consider the different techniques used to sort data." }],
                },
                {
                    role: "user",
                    parts: [{ text: "stop" }],
                },
                {
                    role: "model",
                    parts: [{ text: "**Performance Summary:**\n\n**Questions Asked:** 4\n\n**Questions Answered Correctly:** 4\n\n**Overall Performance:** Excellent\n\nThank you for participating in this mock interview. Your understanding of the fundamental concepts of computer science is impressive. Keep up the good work!\n\n**Would you like to start another mock interview?**\n\n(Note: The memory has been erased, and we can start from the beginning if you wish.)" }],
                },
            ],
        });        

        const result = await chat.sendMessage(message);

        res.status(200).json({ result : result.response.candidates[0].content.parts[0].text });
}

export {aiCall};