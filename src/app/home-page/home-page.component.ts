import { Component, OnInit } from '@angular/core';
import { CatalogService } from '../services/catalog.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  books: Object[];
  category: string;

  constructor(private route: ActivatedRoute, private catalogService: CatalogService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params['category']) {
        this.category = params['category'];
      }
      this.getLatestBooks(0, 10);
      });
  }

  getLatestBooks(startIndex: number, numEntries: number): void {
    if (this.category) {
      this.catalogService.getLatestBooksByCategory(startIndex, numEntries, this.category).subscribe(
        data => this.books = data.items,
        error => console.log(error));
    }
    else {
      this.catalogService.getLatestBooks(startIndex, numEntries).subscribe(
      data => this.books = data.items,
      error => console.log(error));
    }
  }
}
