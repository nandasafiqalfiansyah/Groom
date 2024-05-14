import React, { useState, useEffect } from "react";
import { Groq } from "groq-sdk";
import("dotenv").config();

const ApiKey = process.env.API_KEY;

const GroomAiComponent = () => {
  const [code, setCode] = useState("");
  const [input, setInput] = useState("");
  const [generateCode, setGenerateCode] = useState(() => {});

  useEffect(() => {
    const groq = new Groq({
      apiKey: ApiKey,
      dangerouslyAllowBrowser: true,
    });
    const generateCodeAsync = async () => {
      const response = await groq.chat.completions.create({
        messages: [
          {
            role: "user",
            content: input,
          },
        ],
        model: "llama3-8b-8192",
      });
      setCode(response.choices[0].message.content);
    };
    setGenerateCode(() => generateCodeAsync);
  }, []);

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const handleGenerateCode = () => {
    generateCode();
  };

  return (
    <div className="flex flex-col overflow-auto justify-center h-screen bg-gray-100 dark:bg-gray-900 m-20">
      <input
        type="text"
        value={input}
        onChange={handleInputChange}
        className=" p-2 text-lg border border-gray-300 rounded mb-4"
        placeholder="Type your message here..."
        onDragEnterr={handleGenerateCode}
      />
      <button
        className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleGenerateCode}
      >
        Generate Code
      </button>
      <pre className="p-4 bg-gray-200 dark:bg-gray-800 rounded-lg overflow-auto mt-4 text-white">
        {code}
      </pre>
    </div>
  );
};

export default GroomAiComponent;
