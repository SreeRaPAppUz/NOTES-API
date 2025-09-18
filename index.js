const express = require('express')
const notesRouter = require('./routers/notes.router');
const logger = require('./middlewares/logger');
const PORT = process.env.PORT || 8000;

const app=express();
app.use(express.json())
app.use(logger)

app.get("/", (req, res) => {
    res.status(200).json({
        message: "Welcome to the Notes API!",
        info: "Use /notes to view, create, update, or delete notes.",
        documentation: "Start by sending requests to /notes endpoints. Happy coding! "
    });
});

app.use('/notes',notesRouter);

app.use((req,res,next)=>{
    res.status(404).json({ error: "Page not found" }) 
})

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });