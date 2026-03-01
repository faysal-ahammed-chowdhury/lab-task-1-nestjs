import { Module } from '@nestjs/common';
import { AdminController } from './admin.controller';
import { AdminService } from './admin.service';
import { RiderService } from './rider.service';

@Module({
    imports: [],
    controllers: [AdminController],
    providers: [AdminService, RiderService],
})
export class AdminModule {}
