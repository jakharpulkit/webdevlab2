const express = require('express');
const studentRoutes = require('./routes/studentRoutes');

const app = express();

// Built-in middleware for JSON parsing
app.use(express.json());

// Lab 2 (3/4): Custom Logger Middleware (Must be before routes)
app.use((req, res, next) => {
    const timestamp = new Date().toISOString();
        console.log(`[${timestamp}] ${req.method} request to ${req.url}`);
            next();
            });

            // Lab 2 (1/4): Mount the router for the /students resource
            app.use('/students', studentRoutes);

            const PORT = 3000;
            app.listen(PORT, () => {
                console.log(`Server is running on port ${PORT}`);
                });
                
