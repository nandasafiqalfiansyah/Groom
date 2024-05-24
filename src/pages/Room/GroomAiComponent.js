import React, { useState, useEffect } from "react";
import { Groq } from "groq-sdk";
import { motion } from "framer-motion";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/esm/styles/prism";

const GroomAiComponent = () => {
  const [code, setCode] = useState("");
  const [input, setInput] = useState("");
  const [generateCode, setGenerateCode] = useState(() => {});

  useEffect(() => {
    const groq = new Groq({
      apiKey: process.env.REACT_APP_API_KEY,
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
  }, [input]);

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const handleGenerateCode = () => {
    generateCode();
  };

  return (
    <div className="flex flex-col gap-4 bg-gray-500">
      <div className="col-span-2 gap-2 p-8">
        <input
          type="text"
          value={input}
          onChange={handleInputChange}
          className="w-full p-2 border border-gray-300 rounded-md"
          placeholder="Type your message here..."
        />
        <button
          type="button"
          onClick={handleGenerateCode}
          className="w-full pt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md"
        >
          Generate Code
        </button>
      </div>
      <div className="h-full overflow-auto border border-gray-300 rounded-md p-2">
        <SyntaxHighlighter
          language="javascript"
          style={darcula}
          className="w-full"
        >
          {code}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

export default GroomAiComponent;
