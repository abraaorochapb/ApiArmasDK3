import express, { application } from "express";
import weaponRoutes from "./Routes/weaponRoutes.js";
const app = express();
const port = 3000 || process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(weaponRoutes);

app.get("/", (req, res) => {
  res.send("app running");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

console.log(`http://localhost:${port}`);