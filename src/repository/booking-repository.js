
const {Booking} = require('../models/index');
const {AppError,ValidationError} = require('../utils/error/index');
const {StatusCodes} = require('http-status-codes');
class BookingRepository {

    async create(data)
    {
        try {
            
        } catch (error) {
            if(error.name=='SequeizeValidationError'){
                throw new ValidationError(error);
            }
            throw new AppError(
                'Repository Error',
                'Cannot Create Booking',
                'There was some issue creating the booking, please try again later',
                StatusCodes.INTERNAL_SERVER_ERROR
            );
        }
    }

}

module.exports = BookingRepository;