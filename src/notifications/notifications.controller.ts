import { Controller, Get, Logger } from '@nestjs/common';
import { Ctx, EventPattern, Payload, RmqContext } from '@nestjs/microservices';
import { RmqService } from '../rmq/rmq.service';


@Controller('notifications')
export class NotificationsController {
    private readonly logger = new Logger(NotificationsController.name)
    constructor(private readonly rmqService: RmqService){}

    @EventPattern('newOrder')
    getNotifications(@Payload() data: any, @Ctx() context: RmqContext){
        this.logger.log(data)
        this.rmqService.ack(context)

    }
}
