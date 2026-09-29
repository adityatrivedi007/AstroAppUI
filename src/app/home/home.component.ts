import { Component, OnInit } from '@angular/core';

export interface Planet {
  id: number;
  name: string;
  isselected: boolean;
}

export interface House {
  id: number;
  name: string;
  planetList: Planet[];
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  _houselist: House[] = [];
  kundliType: string = '1'; // Default to Lagna (1)

  // Store the results for our two modern charts
  lagnaChartData: Record<number, string[]> = {};
  varshaChartData: Record<number, string[]> = {};

  ngOnInit() {
    this.getHouses();
    // Initialize empty arrays for all 12 houses
    for (let i = 1; i <= 12; i++) {
      this.lagnaChartData[i] = [];
      this.varshaChartData[i] = [];
    }
  }

  getplanets(): Planet[] {
    return [
      { id: 1, name: 'Su', isselected: false },
      { id: 2, name: 'Mo', isselected: false },
      { id: 3, name: 'Ma', isselected: false },
      { id: 4, name: 'Me', isselected: false },
      { id: 5, name: 'Ju', isselected: false },
      { id: 6, name: 'Ve', isselected: false },
      { id: 7, name: 'Sa', isselected: false },
      { id: 8, name: 'Ra', isselected: false },
      { id: 9, name: 'Ke', isselected: false },
    ];
  }

  getHouses() {
    this._houselist = Array.from({ length: 12 }, (_, i) => ({
      id: i + 1,
      name: (i + 1).toString(),
      planetList: this.getplanets(),
    }));
  }

  onsubmit() {
    // Determine which chart we are actively saving to
    const targetChart =
      this.kundliType === '1' ? this.lagnaChartData : this.varshaChartData;

    this._houselist.forEach((house) => {
      // Find all selected planets for this house
      const selectedPlanets = house.planetList
        .filter((planet) => planet.isselected)
        .map((planet) => planet.name);

      targetChart[house.id] = selectedPlanets;
    });
  }

  printThisPage() {
    window.print();
  }
}
