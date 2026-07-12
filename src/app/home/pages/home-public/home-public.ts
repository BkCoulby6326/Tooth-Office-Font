import { Component } from '@angular/core';
import { HeroBanner } from '../../components/hero-banner/hero-banner';
import { PublicHeader } from '../../../shared/components/header/public-header/public-header';
import { SearchBar } from '../../components/search-bar/search-bar';

@Component({
  selector: 'app-home-public',
  standalone: true,
  imports: [
    HeroBanner,
    PublicHeader,
    SearchBar
  ],
  templateUrl: './home-public.html',
  styleUrl: './home-public.css',
})
export class HomePublic {
  onSearch(value: string) {
    console.log(value);
  }
}
