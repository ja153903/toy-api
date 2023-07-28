import { Router } from "express";

import { CREATE } from "../constants/routes.mjs";
import { addTodo } from "./services.mjs";

const router = Router();

router.post(CREATE, async (req, res) => {
  const body = req.body;
  if (!body) {
    res.status(400).json({
      error: "The payload does not contain the right values",
    });
    return;
  }

  const todo = await addTodo(body);
  if (todo === null) {
    res.status(400).json({
      error: "Could not create todo",
    });
    return;
  }

  res.status(200).json({
    todo,
  });
});

export default router;
