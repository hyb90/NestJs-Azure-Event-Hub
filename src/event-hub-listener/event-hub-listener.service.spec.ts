import { Test, TestingModule } from '@nestjs/testing';
import { EventHubListenerService } from './event-hub-listener.service';

describe('EventHubListenerService', () => {
  let service: EventHubListenerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EventHubListenerService],
    }).compile();

    service = module.get<EventHubListenerService>(EventHubListenerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
