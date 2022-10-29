import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import configuration from './configuration/configuration'
import { NotificationsModule } from './notifications/notifications.module';


@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true,
    load: [configuration]
  }), NotificationsModule],
  controllers: [],
  providers: []
})

export class AppModule {}


