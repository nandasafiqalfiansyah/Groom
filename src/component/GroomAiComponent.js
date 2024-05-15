import React, { useState, useEffect } from "react";
import { Groq } from "groq-sdk";
import { motion } from "framer-motion";

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
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      className="flex flex-col h-screen bg-gray-100 dark:bg-gray-900"
    >
      <div className="flex-1 p-4">
        <div className="flex justify-end mb-2">
          <input
            type="text"
            value={input}
            onChange={handleInputChange}
            className="p-2 text-lg border border-gray-300 rounded"
            placeholder="Type your message here..."
          />
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 ml-2 rounded"
            onClick={handleGenerateCode}
          >
            Generate Code
          </motion.button>
        </div>
        <div className="flex flex-col-reverse">
          {code && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-4 bg-gray-200 dark:bg-gray-800 rounded-lg text-white"
            >
              {code}
            </motion.div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default GroomAiComponent;
