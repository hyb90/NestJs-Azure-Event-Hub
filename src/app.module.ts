import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ServiceBusListenerModule } from './service-bus-listener/service-bus-listener.module';
import { EventHubListenerModule } from './event-hub-listener/event-hub-listener.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { EventHubSenderModule } from './event-hub-sender/event-hub-sender.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    ServiceBusListenerModule,
    EventHubListenerModule,
    MongooseModule.forRootAsync({
      useFactory: async () => ({
        uri: process.env.MONGODB_ATLAS_CONNECTION_STRING || '',
        dbName: 'test-azure-service-bus',
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }),
    }),
    EventHubSenderModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
