import { Injectable } from "@angular/core";

export class Population {
  value: string;
  number: number;
  total: number;
}

let populatinData: Population[] = [
  {
    value: 'Duruşsuz Süre',
    number: 1194137,
    total: 791000000
  },
  {
    value: 'Yapılabilir [Çalışılabilir]',
    number: 7131405,
    total: 978000000
  },
  {
    value: 'Yapılabilir [Çalışan]',
    number: 4335747,
    total: 1262000000
  },
  {
    value: 'Yapılabilir [Duruşsuz]',
    number: 4335646,
    total: 1650000000
  },
  {
    value: 'Yapılabilir [Seçim]',
    number: 9596380,
    total: 1650000000
  },
  {
    value: 'Yapılabilir [Toplam]',
    number: 9639580,
    total: 799999
  },
];

@Injectable()
export class DxDemoService {
  getPopulationData(): Population[] {
    return populatinData;
  }
}
