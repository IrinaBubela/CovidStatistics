import { Component, OnInit } from '@angular/core';
import { ApidataService } from '../apidata.service';
import { Country } from '../Country';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})

export class StatisticsComponent implements OnInit {
  selectedCountry = '';
  countries: Country[] = [];
  countriesWichHaveNameOfContinent = ['Europe', 'Asia', 'Oceania', 'Africa', 'North-America', 'South-America'];
  selectedCountries: Country[] = [];
  sortVarType = '';
  sortReverse = false;

  constructor(private apidataService: ApidataService) { }

  ngOnInit(): void {
    this.getData();
    this.selectedCountry = 'Europe';
  }

  getData(): void {
    this.apidataService.getData()
      .subscribe((data: any) => {
        this.countries = data.response;
        return this.filteredArray('Europe');
      });
  }

  filterEl(option: string): any[] {
    this.selectedCountry = option;
    return this.filteredArray(option);
  }

  filteredArray(continent: any): any[] {
    return this.selectedCountries = this.countries.filter(country => {
      return country.continent === continent && !this.countriesWichHaveNameOfContinent.includes(country.country);
    });
  }

  sortType(sort: string): void {
    this.sortVarType = sort;
    this.sortReverse = !this.sortReverse;
    this.selectedCountries.sort(this.dynamicSort(sort));
  }

  dynamicSort(property: any): any {
    let sortOrder = -1;
    if (this.sortReverse) {
      sortOrder = 1;
    }

    return (a: any, b: any): any => {
      let result;
      if (property === 'deaths' || property === 'cases') {
        result = a[property].total < b[property].total ? 1 : a[property].total > b[property].total ? -1 : 0;
      } else {
        result = a[property] < b[property] ? 1 : a[property] > b[property] ? -1 : 0;
      }
      return result * sortOrder;
    };
  }
}
