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
  selectedCountry = '';
  countries: Country[] = [];
  selectedCountries: Country[] = [];
  status = false;

  constructor(private apidataService: ApidataService) {

  }

  ngOnInit(): void {
    this.getData();
    this.selectedCountry = 'Europe';
  }

  getData(): void {
    this.apidataService.getData()
      .subscribe((data: any) => {
        this.countries = data.response;
        return this.selectedCountries = this.countries.filter(country => {
          return country.continent === 'Europe';
        });
      });
  }

  filterEl(option: string): any[] {
    this.selectedCountry = option;
    return this.selectedCountries = this.countries.filter(country => {
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
    return c2.deaths.total - c1.deaths.total;
  }

  sortByCases(c1: Country, c2: Country): number {
    return c2.cases.total - c1.cases.total;
  }

}
