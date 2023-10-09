import { Module } from '@nestjs/common';
import { EventHubSenderService } from './event-hub-sender.service';
import { EventHubSenderController } from './event-hub-sender.controller';

@Module({
  providers: [EventHubSenderService],
  controllers: [EventHubSenderController]
})
export class EventHubSenderModule {}
