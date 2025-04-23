const express = require('express');
const app = express();
const courseRoutes = require('./routes/courses');

app.use("api/courses", courseRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});