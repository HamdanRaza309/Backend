import express from "express"

const app = express();
const port = process.env.PORT || 3000

// app.get('/', (req, res) => {
//     res.send('Server is running ... ')
// })

app.get('/api/jokes', (req, res) => {
    const jokes = [
        {
            "id": 1,
            "title": "Tech Support",
            "content": "Why did the computer keep freezing? Because it left its Windows open!"
        },
        {
            "id": 2,
            "title": "Developer's Coffee",
            "content": "Why do Java developers wear glasses? Because they can’t C#!"
        },
        {
            "id": 3,
            "title": "Database Issues",
            "content": "Why was the database sad? It had too many relationships to handle."
        },
        {
            "id": 4,
            "title": "Bug Hunting",
            "content": "Why don’t programmers like nature? It has too many bugs."
        },
        {
            "id": 5,
            "title": "Wi-Fi Problems",
            "content": "Why was the Wi-Fi acting up? It just needed some space!"
        }
    ];

    res.send(jokes)
})

app.listen(port, () => {
    console.log(`http://localhost:${port}`);
})