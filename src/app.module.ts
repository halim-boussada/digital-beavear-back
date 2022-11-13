import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ProjectsModule } from './projects/projects.module';
import { OrdersModule } from './orders/orders.module';
import { WidgetsModule } from './widgets/widgets.module';
import { ThemesModule } from './themes/themes.module';
import { AdminsModule } from './admins/admins.module';

@Module({
  imports: [UsersModule, ProjectsModule, OrdersModule, WidgetsModule, ThemesModule, AdminsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
