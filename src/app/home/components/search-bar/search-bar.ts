import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';


@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [
     FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule
  ],
  templateUrl: './search-bar.html',
  styleUrl: './search-bar.css',
})
export class SearchBar {
   search = '';

  @Output()
  searchChange = new EventEmitter<string>();

  onSearch(): void {
    this.searchChange.emit(this.search);
  }

  clear(): void {
    this.search = '';
    this.searchChange.emit('');
  }

}
