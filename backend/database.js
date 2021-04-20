const mongoose = require('mongoose');

export async function connect() {
    try {
        const db = await mongoose.connect(process.env.DATABASE_URL, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true,
            useFindAndModify:false
        })
            .then(db => console.log(`db connect -> ${db}`));
        return db;
    } catch (error) {
        console.log(`error connect db -> ${error}`);
    }
}