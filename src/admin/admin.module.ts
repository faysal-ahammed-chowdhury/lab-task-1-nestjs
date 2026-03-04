import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdminController } from './admin.controller';
import { AdminService } from './admin.service';
import { AdminEntity } from './entities/admin.entity';
import { RiderService } from './rider.service';

@Module({
    imports: [TypeOrmModule.forFeature([AdminEntity])],
    controllers: [AdminController],
    providers: [AdminService, RiderService],
})
export class AdminModule {}
