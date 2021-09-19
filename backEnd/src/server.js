import app from "./app.js";

const PORT = process.env.PORT || 5000;
const NODE_ENV = process.env.NODE_ENV;

app.listen(PORT, () => {
  console.log(`Server is listening on Port ${PORT} in ${NODE_ENV} mode`);
  console.log(`Please visit http://localhost:${PORT}`);
  console.log(`GraphQL Running on http://localhost:${PORT}/graphbrainz`);
});
