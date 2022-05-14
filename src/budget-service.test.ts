import { BudgetRepo } from './budget-repo';
import { BudgetService } from './budget-service';

describe('Budget Service', () => {
  let repo: any;
  let budget: any;
  beforeEach(() => {
    repo = new BudgetRepo();
    budget = new BudgetService(repo);
  });

  describe('一個月份內', () => {
    it('should be show no budget', () => {
      repo.getAll = () => {
        return [];
      };
      expect(budget.query(new Date('2022/5/1'), new Date('2022/5/6'))).toBe(0);
    });

    it('should be show budget', () => {
      repo.getAll = () => {
        return [
          {
            yearMonth: '202205',
            amount: 3100
          }
        ];
      };
      expect(budget.query(new Date('2022/5/1'), new Date('2022/5/6'))).toBe(600);
    });
  });

  describe('二個月份內', () => {});
});
