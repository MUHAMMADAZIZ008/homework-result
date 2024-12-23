import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService, IBudget } from './app.service';

describe('AppController', () => {
  let appController: AppController;
  let service: AppService;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
    service = app.get<AppService>(AppService);
  });

  it('should be defined', () => {
    expect(AppController).toBeDefined();
  });

  describe('budget', () => {
    it('should call BudgetService.create and return the result', () => {
      const budget: IBudget = {
        id: 1,
        year: new Date('2024-12-05'),
        income: 5000,
        costs: 2000,
        financialBalance: 3000,
      };

      const expected = budget;
      jest.spyOn(service, 'create').mockImplementation(() => expected);

      const result = appController.create(budget);

      expect(service.create).toHaveBeenCalledWith(budget);
      expect(result).toEqual(expected);
    });

    it('should return an array of budgets', () => {
      const budgets: IBudget[] = [
        {
          id: 1,
          year: new Date(2024, 0, 1),
          income: 5000,
          costs: 2000,
          financialBalance: 3000,
        },
      ];

      jest.spyOn(service, 'getAll').mockReturnValue(budgets);

      const result = appController.getAll();

      expect(service.getAll).toHaveBeenCalled();
      expect(result).toEqual(budgets);
    });

    it('should return a single budget by id', () => {
      const budget: IBudget = {
        id: 1,
        year: new Date(2024, 0, 1),
        income: 5000,
        costs: 2000,
        financialBalance: 3000,
      };

      jest.spyOn(service, 'getOne').mockReturnValue(budget);

      const result = appController.getOne(1);

      expect(service.getOne).toHaveBeenCalledWith(1);
      expect(result).toEqual(budget);
    });
  });

  it('should update a budget and return the updated budget', () => {
    const updatedBudget: IBudget = {
      id: 1,
      year: new Date(2025, 0, 1),
      income: 7000,
      costs: 3000,
      financialBalance: 4000,
    };
    jest.spyOn(service, 'update').mockReturnValue(updatedBudget);

    const result = appController.update(1, updatedBudget, '+');

    expect(service.update).toHaveBeenCalledWith(1, updatedBudget, '+');
    expect(result).toEqual(updatedBudget);
  });

  it('should delete a budget and return true', () => {
    const budgetId = 1;

    jest
      .spyOn(service, 'delete')
      .mockReturnValue('budget deleted successfully');

    const result = appController.delete(budgetId);

    expect(service.delete).toHaveBeenCalledWith(budgetId);
    expect(result).toBe('budget deleted successfully');
  });
});
