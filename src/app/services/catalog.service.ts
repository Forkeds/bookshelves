import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import {Config} from '../config';

@Injectable()
export class CatalogService {

  private entriesUrl: string;
  private accessToken: string;

  constructor(private http: Http) {
    this.entriesUrl = "https://cdn.contentful.com/spaces/" + Config.SPACE_ID + "/entries";
    this.accessToken = "access_token=" + Config.API_KEY;
  }

  getLatestBooks(startIndex: number, numEntries: number): Observable<any> {
    let params = "?content_type=book&skip=" + startIndex + "&limit=" + numEntries + "&order=sys.createdAt&";
    return this.http.get(this.entriesUrl + params + this.accessToken)
                    .map((response: Response) => response.json())
                    .catch(this.handleError);
  }

  getLatestBooksByCategory(startIndex: number, numEntries: number, category: string): Observable<any> {
    let params = "?content_type=book&skip=" + startIndex + "&limit=" + numEntries + "&order=sys.createdAt&fields.categories=" + category + "&include=0&";
    return this.http.get(this.entriesUrl + params + this.accessToken)
                    .map((response: Response) => response.json())
                    .catch(this.handleError);
  }

  getRecommendation(id: string): Observable<any> {
    let params = "/" + id + "?";
    return this.http.get(this.entriesUrl + params + this.accessToken)
                    .map((response: Response) => response.json())
                    .catch(this.handleError);
  }

  private handleError(error: Response) {
      console.error(error);
      if (error.json) {
        return Observable.throw(error.json().error);
      }
      return Observable.throw('Error calling API.');
  }
}
