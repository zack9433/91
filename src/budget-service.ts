import dayjs from 'dayjs';
import { Budget } from './budget-repo';

export class BudgetService {
  repo: any;
  constructor(repo: any) {
    this.repo = repo;
  }

  query(start: Date, end: Date) {
    const allBudget: Budget[] = this.repo.getAll();

    if (allBudget.length === 0) {
      return 0;
    }

    const startDay = dayjs(start);
    const endDay = dayjs(end);
    const intervalDays = endDay.diff(start, 'day') + 1;

    const result = allBudget.filter((f) => dayjs(f.yearMonth) >= startDay && dayjs(f.yearMonth) <= endDay);
    return (result[0].amount / dayjs(start).daysInMonth()) * intervalDays;
    // return allBudget[0].amount;
  }
}
