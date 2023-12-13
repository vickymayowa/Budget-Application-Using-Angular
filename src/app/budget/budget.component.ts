import { Component } from '@angular/core';

interface BudgetInterface {
  id: number;
  BudgetName: string;
  BudgetTime: string;
  BudgetAmount: string;
  CreatedAt: Date;
  UpdatedAt: Date;
}

@Component({
  selector: 'app-budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.css'],
})
export class BudgetComponent {
  public BudgetName: string = '';
  public BudgetTime: string = '';
  public BudgetAmount: string = '';
  public BudgetArray: BudgetInterface[] = [];
  public created_at: Date = new Date();
  public updated_at: Date = new Date();

  // ...

  ngOnInit() {
    alert('Onload of the page is working');
    const localStorageData = localStorage.getItem('BudgetDetails');

    if (localStorageData) {
      this.BudgetArray = JSON.parse(localStorageData) as BudgetInterface[];
    } else {
      this.BudgetArray = [];
    }
  }

  addBudget() {
    const id = new Date().getTime();
    const budgetObject: BudgetInterface = {
      id,
      BudgetName: this.BudgetName,
      BudgetTime: this.BudgetTime,
      BudgetAmount: this.BudgetAmount,
      CreatedAt: this.created_at,
      UpdatedAt: this.updated_at,
    };
    this.BudgetArray.push(budgetObject);
    localStorage.setItem('BudgetDetails', JSON.stringify(this.BudgetArray));
    this.BudgetName = '';
    this.BudgetTime = '';
    this.BudgetAmount = '';
  }
  deleteBudget(budget: BudgetInterface) {
    const index = this.BudgetArray.findIndex((item) => item.id === budget.id);
    console.log(index);
    if (index !== -1) {
      this.BudgetArray.splice(index, 1);
      localStorage.setItem('BudgetDetails', JSON.stringify(this.BudgetArray));
    }
  }

  showEditModal = false;
  editingBudget: BudgetInterface | null = null;

  editBudget(budget: BudgetInterface) {
    this.editingBudget = { ...budget };
    this.showEditModal = true;
  }
  saveEdit() {
    this.showEditModal = false;
  }
  cancelEdit() {
    this.showEditModal = false;
  }
}
