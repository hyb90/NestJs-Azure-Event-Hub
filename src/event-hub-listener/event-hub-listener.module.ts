import { Module } from '@nestjs/common';
import { EventHubListenerService } from './event-hub-listener.service';

@Module({
  providers: [EventHubListenerService]
})
export class EventHubListenerModule {}
