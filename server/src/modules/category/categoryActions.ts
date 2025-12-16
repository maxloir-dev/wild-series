import type { RequestHandler } from "express";

const categories = [
  { id: 1, name: "Comédie" },
  { id: 2, name: "Science-Fiction" },
];

const browse: RequestHandler = (_req, res) => {
  res.json(categories);
};

const read: RequestHandler = (req, res) => {
  const id = Number(req.params.id);
  const category = categories.find((c) => c.id === id);

  if (!category) {
    res.status(404).json({ error: "Category not found" });
    return; // juste arrêter la fonction
  }

  res.json(category);
};

export default { browse, read };


