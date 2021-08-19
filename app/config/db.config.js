const dbUser = process.env.DB_USER;
const dbPass = process.env.DB_PASSWORD;
const dbName = 'VaccinationLR';
const dbUri = `mongodb+srv://${dbUser}:${dbPass}@cluster0.i6svs.mongodb.net/${dbName}?retryWrites=true&w=majority`;
const mongooseOptions = {
        useNewUrlParser: true,
        useUnifiedTopology: true, 
        useCreateIndex: true,
        useFindAndModify: false,
    };


module.exports = {
    dbUri, mongooseOptions
}