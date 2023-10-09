import { Test, TestingModule } from '@nestjs/testing';
import { ServiceBusListenerService } from './service-bus-listener.service';

describe('ServiceBusListenerService', () => {
  let service: ServiceBusListenerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ServiceBusListenerService],
    }).compile();

    service = module.get<ServiceBusListenerService>(ServiceBusListenerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
