const express = require('express');
const app = express();

const PORT = process.env.PORT || 5000; // Heroku ( or whatever cloud service) will set the PORT environment variable

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
