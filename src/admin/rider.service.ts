import { Injectable } from '@nestjs/common';
import { CreateRiderDto } from './dto/create-rider.dto';

@Injectable()
export class RiderService {
    createRider(createRiderDto: CreateRiderDto): object {
        let createdRider = {
            id: '101',
            ...createRiderDto,
        };
        return {
            success: true,
            data: createdRider,
            message: 'Rider Created Successfully',
        };
    }
}
