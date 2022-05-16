import { Component, OnInit, ViewChild } from '@angular/core';
import { EmployeeDataService } from '../service/employee-data.service';
import { DialogBoxComponent } from '../dialog-box/dialog-box.component';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { MatSort,MatSortable } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { employ } from './../employee';
import { elementAt } from 'rxjs';
import { DataSource } from '@angular/cdk/collections';






@Component({
  selector: 'employee-table',
  templateUrl: './employee-table.component.html',
  styleUrls: ['./employee-table.component.css']
})
export class EmployeeTableComponent implements OnInit {
 
  
  public searchTerm:string='';

  TableData:any=[];
  ShowEditTable:boolean=false;
  EditRowId:any='';
  id:any='';
  saveEdit:any='';
  

  
  @ViewChild(MatSort)sort!: MatSort;
  @ViewChild('paginator') paginator! : MatPaginator;
dataSource!:MatTableDataSource<any>;
displayedColumns =['actions','empId','empName','mobileNumber','emailId','officeTransport','cafeteriaSubscription','Date','Button'];
 

  
constructor(private service: EmployeeDataService,public dialog:MatDialog) {
  
  }

  ngOnInit() {
    
    this.service.getemp().subscribe((response:any) =>{
    
      this.dataSource = new MatTableDataSource(response);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });




  }
  
  
  openDialog(employee:any){
    console.log(employee);
    const dialogRef = this.dialog.open(DialogBoxComponent, {
      width:'500px',
       data: { projDetails:employee }
    });
   
  }



  
  applyFilter(event: Event) {
    
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

    

    Edit(val:any){
      this.EditRowId=val;
    }



 save(val2:any){
   this.saveEdit=val2;
 }
 


//  confirmEdit(row: DataSource<T>): boolean {
//   if (!row.isValid()) {
//     return false;
//   }

//   const source = this.rowsSubject.getValue();
//   const index = this.getIndexFromRowId(row.id, source);

//   source[index] = row;
//   this.rowsSubject.next(source);

//   row.originalData = undefined;
//   row.editing = false;

//   this.updateDatasourceFromRows(source);
//   return true;
//}




}