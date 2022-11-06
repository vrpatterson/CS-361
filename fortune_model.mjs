import mongoose from 'mongoose';

mongoose.connect(
    'mongodb://127.0.0.1:27017/cs290',
    { useNewUrlParser: true }
);

const db = mongoose.connection;

db.once('open', () => {
    console.log('Successfully connected to MongoDB using Mongoose!');
})

const fortuneSchema = mongoose.Schema({
    userId: { type: String, required: true },
    fortuneId: { type: String, required: true },
    fortuneText: { type: String, required: true }
});

const Fortune = mongoose.model("Fortune", fortuneSchema);

/**
 * Create a user
 * @param {String} userId 
 * @param {String} fortuneId 
 * @param {String} fortuneText
 * @returns A promise. Resolves to the JSON object for the document created by calling save
 */
const createFortune = async (userId, fortuneId, fortuneText) => {
    const fortune = new Fortune({ userId: userId, fortuneId: fortuneId, fortuneText: fortuneText});
    return fortune.save();
}

/**
 * Retrive user based on the filter, projection and limit parameters
 * @param {string} filter 
 * @param {String} projection 
 * @param {Number} limit 
 * @returns 
 */

const showFortune = async (filter, projection, limit) => {   
    const query = Fortune.find(filter)
        .select(projection)
        .limit(limit);
    return query.exec();
}



export { createFortune, showFortune };
// export { createFortune, showFortune, updateFortune };