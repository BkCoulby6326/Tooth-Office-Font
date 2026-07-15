import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ToastService } from '../../services/toast.service';

@Component({
  selector: 'app-toast',
  standalone: true,
  templateUrl: './toast.component.html',
  styleUrl: './toast.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppToastComponent {
  protected readonly toastService = inject(ToastService);

  protected iconClass(severity: string): string {
    const icons: Record<string, string> = {
      success: 'bi-check-lg',
      info: 'bi-info-lg',
      warn: 'bi-exclamation-lg',
      error: 'bi-x-lg',
    };

    return `bi ${icons[severity] ?? icons['info']}`;
  }
}
