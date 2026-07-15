import { Injectable, signal } from '@angular/core';

export type ToastSeverity = 'success' | 'info' | 'warn' | 'error';

export interface ToastOptions {
  detail?: string;
  life?: number;
  sticky?: boolean;
}

export interface ToastMessage extends Required<Pick<ToastOptions, 'sticky'>> {
  closing: boolean;
  id: number;
  severity: ToastSeverity;
  summary: string;
  detail?: string;
}

@Injectable({ providedIn: 'root' })
export class ToastService {
  private nextId = 0;
  private readonly toastMessages = signal<ToastMessage[]>([]);

  readonly messages = this.toastMessages.asReadonly();

  show(severity: ToastSeverity, summary: string, options: ToastOptions = {}): void {
    const id = ++this.nextId;
    const sticky = options.sticky ?? false;

    this.toastMessages.update((messages) => [
      ...messages,
      { id, severity, summary, detail: options.detail, sticky, closing: false },
    ]);

    if (!sticky) {
      setTimeout(() => this.dismiss(id), options.life ?? 5000);
    }
  }

  success(summary: string, options?: ToastOptions): void { this.show('success', summary, options); }
  info(summary: string, options?: ToastOptions): void { this.show('info', summary, options); }
  warn(summary: string, options?: ToastOptions): void { this.show('warn', summary, options); }
  error(summary: string, options?: ToastOptions): void { this.show('error', summary, options); }

  dismiss(id: number): void {
    const toast = this.toastMessages().find((message) => message.id === id);

    if (!toast || toast.closing) {
      return;
    }

    this.toastMessages.update((messages) =>
      messages.map((message) => message.id === id ? { ...message, closing: true } : message)
    );

    setTimeout(() => {
      this.toastMessages.update((messages) => messages.filter((message) => message.id !== id));
    }, 220);
  }

  clear(): void {
    this.toastMessages.set([]);
  }
}
