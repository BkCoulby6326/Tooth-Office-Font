import { Component, OnDestroy, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-hero-banner',
  imports: [],
  standalone: true,
  templateUrl: './hero-banner.html',
  styleUrl: './hero-banner.css',
})
export class HeroBanner implements OnInit, OnDestroy {
  protected readonly banners = [
    {
      image: '/assets/images/banner1.png',
      title: 'Un sourire en bonne santé commence ici',
      description: 'Gérez facilement vos rendez-vous et prenez soin de votre santé bucco-dentaire.',
    },
    {
      image: '/assets/images/banner2.png',
      title: `Révélez l'éclat de votre sourire`,
      description: 'Découvrez des soins esthétiques réalisés par des professionnels qualifiés.',
    },
    {
      image: '/assets/images/banner3.png',
      title: 'Trouvez le bon dentiste, au bon moment',
      description: 'Prenez rendez-vous en quelques clics avec des cabinets dentaires près de chez vous.',
    },
  ];

  protected readonly activeBannerIndex = signal(0);
  private carouselTimer?: ReturnType<typeof setInterval>;

  ngOnInit(): void {
    this.carouselTimer = setInterval(() => {
      this.activeBannerIndex.update((index) => (index + 1) % this.banners.length);
    }, 2000);
  }

  ngOnDestroy(): void {
    clearInterval(this.carouselTimer);
  }
}
