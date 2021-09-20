import express from "express";
import { middleware as graphbrainz } from "graphbrainz";
import cors from "cors";
import path, { dirname } from "path";
import { fileURLToPath } from "url";
import expressStaticGzip from "express-static-gzip";
const app = express();

app.use(express.json({ limit: "100mb" }));
app.use(express.urlencoded({ extended: false }));
app.use(cors());

//routes
app.use("/graphbrainz", graphbrainz());

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const buildPath = path.join(__dirname, "../../frontEnd/build");

app.use(
  expressStaticGzip(buildPath, {
    enableBrotli: true,
    orderPreference: ["br", "gz"],
  })
);
app.get("*", (req, res) => {
  res.sendFile("index.html", { root: buildPath });
});

app.use(function (err, req, res, next) {
  res.status(500).json({
    status: 500,
    msg: "Something went wrong",
  });
});

export default app;
