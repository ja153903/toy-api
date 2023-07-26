import { Router } from "express";

import { BY_ID } from "../constants/routes.mjs";
import { getAccountById } from "./services.mjs";

const router = Router();

router.get(BY_ID, async (req, res) => {
  const { id } = req.params;
  if (!id) {
    res.status(400).json({
      error: "Needs an id parameter",
    });
    return;
  }

  const account = await getAccountById(parseInt(id));
  if (account === null) {
    res.status(404).json({
      error: `Cannot find account with id: ${id}`,
    });
    return;
  }

  res.status(200).json({
    account,
  });
});

export default router;
