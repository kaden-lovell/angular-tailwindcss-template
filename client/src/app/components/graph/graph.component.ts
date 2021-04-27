import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  AfterViewInit,
} from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.scss'],
})
export class GraphComponent implements OnInit, AfterViewInit {
  @ViewChild('canvas')
  canvas: ElementRef;

  @ViewChild('canvas2')
  canvas2: ElementRef;

  constructor() {}

  ngOnInit() {}

  ngAfterViewInit() {
    const myChartRef1 = this.canvas.nativeElement;
    const myChartRef2 = this.canvas2.nativeElement;
    new Chart(myChartRef1, {
      type: 'bar',
      data: {
        //Bring in data
        labels: ['Jan', 'Feb', 'March'],
        datasets: [
          {
            label: 'chart 1',
            data: [86, 67, 91],
            borderColor: ['#DC2626', '#059669', '#2563EB'],
            backgroundColor: ['#DC2626', '#059669', '#2563EB'],
            color: ['#DC2626', '#059669', '#2563EB'],
          },
        ],
      },
      options: {
        //Customize chart options
      },
    });

    new Chart(myChartRef2, {
      type: 'line',
      data: {
        //Bring in data
        labels: ['Jan', 'Feb', 'March', 'april', 'may'],
        datasets: [
          {
            label: 'chart 2',
            data: [44, 67, 91, 499, 329],
            borderColor: ['#DC2626', '#059669', '#2563EB'],
            color: ['#DC2626', '#059669', '#2563EB'],
          },
        ],
      },
      options: {
        //Customize chart options
      },
    });
  }
}
