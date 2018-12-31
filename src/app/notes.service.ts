import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Note } from './note';
import { environment } from '../environments/environment';
const API_URL = environment.apiUrl;
@Injectable()
export class NotesService {

  constructor(private _http: HttpClient) {

  }

  getNotes(): Observable<Array<Note>> {
    return this._http.get(API_URL + '/notes')
      .map(data => {
        if (data) {
        }

        return data;
      }).catch(this.handleError);
  }

  addNote(note: Note): Observable<Note> {
    return this._http
      .post(API_URL + '/notes', note)
      .map(data => {
        if (data) {
        }

        return data;
      }).catch(this.handleError);
  }
  private handleError(error: Response | any) {
    console.error('ApiService::handleError', error);
    return Observable.throw(error);
  }
}
