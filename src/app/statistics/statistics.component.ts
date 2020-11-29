import { Component, OnInit } from '@angular/core';
import { ApidataService } from '../apidata.service';
import { Country } from '../Country';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})

export class StatisticsComponent implements OnInit {
  optionValue = '';
  countries: Country[] = [];
  selectedCountries: Country[] = [];

  constructor(private apidataService: ApidataService) {

  }

  ngOnInit(): void {
    this.getData();
  }

  getData(): void {
    this.apidataService.getData()
      .subscribe((data: any) => {
        this.countries = data.response;
        console.log(data.response);
      });
    this.selectedCountries = this.countries;
  }

  filterEl(option: string): any[] {
    console.log(option);

    return this.selectedCountries = this.countries.filter(country => {
      if (country.continent === option) {
        console.log('yaa');

      }

      return country.continent === option;
    });
  }


  sortType(sort: string): void {
    if (sort === 'population') {
      this.selectedCountries = this.selectedCountries.sort(this.sortByPopulation);
    }
    else if (sort === 'deaths') {
      this.selectedCountries = this.selectedCountries.sort(this.sortByDeaths);
    }

    else if (sort === 'cases') {
      this.selectedCountries = this.selectedCountries.sort(this.sortByCases);
    }
  }

  sortByPopulation(c1: Country, c2: Country): number {
    return c2.population - c1.population;
  }

  sortByDeaths(c1: Country, c2: Country): number {
    return c1.deaths.total - c2.deaths.total;
  }

  sortByCases(c1: Country, c2: Country): number {
    return c1.cases.total - c2.cases.total;
  }

}
