import mongoose from 'mongoose';
import app from './app';
const port = 5000;

// database connection
async function bootstrap() {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/express-mongo");
        console.log('Database connected');
        app.listen(port, () => {
            console.log(`Server is listening at http://localhost:${port}`)
        })
    }
    catch (err) {
        console.log(err);
    }
}
bootstrap();