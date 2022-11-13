import { Test, TestingModule } from '@nestjs/testing';
import { ThemesGateway } from './themes.gateway';
import { ThemesService } from './themes.service';

describe('ThemesGateway', () => {
  let gateway: ThemesGateway;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ThemesGateway, ThemesService],
    }).compile();

    gateway = module.get<ThemesGateway>(ThemesGateway);
  });

  it('should be defined', () => {
    expect(gateway).toBeDefined();
  });
});
