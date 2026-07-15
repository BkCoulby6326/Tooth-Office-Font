import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-search-input',
  standalone: true,
  templateUrl: './search-input.html',
  styleUrl: './search-input.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchInputComponent {
  @Input() value = '';
  @Input() placeholder = 'Rechercher...';
  @Input() ariaLabel = 'Rechercher';
  @Input() disabled = false;
  @Output() readonly valueChange = new EventEmitter<string>();

  protected onInput(event: Event): void {
    this.valueChange.emit((event.target as HTMLInputElement).value);
  }

  protected clear(): void {
    this.valueChange.emit('');
  }
}
