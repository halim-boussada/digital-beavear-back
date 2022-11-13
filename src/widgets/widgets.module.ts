import { Module } from '@nestjs/common';
import { WidgetsService } from './widgets.service';
import { WidgetsGateway } from './widgets.gateway';

@Module({
  providers: [WidgetsGateway, WidgetsService]
})
export class WidgetsModule {}
