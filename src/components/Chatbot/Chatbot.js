"use client";
import React, { useEffect, useState } from "react";
import { Portkey } from "portkey-ai";

const Chatbot = () => {
  const [userInput, setUserInput] = useState("");
  const [location, setLocation] = useState(null);
  const [weather, setWeather] = useState(null);

  async function getLocation() {
    const response = await fetch("https://ipapi.co/json/");
    const locationData = await response.json();
    setLocation(locationData);
    getCurrentWeather(locationData.latitude, locationData.longitude)
  }
  useEffect(() => {
    getLocation();
   
  }, [])
  

  async function getCurrentWeather(latitude, longitude) {
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=["temperature_2m", "is_day", "rain", "weather_code"]`;
    const response = await fetch(url);
    const weatherData = await response.json();
    console.log("🚀 ~ file: Chatbot.js:26 ~ getCurrentWeather ~ weatherData:", weatherData)
    setWeather(weatherData);
  }

  //   const portkey = new Portkey({
  //     mode: "single",
  //     llms: [
  //       {
  //         provider: "openai",
  //         virtual_key: "portkey-welcome-b61cc9", //process.env.PORTKEY_API_KEY ||
  //         api_key: "l6IBgIc5Vwr7okKgmuE+0Q+hh+g=", //process.env.PORTKEY_API_KEY ||
  //         model: "gpt-3.5-turbo",
  //         temperature: 0,
  //       },
  //     ],
  //   });

  const portkeyAction = () => {

    const requestData = {
      prompt: `You are a helpful assistant & a personal fitness trainer. user will give you some general idea what they want to do, and you have their location & current weather around them, you can also suggest some activitis outside for example go for a walk if its not raning or its not mid night you have to provide a solution to so they reach their fitness goals. also you can also recommend nearby gyms, fitness centers etc. \n user input = ${userInput}. give me the response in well formated html \n user location = ${location} & weather = ${weather}`,
      model: "text-davinci-003",
      stop_sequences: ["\n\nHuman:"],
      messages: [
        {
          role: "system",
          content: `You are a helpful assistant & a personal fitness trainer. user will give you some general idea what they want to do, and you have their location & current weather around them, you can also suggest some activitis outside for example go for a walk if its not raning or its not mid night you have to provide a solution to so they reach their fitness goals. also you can also recommend nearby gyms, fitness centers etc.`,
        },
        {
          role: "user",
          content: `${userInput}. give me the response in well formated html \n user location = ${location} & weather = ${weather} `,
        },
      ],
      
    };
    fetch("https://api.portkey.ai/v1/proxy/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-portkey-api-key": process.env.PORTKEY_API_KEY,
        "x-portkey-mode": "proxy openai",
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify(requestData),
    })
      .then((response) => response.json())
      .then((data) => console.log(data, "Response data"))
      .catch((error) => console.error("Error:", error));
  };

  

  return <div>
    <textarea onChange={(e)=>setUserInput(e.target.value)}>

    </textarea>
    <button onClick={portkeyAction}>Submit</button>
  </div>;
};

export default Chatbot;
