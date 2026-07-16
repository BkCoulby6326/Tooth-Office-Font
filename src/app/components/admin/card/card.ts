import { Component, inject, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Dashboard } from '../../../models/dashboard';
import { DashboardService } from '../../../Services/dashbord.service';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.html',
  styleUrl: './card.css',
})
export class Card {
  private dashboardService = inject(DashboardService);

  statistiques?: Dashboard;

  ngOnInit(): void {
    this.chargerStatistiques();
  }

  chargerStatistiques(): void {
    this.dashboardService.getStatistiques().subscribe({
      next: (data) => {
        this.statistiques = data;
      },
      error: (err) => {
        console.error(err);
      }
    });
  }
}