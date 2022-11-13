import { Module } from '@nestjs/common';
import { ThemesService } from './themes.service';
import { ThemesGateway } from './themes.gateway';

@Module({
  providers: [ThemesGateway, ThemesService]
})
export class ThemesModule {}
