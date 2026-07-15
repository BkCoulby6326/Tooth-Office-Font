import { ChangeDetectionStrategy, Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-form-input',
  standalone: true,
  templateUrl: './form-input.html',
  styleUrl: './form-input.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => FormInputComponent), multi: true }],
})
export class FormInputComponent implements ControlValueAccessor {
  @Input() label = '';
  @Input() placeholder = '';
  @Input() type: 'email' | 'number' | 'password' | 'tel' | 'text' = 'text';
  @Input() icon = '';
  @Input() autocomplete = '';
  @Input() id = `form-input-${crypto.randomUUID()}`;

  protected value = '';
  protected disabled = false;
  private onChange = (_value: string): void => undefined;
  private onTouched = (): void => undefined;

  writeValue(value: string | null): void { this.value = value ?? ''; }
  registerOnChange(fn: (value: string) => void): void { this.onChange = fn; }
  registerOnTouched(fn: () => void): void { this.onTouched = fn; }
  setDisabledState(disabled: boolean): void { this.disabled = disabled; }

  protected updateValue(event: Event): void {
    this.value = (event.target as HTMLInputElement).value;
    this.onChange(this.value);
  }

  protected markAsTouched(): void { this.onTouched(); }
}
