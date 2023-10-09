import { Controller, Get } from '@nestjs/common';
import { EventHubSenderService } from './event-hub-sender.service';

@Controller('event-hub-sender')
export class EventHubSenderController {
  constructor(private readonly eventHubSenderService: EventHubSenderService) {}
  @Get('/test')
  sendEvent(): Promise<string> {
    return this.eventHubSenderService.sendToAzureHub();
  }
}
