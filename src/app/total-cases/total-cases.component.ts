import { Component, OnInit } from '@angular/core';
import { ApidataService } from '../apidata.service';

@Component({
  selector: 'app-total-cases',
  templateUrl: './total-cases.component.html',
  styleUrls: ['./total-cases.component.scss']
})
export class TotalCasesComponent implements OnInit {

  data: any;
  active = null;
  activeToday = null;
  confirmed = null;
  deaths = null;
  fatalityRate = null;
  recovered = null;




  constructor(private apidataService: ApidataService) { }

  ngOnInit(): void {
    this.getDataTotal();
  }


  getDataTotal(): void {
    this.apidataService.getDataTotal()
      .subscribe((data: any) => {
        this.data = data.data;
        console.log(data);
        this.active = this.data.active;
        this.activeToday = this.data.active_diff;
        this.confirmed = this.data.confirmed;
        this.deaths = this.data.deaths;
        this.fatalityRate = this.data.fatality_rate;
        this.recovered = this.data.recovered;
      });
  }

}
