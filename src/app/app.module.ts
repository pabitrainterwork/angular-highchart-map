import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HighchartsChartModule } from "highcharts-angular";
import { ChartComponent } from "./chart.component";

import { AppComponent } from "./app.component";

@NgModule({
  declarations: [AppComponent, ChartComponent],
  imports: [BrowserModule, HighchartsChartModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}