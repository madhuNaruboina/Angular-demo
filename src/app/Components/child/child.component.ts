import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor() { }

  @Input() userName: string;

  title: string; 
expenseEntries: any[]; 
isShow :Boolean = true

isLogIn : boolean = false;
   isLogOut : boolean = true; 

   //ng-switch
   logInName = 'admin'; 

   // component 

   User : any[]

  ngOnInit(): void {
    this.title = "Expense Entry List"; 
   this.expenseEntries = this.getExpenseEntries()
  }

  getExpenseEntries() : any[] { 
    let mockExpenseEntries : any[] = [ 
       { id: 1, 
          item: "Pizza", 
          amount: Math.floor((Math.random() * 10) + 1), 
          category: "Food", 
          location: "Mcdonald", 
          spendOn: new Date(2020, 4, Math.floor((Math.random() * 30) + 1), 10, 10, 10), 
          createdOn: new Date(2020, 4, Math.floor((Math.random() * 30) + 1), 10, 10, 10) }, 
       { id: 1, 
          item: "Pizza", 
          amount: Math.floor((Math.random() * 10) + 1), 
          category: "Food", 
          location: "KFC", 
          spendOn: new Date(2020, 4, Math.floor((Math.random() * 30) + 1), 10, 10, 10), 
          createdOn: new Date(2020, 4, Math.floor((Math.random() * 30) + 1), 10, 10, 10) }, 
       { id: 1,
          item: "Pizza",
          amount: Math.floor((Math.random() * 10) + 1), 
          category: "Food", 
          location: "Mcdonald", 
          spendOn: new Date(2020, 4, Math.floor((Math.random() * 30) + 1), 10, 10, 10), 
          createdOn: new Date(2020, 4, Math.floor((Math.random() * 30) + 1), 10, 10, 10) }, 
       { id: 1, 
          item: "Pizza", 
          amount: Math.floor((Math.random() * 10) + 1), 
          category: "Food", 
          location: "KFC", 
          spendOn: new Date(2020, 4, Math.floor((Math.random() * 30) + 1), 10, 10, 10), 
          createdOn: new Date(2020, 4, Math.floor((Math.random() * 30) + 1), 10, 10, 10) }, 
       { id: 1, 
          item: "Pizza", 
          amount: Math.floor((Math.random() * 10) + 1), 
          category: "Food", 
          location: "KFC", 
          spendOn: new Date(2020, 4, Math.floor((Math.random() * 30) + 1), 10, 10, 10), 
          createdOn: new Date(2020, 4, Math.floor((Math.random() * 30) + 1), 10, 10, 10) 
       }, 
    ]; 
    return mockExpenseEntries; 
 }

 // component directive

 users: any[] = [ 
  { 
     "userId": 1, 
     "userName": 'User1' 
  }, 
  { 
     "userId": 2, 
     "userName": 'User2' 
  }, 
]; 

}
