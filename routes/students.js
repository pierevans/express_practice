import express from "express";

const router = express.Router();

router.get("/all", (req, res) => res.send("All students"));
router.post("/create", (req, res) => res.send("Create new student"));
router.put("/update", (req, res) => res.send("Update new student"));
router.get("/delete", (req, res) => res.send("Remove student"));

export default router;
