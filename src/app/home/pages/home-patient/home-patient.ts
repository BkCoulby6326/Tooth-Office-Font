import { Component } from '@angular/core';
import { HeroBanner } from '../../components/hero-banner/hero-banner';
import { PatientHeader } from '../../../shared/components/header/patient-header/patient-header';
import { SearchBar } from '../../components/search-bar/search-bar';
import { CabinetList } from '../../components/cabinet-list/cabinet-list';

@Component({
  selector: 'app-patient-public',
  standalone: true,
  imports: [
    HeroBanner,
    PatientHeader,
    SearchBar,
    CabinetList
  ],
  templateUrl: './home-patient.html',
  styleUrl: './home-patient.css',
})
export class HomePatient {
 
  search = '';

  onSearch(value: string) {

    this.search = value;

  }
}
