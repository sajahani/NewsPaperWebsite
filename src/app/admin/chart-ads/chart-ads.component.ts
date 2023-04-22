import { Component } from '@angular/core';
import Chart from 'chart.js/auto';
import { AdminService } from 'src/app/admin.service';

@Component({
  selector: 'app-chart-ads',
  templateUrl: './chart-ads.component.html',
  styleUrls: ['./chart-ads.component.css']
})
export class ChartAdsComponent {

  constructor(public adminService : AdminService ){}
 


 

  

 
  chart: any = [];


  ngOnInit() {

   this.adminService.getData2().subscribe(data => {
     this.createChart2(data);
      console.log(data)

    });

  }

  createChart2(data: any) 
  {
    const AdsCounts = data.map((data :any) => data.numberAds);
    const AdsTypes = data.map((data : any) => data.type);

    this.chart = new Chart('canvas2', {
      type: 'doughnut',
      data: {
          labels: AdsTypes,
          datasets: [{
              data: AdsCounts,
              backgroundColor: [ 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(153, 102, 255, 0.2)'],
              borderColor: [ 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)'],
              borderWidth: 1
          }]
      },
      options: {
          
      }
  });

}
}
