const express = require("express");
const router = express.Router();
const Result = require("../models/Result");
const multer = require("multer");
const XLSX = require("xlsx");

// ================= MULTER =================
const storage = multer.memoryStorage();
const upload = multer({ storage });

// ================= GET =================
router.get("/", async (req, res) => {
  const data = await Result.find().sort({ year: -1 });
  res.json(data);
});

// ================= ADD =================
router.post("/", async (req, res) => {
  const newData = new Result(req.body);
  await newData.save();
  res.json({ message: "Added" });
});

// ================= UPDATE =================
router.put("/:id", async (req, res) => {
  await Result.findByIdAndUpdate(req.params.id, req.body);
  res.json({ message: "Updated" });
});

// ================= DELETE =================
router.delete("/:id", async (req, res) => {
  await Result.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
});

// ================= EXCEL UPLOAD =================
router.post("/upload", upload.single("file"), async (req, res) => {
  const workbook = XLSX.read(req.file.buffer);
  const sheet = workbook.Sheets[workbook.SheetNames[0]];
  const data = XLSX.utils.sheet_to_json(sheet);

  const formatted = data.map(row => ({
    year: row.Year,
    class: row.Class,
    appeared: row.Appeared,
    passed: row.Passed,
    first: row["1st"],
    second: row["2nd"],
    third: row["3rd"],
    suppl: row.Suppl,
    fail: row.Fail,
    percent: row["Passing %"],
  }));

  await Result.insertMany(formatted);

  res.json({ message: "Excel Uploaded Successfully" });
});

module.exports = router;