import { HttpInterceptorFn, HttpResponse } from '@angular/common/http';
import { tap, finalize, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

// Fonction utilitaire pour générer un ID unique pour chaque requête
function generateRequestId(): string {
  return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}

export const loggingInterceptor: HttpInterceptorFn = (req, next) => {
  const startTime = performance.now();
  const requestId = generateRequestId();

  // Log de la requête
  console.group(`📤 HTTP Request [${requestId}]`);
  console.log(`Method: ${req.method}`);
  console.log(`URL: ${req.url}`);
  console.log(`Headers:`, req.headers);
  if (req.body) {
    console.log(`Body:`, req.body);
  }
  console.groupEnd();

  return next(req).pipe(
    tap((event) => {
      // Log de la réponse réussie - vérifier si c'est une HttpResponse
      if (event instanceof HttpResponse) {
        const duration = performance.now() - startTime;
        console.group(`📥 HTTP Response [${requestId}] ✅`);
        console.log(`Status: ${event.status} ${event.statusText}`);
        console.log(`Duration: ${duration.toFixed(2)}ms`);
        console.log(`Response:`, event.body);
        console.groupEnd();
      }
    }),
    catchError((error) => {
      // Log des erreurs
      const duration = performance.now() - startTime;
      console.group(`❌ HTTP Error [${requestId}]`);
      console.error(`Status: ${error.status} ${error.statusText}`);
      console.error(`Duration: ${duration.toFixed(2)}ms`);
      console.error(`Error Message:`, error.message);
      console.error(`Error:`, error);
      console.groupEnd();
      
      return throwError(() => error);
    }),
    finalize(() => {
      // Cleanup si nécessaire
    })
  );
};
