import { Injectable } from '@nestjs/common';
import { EventHubProducerClient } from '@azure/event-hubs';
import { Data } from '../models/data.model';

@Injectable()
export class EventHubSenderService {
  // connection string and related Event Hubs entity
  connectionStringSender = process.env.EVENTHUB_CONNECTION_STRING_SENDER || '';
  eventHubName = process.env.EVENTHUB_NAME || '';
  async sendToAzureHub(): Promise<string> {
    console.log(`Running send Events`);

    const producer = new EventHubProducerClient(
      process.env.EVENTHUB_CONNECTION_STRING_SENDER || '',
      process.env.EVENTHUB_NAME || '',
    );
    const eventsToSend: Data[] = [
      { id: 1, message: 'first' },
      { id: 2, message: 'second' },
      { id: 3, message: 'third' },
      { id: 4, message: 'fourth' },
      { id: 5, message: 'fifth' },
      { id: 6, message: 'sixth' },
      { id: 7, message: 'seventh' },
      { id: 8, message: 'eightth' },
      { id: 9, message: 'ninth' },
    ];
    try {
      const batchOptions = {};
      let batch = await producer.createBatch(batchOptions);
      let numEventsSent = 0;

      let i = 0;
      while (i < eventsToSend.length) {
        const isAdded = batch.tryAdd({ body: eventsToSend[i] });
        if (isAdded) {
          ++i;
          continue;
        }

        if (batch.count === 0) {
          console.log(
            `Message was too large and can't be sent until it's made smaller. Skipping...`,
          );
          ++i;
          continue;
        }
        console.log(
          `Batch is full - sending ${batch.count} messages as a single batch.`,
        );
        await producer.sendBatch(batch);
        numEventsSent += batch.count;
        batch = await producer.createBatch(batchOptions);
      }
      if (batch.count > 0) {
        console.log(
          `Sending remaining ${batch.count} messages as a single batch.`,
        );
        await producer.sendBatch(batch);
        numEventsSent += batch.count;
      }
      console.log(`Sent ${numEventsSent} events`);
      if (numEventsSent !== eventsToSend.length) {
        throw new Error(
          `Not all messages were sent (${numEventsSent}/${eventsToSend.length})`,
        );
      }
    } catch (err: any) {
      console.log('Error when creating & sending a batch of events: ', err);
    }
    await producer.close();
    console.log(`Exiting sendEvents`);

    return 'Done';
  }
}
