import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { RmqModule } from '../rmq/rmq.module';
import configuration from '../configuration/configuration'
import { ORDERS } from '../constants/services'
import { NotificationsController } from './notifications.controller';

@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true,
    load: [configuration]
  })
    , RmqModule.register({
      name: ORDERS
    })],
  controllers: [ NotificationsController ],
  providers: []
})

export class NotificationsModule {}
