import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SearchInputComponent } from '../../../../shared/components/inputs/search-input/search-input';


@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [SearchInputComponent],
  templateUrl: './search-bar.html',
  styleUrl: './search-bar.css',
})
export class SearchBar {
   search = '';


  @Input()
  message = '';

  @Output()
  searchChange = new EventEmitter<string>();

  onSearch(value: string): void {
    this.search = value;
    this.searchChange.emit(this.search);
  }
}
