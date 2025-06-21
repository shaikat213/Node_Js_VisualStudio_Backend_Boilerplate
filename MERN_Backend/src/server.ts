import { AppDataSource } from './config/database';
import app from './app';

AppDataSource.initialize().then(() => {
    const port = process.env.PORT || 3000;
    app.listen(port, () => console.log(`Server running on port ${port}`));
}).catch(err => console.error("DB init error", err));
