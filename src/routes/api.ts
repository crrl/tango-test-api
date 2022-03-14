import { Router } from 'express';
import fibonacci from './fibonacci-router';


// Export the base-router
const baseRouter = Router();

// Setup routers
baseRouter.use('/fibonacci', fibonacci);

// Export default.
export default baseRouter;
