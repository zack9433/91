export interface Budget {
  yearMonth: string;
  amount: number;
}

export class BudgetRepo {
  getAll(): Budget[] {
    return [];
  }
}
