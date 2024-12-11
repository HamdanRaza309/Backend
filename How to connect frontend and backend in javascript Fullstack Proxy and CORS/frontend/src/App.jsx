import React, { useState } from "react";
import './App.css'
import { useEffect } from "react";
import axios from "axios";

function App() {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    axios.get(`/api/jokes`)
      .then((response) => {
        setJokes(response.data)
      })
      .catch((error) => {
        console.log(error);
      })
  }, [])


  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-300 text-gray-800 flex flex-col items-center py-12 px-6">
      <h1 className="text-5xl font-extrabold text-blue-600 mb-8">
        Hamdan Raza
      </h1>

      <p className="text-xl text-gray-600 mb-10">
        <span className="font-semibold text-green-600">JOKES:</span> {jokes.length}
      </p>

      <div className="space-y-6 w-full max-w-4xl">
        {jokes.map((joke) => (
          <div
            key={joke.id}
            className="bg-white rounded-xl shadow-xl p-6 transform hover:scale-105 transition-transform duration-300 border-t-4 border-blue-500"
          >
            <h3 className="text-2xl font-semibold text-blue-700 mb-2">
              {joke.title}
            </h3>
            <p className="text-gray-700 leading-relaxed">{joke.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
