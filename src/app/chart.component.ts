import { Component, OnInit } from "@angular/core";
import * as Highcharts from "highcharts/highmaps";

import mapdata from "./mapdata";
import * as India from '@highcharts/map-collection/countries/in/in-all.geo.json';

mapdata(Highcharts);

@Component({
  selector: "app-chart",
  templateUrl: "./chart.component.html"
})
export class ChartComponent implements OnInit {
  title = "app";
  chart;
  updateFromInput = false;
  Highcharts = Highcharts;
  chartConstructor = "mapChart";
  chartCallback;
  chartOptions = {
    chart: {
      map: India
    },
    title: {
      text: 'Highmaps basic demo'
    },
    mapNavigation: {
      enabled: true,
      buttonOptions: {
        alignTo: 'spacingBox'
      }
    },
    colorAxis: {
      min: 0
    },
    series: [{
      name: 'Random data',
      states: {
        hover: {
          color: '#BADA55'
        }
      },
      dataLabels: {
        enabled: true,
        format: '{point.name}'
      },
      allAreas: false,
      data: [
    ['in-py', 0],
    ['in-ld', 1],
    ['in-wb', 2],
    ['in-or', 3],
    ['in-br', 4],
    ['in-sk', 5],
    ['in-ct', 6],
    ['in-tn', 7],
    ['in-mp', 8],
    ['in-2984', 9],
    ['in-ga', 10],
    ['in-nl', 11],
    ['in-mn', 12],
    ['in-ar', 13],
    ['in-mz', 14],
    ['in-tr', 15],
    ['in-3464', 16],
    ['in-dl', 17],
    ['in-hr', 18],
    ['in-ch', 19],
    ['in-hp', 20],
    ['in-jk', 21],
    ['in-kl', 22],
    ['in-ka', 23],
    ['in-dn', 24],
    ['in-mh', 25],
    ['in-as', 26],
    ['in-ap', 27],
    ['in-ml', 28],
    ['in-pb', 29],
    ['in-rj', 30],
    ['in-up', 31],
    ['in-ut', 32],
    ['in-jh', 33]
]
    }]
  };

  constructor() {
    const self = this;

    this.chartCallback = chart => {
      self.chart = chart;
    };
  }

  ngOnInit() {}
}
