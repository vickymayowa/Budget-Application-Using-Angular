import { Component } from '@angular/core';

interface BudgetInterface {
  BudgetName: string;
  BudgetTime:Date;
  BudgetAmount: string;
  BudgetCategory:string
  CreatedAt: Date;
  UpdatedAt: Date;

}
@Component({
  selector: 'app-budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.css']
})
export class BudgetComponent {
  public BudgetName: string = '';
  public BudgetTime: string = '';
  public BudgetAmount: string = '';
  public BudgetCategory: string = '';
  public BudgetArray: BudgetInterface[] = [];
  public created_at: Date = new Date();
  public updated_at: Date = new Date();

  ngOnInit(){
    const BudgetDetails = localStorage["customerDetails"];
    if (BudgetDetails) {
        this.BudgetArray = JSON.parse(BudgetDetails) as BudgetInterface[];
    } else {
        this.BudgetArray = [];
    }
  }
  addBudget(){
    // if(){

    // }else{
      const contactObject:any = {
        Budget_Name:this.BudgetName,
        Budget_Time:this.BudgetTime,
        Budget_Amount: this.BudgetAmount,
        Budget_Category: this.BudgetCategory,
        CreatedAt: this.created_at,
        UpdatedAt: this.updated_at,
    };  
    this.BudgetArray.push(contactObject);
    console.log(contactObject);
    localStorage.setItem("BudgetDetails", JSON.stringify(this.BudgetArray));
    }
  // }
}
