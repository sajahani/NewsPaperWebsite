import { Component } from '@angular/core';

import Chart from 'chart.js/auto';
//import { Chart } from 'chart.js';
import { AdminService } from 'src/app/admin.service';
import { ChartData, ChartEvent, ChartType, registerables } from 'chart.js';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})

export class ChartComponent {
//  chartData: any = [];
   

  constructor(public adminService : AdminService ){}
 

  // public chart: any;


  // createChart(){
  
  //   this.chart = new Chart("MyChart", {
  //     type: 'line', //this denotes tha type of chart

  //     data: {// values on X-Axis
  //       labels: [
  //          'Roya News', 'CNN News', 'CBC News',
  //         this.adminService.ChatArticleNews.type3       ], 
	//        datasets: [
  //         {
  //           label: "numberArticle in NewsPaper",
  //           data: ['2', '3', '1',  
  //           [this.adminService.ChatArticleNews.numberArticle]],
  //           backgroundColor: 'blue'
  //         },
          // {
          //   label: "typeNews",
          //   data: ['542', '542', '536', '327', '17',
					// 				 '0.00', '538', '541'],
          //   backgroundColor: 'limegreen'
          // }  
       // ]
     // },
     // options: {
     //   aspectRatio:2.5
    //  }
  //    
  // });
  //}




  // ngOnInit(): void {
  //   this.adminService.GetallChatArticleNews();
    


  //    this.adminService.chartData ;
  //    console.log( this.adminService.chartData);
  //    this.createChart();
    
  // }



 
  chart: any = [];


  ngOnInit() {

   this.adminService.getData().subscribe(data => {
     this.createChart(data);
      console.log(data)

    });

  }

  createChart(data: any) 
  {
    const articleCounts = data.map((data :any) => data.numberArticle);
    const newsTypes = data.map((data : any) => data.type3);

    this.chart = new Chart('canvas', {
      type: 'pie',
      data: {
          labels: newsTypes,
          datasets: [{
              data: articleCounts,
              backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(153, 102, 255, 0.2)'],
              borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)'],
              borderWidth: 1
          }]
      },
      options: {
          
      }
  });

  }
  



}


//   createChart() {
//     const canvas = document.getElementById('myChart') as HTMLCanvasElement;
//     const ctx = canvas.getContext('2d');
//     const labels = this.chartData.map((item: { type3: any; }) => item.type3);
//     const data = this.chartData.map((item: { numberArticle: any; }) => item.numberArticle);
//     const chart = new Chart(ctx, {
//       type: 'bar',
//       data: {
//         labels: labels,
//         datasets: [
//           {
//             label: 'Number of Articles',
//             data: data,
//             backgroundColor: ['blue', 'red']
//           }
//         ]
//       },
//       options: {
//         scales: {
//           yAxes: [{
//             ticks: {
//               beginAtZero: true
//             }
//           }]
//         }
//       }
//     });
//   }

// }



