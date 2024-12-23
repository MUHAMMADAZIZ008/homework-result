import { Injectable } from '@nestjs/common';

export interface IBudget {
  id?: number;
  year: Date;
  income: number;
  costs: number;
  financialBalance: number;
}

@Injectable()
export class AppService {
  budgets: IBudget[] = [];
  create(budget: IBudget): IBudget {
    let isTrue: boolean = false;

    for (let i = 0; i < this.budgets.length; i++) {
      if (budget.year === this.budgets[i].year) {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        isTrue = true;
        this.budgets[i].income += budget.income;
        this.budgets[i].costs += budget.costs;
        this.budgets[i].financialBalance += budget.financialBalance;
        return this.budgets[i];
      }
    }

    if (!isTrue) {
      const newBudget = {
        id: this.budgets.length + 1,
        ...budget,
      };
      this.budgets.push(newBudget);
      return newBudget;
    }
  }
  getAll(): IBudget[] {
    return this.budgets;
  }
  getOne(id: number): IBudget | string {
    const curretnBudget = this.budgets.find((budger) => budger.id === id);
    console.log(curretnBudget);

    if (!curretnBudget) {
      return 'budget not found';
    }
    return curretnBudget;
  }
  update(
    id: number,
    updateBodger: Partial<IBudget>,
    command: string,
  ): IBudget | string {
    const curretnBudgetIndex = this.budgets.findIndex(
      (budget) => budget.id === id,
    );
    if (curretnBudgetIndex < 0) {
      return 'budget not found';
    }
    if (command === '+') {
      if (updateBodger.income) {
        this.budgets[curretnBudgetIndex].income += updateBodger.income;
      }
      if (updateBodger.costs) {
        this.budgets[curretnBudgetIndex].costs += updateBodger.costs;
      }
      if (updateBodger.financialBalance) {
        this.budgets[curretnBudgetIndex].financialBalance +=
          updateBodger.financialBalance;
      }
    }

    if (command === '-') {
      if (updateBodger.income) {
        this.budgets[curretnBudgetIndex].income -= updateBodger.income;
      }
      if (updateBodger.costs) {
        this.budgets[curretnBudgetIndex].costs -= updateBodger.costs;
      }
      if (updateBodger.financialBalance) {
        this.budgets[curretnBudgetIndex].financialBalance -=
          updateBodger.financialBalance;
      }
    }
    return this.budgets[curretnBudgetIndex];
  }

  delete(id: number): string {
    const curretnBudgetIndex = this.budgets.findIndex(
      (budget) => budget.id === id,
    );
    if (curretnBudgetIndex < 0) {
      return 'budget not found';
    }
    this.budgets.splice(curretnBudgetIndex, 1);
    return 'budget deleted successfully';
  }
}
