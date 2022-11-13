import { Test, TestingModule } from '@nestjs/testing';
import { AdminsGateway } from './admins.gateway';
import { AdminsService } from './admins.service';

describe('AdminsGateway', () => {
  let gateway: AdminsGateway;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AdminsGateway, AdminsService],
    }).compile();

    gateway = module.get<AdminsGateway>(AdminsGateway);
  });

  it('should be defined', () => {
    expect(gateway).toBeDefined();
  });
});
