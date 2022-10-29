import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { RmqService } from './rmq/rmq.service';
 
async function bootstrap() {

  const app = await NestFactory.create(AppModule);
 
  const RABBITMQ_QUEUE_NAME="cats_queue"

  const rmqService = app.get<RmqService>(RmqService);
  app.connectMicroservice(rmqService.getOptions(RABBITMQ_QUEUE_NAME))

 
  await app.startAllMicroservices();
  app.listen(3000)
}
bootstrap();