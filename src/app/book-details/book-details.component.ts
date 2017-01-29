import { Component, Input, OnInit } from '@angular/core';
import { CatalogService } from '../services/catalog.service';
import { Entry } from '../models/entry';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {

  @Input() book: Entry;
  recommendations: Object[] = [];

  constructor(private catalogService: CatalogService) { }

  ngOnInit() {
    for (let rec of this.book.fields.recommendation) {
      this.getRecommendation(rec.sys.id);
    }
  }

  getRecommendation(id: string): void {
    this.catalogService.getRecommendation(id).subscribe(
      data => this.recommendations.push(data),
      error => console.log(error));
  }

}
