import { useEffect } from "react";
import axios from "axios";

export default function App ()  {

  useEffect(() => {
    // Тут будемо виконувати HTTP-запит
  }, []);

  return (
    <div>
      <h1>Latest articles</h1>
    </div>
  );
};
