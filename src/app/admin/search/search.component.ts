import { Component } from '@angular/core';
import { AdminService } from 'src/app/admin.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  constructor(public adminService : AdminService)
  {

  }
  public openPDF1(): void {
    let DATA: any = document.getElementById('htmlData');
    html2canvas(DATA).then((canvas) => {
      let fileWidth = 208;
      let fileHeight = (canvas.height * fileWidth) / canvas.width;
      const FILEURI = canvas.toDataURL('image/png');
      let PDF = new jsPDF('p', 'mm', 'a4');
      let position = 0;
      PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight);
      PDF.save('angular-demo.pdf');
    });




    
  }






  
CreateForm2 = new FormGroup(
 { 
  dateFrom2:new FormControl('',Validators.required),
  dateTo2:new FormControl('',Validators.required)
}
)

term:any


SearchReport: any[] = [];
totalAmount: number = 0;

 async searchDate()
{
  
 this.adminService.GetSearchReport(this.CreateForm2.value)
  console.log(this.CreateForm2.value);
 
//  await this.adminService.GetSearchReport(this.CreateForm2.value).then(()=>{
//   this.SearchReport = this.adminService.SearchReport;
//   this.totalAmount = this.SearchReport.reduce((total, report) => total + report.amount3, 0);
//   console.log(this.totalAmount);
  
  
// });
  
}



ngOnInit()
{
  
  this.adminService.GetSearchReport(this.CreateForm2.value)


}



// cal(): number
// {  
//   let total  =0 ;

//   for(let i =0 ; i<this.SearchReport.length;i++)
//   {
//     total +=this.SearchReport[i].amount3 
//   }

//   return total;
// }





public openPDF(): void {
  let DATA: any = document.getElementById('htmlData');
  html2canvas(DATA).then((canvas) => {
    let fileWidth = 208;
    let fileHeight = (canvas.height * fileWidth) / canvas.width;
    const FILEURI = canvas.toDataURL('image/png');
    let PDF = new jsPDF('p', 'mm', 'a4');
    let position = 0;
    PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight);
    PDF.save('angular-demo.pdf');
  });
}


}


