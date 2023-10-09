import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ServiceBusListenerService } from './service-bus-listener/service-bus-listener.service';
import { EventHubListenerService } from './event-hub-listener/event-hub-listener.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const eventHubListener = app.get(EventHubListenerService);
  await eventHubListener.subscribeToEvents();
  const serviceBusListener = app.get(ServiceBusListenerService);
  await serviceBusListener.startListening();
  await app.listen(3000);
}
bootstrap();
