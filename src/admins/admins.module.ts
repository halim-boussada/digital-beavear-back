import { Module } from '@nestjs/common';
import { AdminsService } from './admins.service';
import { AdminsGateway } from './admins.gateway';

@Module({
  providers: [AdminsGateway, AdminsService]
})
export class AdminsModule {}
