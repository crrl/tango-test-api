import StatusCodes from 'http-status-codes';
import { Request, Response, Router } from 'express';

// Constants
const router = Router();
const { OK, METHOD_FAILURE } = StatusCodes;

router.get('/:number', async (req: Request, res: Response) => {
    try {
        let result: number = 0;
        let sum: number = 0;
        let previousValue: number = 0;
        let currentValue: number = 1;
        
        if(isNaN(+req.params.number)) throw('something went wrong.');
        const valueParam = +req.params.number;

        //Note: returns 0 because its the first number.
        if (valueParam === 0) {
            return res.status(OK).json({value: 0});
        }
        //Note: returns 1 so we can simplify the logic for the next coming numbers without making the loop more complex.
        if (valueParam === 1 || valueParam === 2 ) {
            return res.status(OK).json({value: 1});
        }
  
        for (let i = 1; i < valueParam; i++) {
          sum = previousValue + currentValue;
          previousValue = currentValue;
          currentValue = sum;
          if (valueParam === i + 1) {
            result = currentValue;
          };
        }
        return res.status(OK).json({value: result});
    } catch (error) {
        return res.status(METHOD_FAILURE).json({error: 'something went wrong.'});
    }
});

// Export default
export default router;
