import { Test, TestingModule } from '@nestjs/testing';
import { EventHubSenderController } from './event-hub-sender.controller';

describe('EventHubSenderController', () => {
  let controller: EventHubSenderController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EventHubSenderController],
    }).compile();

    controller = module.get<EventHubSenderController>(EventHubSenderController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
