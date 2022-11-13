import { Test, TestingModule } from '@nestjs/testing';
import { WidgetsGateway } from './widgets.gateway';
import { WidgetsService } from './widgets.service';

describe('WidgetsGateway', () => {
  let gateway: WidgetsGateway;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WidgetsGateway, WidgetsService],
    }).compile();

    gateway = module.get<WidgetsGateway>(WidgetsGateway);
  });

  it('should be defined', () => {
    expect(gateway).toBeDefined();
  });
});
