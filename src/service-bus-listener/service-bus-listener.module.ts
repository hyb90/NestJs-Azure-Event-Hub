import { Module } from '@nestjs/common';
import { ServiceBusListenerService } from './service-bus-listener.service';

@Module({
  providers: [ServiceBusListenerService],
})
export class ServiceBusListenerModule {}
