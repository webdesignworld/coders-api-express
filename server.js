const express = require("express");
const port = process.env.PORT || 8000;
const authRoutes = require('./routes/authRoutes')
const challengeRoutes = require('./routes/challengeRoutes'); 
const gradingRoutes = require('./routes/gradingRoutes'); 
const leaderboardRoutes = require('./routes/leaderboardRoutes')


// const cors = require('cors');

// app.use(cors());

const app = express();

// Middleware for parsing JSON
app.use(express.json());


//setup validators folder as a middleware for various API endpoints

app.use('/auth', authRoutes);

app.use('/challenges', challengeRoutes);

app.use('/grading', gradingRoutes);


app.use('/leaderboard', leaderboardRoutes);




app.listen(port, () => console.log(`Server is running on port ${port}`));
