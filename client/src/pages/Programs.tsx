import { useEffect, useState } from "react";

type Program = {
  id: number;
  title: string;
};

export default function Programs() {
  const [programs, setPrograms] = useState<Program[]>([]);

  useEffect(() => {
    fetch("http://localhost:3310/api/programs")
      .then((res) => res.json())
      .then((data) => setPrograms(data));
  }, []);

  return (
    <div>
      <h1>Programs</h1>
      <ul>
        {programs.map((p) => (
          <li key={p.id}>{p.title}</li>
        ))}
      </ul>
    </div>
  );
}