import { Test, TestingModule } from '@nestjs/testing';
import { EventHubSenderService } from './event-hub-sender.service';

describe('EventHubSenderService', () => {
  let service: EventHubSenderService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EventHubSenderService],
    }).compile();

    service = module.get<EventHubSenderService>(EventHubSenderService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
