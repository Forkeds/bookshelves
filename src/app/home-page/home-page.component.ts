import { Component, OnInit } from '@angular/core';
import { CatalogService } from '../services/catalog.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  books: Object[];

  constructor(private catalogService: CatalogService) { }

  ngOnInit() {
    this.getLatestBooks(0, 10);
  }

  getLatestBooks(startIndex: number, numEntries: number): void {
    this.catalogService.getLatestBooks(startIndex, numEntries).subscribe(
      data => this.books = data.items,
      error => console.log(error));
  }
}
