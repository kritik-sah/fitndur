"use client";
import React, { useEffect } from "react";

import OpenAI from "openai";

const Chat = () => {
  const openai = new OpenAI({
    apiKey: "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", //process.env.OPENAI_API_KEY,
    dangerouslyAllowBrowser: true,
  });

  async function getLocation() {
    const response = await fetch("https://ipapi.co/json/");
    const locationData = await response.json();
    return locationData;
  }

  async function getCurrentWeather(latitude, longitude) {
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=apparent_temperature`;
    const response = await fetch(url);
    const weatherData = await response.json();
    return weatherData;
  }

  const functionDefinitions = [
    {
      name: "getCurrentWeather",
      description:
        "Get the current weather in a given location given in latitude and longitude",
      parameters: {
        type: "object",
        properties: {
          latitude: {
            type: "string",
          },
          longitude: {
            type: "string",
          },
        },
        required: ["longitude", "latitude"],
      },
    },
    {
      name: "getLocation",
      description: "Get the user's location based on their IP address",
      parameters: {
        type: "object",
        properties: {},
      },
    },
  ];

  const availableFunctions = {
    getCurrentWeather,
    getLocation,
  };

  const messages = [
    {
      role: "system",
      content: `You are a helpful assistant & a personal fitness trainer. user will give you some general idea what they want to do, and you have their location & current weather around them, you can also suggest some activitis outside for example go for a walk if its not raning or its not mid night you have to provide a solution to so they reach their fitness goals. also you can also recommend nearby gyms, fitness centers etc.`,
    },
  ];

  const agent = async (userInput) => {
    messages.push({
      role: "user",
      content: userInput,
    });

    for (let i = 0; i < 1; i++) {
      const response = await openai?.chat?.completions?.create({
        model: "gpt-3.5-turbo",
        messages: messages,
        functions: functionDefinitions,
      });

      const { finish_reason, message } = response.choices[0];

      if (finish_reason === "function_call") {
        const functionName = message.function_call.name;
        const functionToCall = availableFunctions[functionName];
        const functionArgs = JSON.parse(message.function_call.arguments);
        const functionArgsArr = Object.values(functionArgs);
        const functionResponse = await functionToCall.apply(
          null,
          functionArgsArr
        );

        messages.push({
          role: "function",
          name: functionName,
          content: `
                      The result of the last function was this: ${JSON.stringify(
                        functionResponse
                      )}
                      `,
        });
      } else if (finish_reason === "stop") {
        messages.push(message);
        return message.content;
      }
    }
    return "The maximum number of iterations has been met without a suitable answer. Please try again with a more specific input.";
  }

  const response = async (userQuery) => {
    let data = await agent(
      `${userQuery} give me the response in well formated html`
    );
    console.log("response:", data);
  };

  useEffect(() => {
    response(
      "Please suggest some activities based on my location and the weather."
    );
  }, []);

  return <div>AI Chat app</div>;
};

export default Chat;
