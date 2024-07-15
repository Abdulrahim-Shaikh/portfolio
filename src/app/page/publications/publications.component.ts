import { Component, OnInit } from '@angular/core';

interface Publication {
  id: string,
  paperTitle: string,
  journalTitle: string,
  journalLogo: string
  releaseYear: string
}

@Component({
  selector: 'app-publications',
  templateUrl: './publications.component.html',
  styleUrls: ['./publications.component.css']
})
export class PublicationsComponent implements OnInit {
  publications: Publication[] | undefined;
  responsiveOptions: any[] | undefined;
  publicationViewIndex: number = 0;

  ngOnInit(): void {
    this.publicationViewIndex = 0;
    this.responsiveOptions = [
      {
        breakpoint: '1199px',
        numVisible: 1,
        numScroll: 1
      },
      {
        breakpoint: '991px',
        numVisible: 2,
        numScroll: 1
      },
      {
        breakpoint: '767px',
        numVisible: 1,
        numScroll: 1
      }
    ];

    this.publications = [
      {
        id: '001',
        paperTitle: 'Decision-Tree-based Ensemble Learning Models for Long-Term Traffic Intensity Forecasting and Analysis of Congestion Treatment Strategies',
        journalTitle: 'International Journal on Recent and Innovation Trends in Computing and Communication (IJRITCC)',
        journalLogo: '/assets/ijritcc_logo.jpeg',
        releaseYear: '2023'
      },
      {
        id: '002',
        paperTitle: 'Satellite Image Classification with Deep Learning Model ResNet',
        journalTitle: 'Neural Computing and Applications (NCAA) - Springer',
        journalLogo: '/assets/springer.webp',
        releaseYear: '2023'
      }
    ];
  }


  nextPublication(): void {
    this.publicationViewIndex = this.publicationViewIndex == 0? 1: 0;
  }

  previousPublication(): void {
    this.publicationViewIndex = this.publicationViewIndex == 1? 0: 1;
  }

}
