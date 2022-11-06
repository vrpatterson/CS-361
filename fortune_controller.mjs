import * as fortune from './fortune_model.mjs';
import express from 'express';
const app = express();
const PORT = 3000;

app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));
app.use(express.json());


/**
 * Create a new user with userId, fortuneId, and fortuneText
 */
app.post("/fortuneHistory", (req, res) => {
    fortune.createFortune(req.body.userId, req.body.fortuneId, req.body.fortuneText)
        .then(fortune => {
            res.status(201).json(fortune);
        })
        .catch(error => {
            res.status(400).json({ error: 'Request failed 1' });
        });
});

/**
 * Retrieve fortune history. 
 */
app.get("/fortuneHistory", (req, res) => {
    const filter = req.query.userId === undefined
    ? {}
    : { userId: req.query.userId}

    fortune.showFortune(filter, '', 0)
        .then(fortune => {
            res.status(200).json(fortune);
        })
        .catch(error => {
            res.status(400).json({ error: 'Request failed 2' });
        });

});


app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});
