// server.js
const app = require("./app");

const PORT = process.env.PORT || 5000; // 👈 usar PORT de Render
app.listen(PORT, () => console.log(`✅ Server en http://localhost:${PORT}`));