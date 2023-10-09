import { Test, TestingModule } from '@nestjs/testing';
import { EquipmentService } from './equipment.service';
import { Repository } from 'typeorm';
import { Equipment } from './equipment.entity';
import { getRepositoryToken } from '@nestjs/typeorm';

describe('EquipmentService', () => {
  let service: EquipmentService;
  let repo: Repository<Equipment>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        EquipmentService,
        {
          provide: getRepositoryToken(Equipment),
          useClass: Repository,
        },
      ],
    }).compile();

    service = module.get<EquipmentService>(EquipmentService);
    repo = module.get<Repository<Equipment>>(getRepositoryToken(Equipment));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('findAll', () => {
    it('should return an array of equipments', async () => {
      const testEquipment: Equipment[] = [new Equipment()];
      jest.spyOn(repo, 'find').mockResolvedValue(testEquipment);

      expect(await service.findAll()).toEqual(testEquipment);
    });
  });

});
