"use client";

import { useState, useEffect } from "react";
import { getTestModels } from "@/lib/api";

export default function Home() {
  const [testModels, setTestModels] = useState([]);

  useEffect(() => {
    async function fetchTestModels() {
      const data = await getTestModels();
      setTestModels(data);
    }
    fetchTestModels();
  }, []);

  return (
    <main>
      <h1>Test Models</h1>
      <ul>
        {testModels.map((model) => (
          <li key={model.id}>
            {model.name}: {model.description}
          </li>
        ))}
      </ul>
    </main>
  );
}
