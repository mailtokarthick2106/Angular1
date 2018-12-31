import { Component } from '@angular/core';
import { NotesService } from './notes.service';
import { Note } from './note';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  errMessage: string;
  note = new Note();
  notes: Note[] = [];
  title: string;
  constructor(private notesservices: NotesService) { }
  ngOnInit() {
    this.loadInfo();
  }
  done() {
    if (typeof this.note.title === 'undefined' && typeof this.note.text === 'undefined') {
      this.errMessage = 'Title and Text both are required fields';
    } else if (typeof this.note.title === 'undefined') {
      this.errMessage = 'title are mandatory';


    } else if (typeof this.note.text === 'undefined') {
      this.errMessage = 'text are mandatory';
    } else {
      this.notesservices.addNote(this.note).subscribe(data => {
        if (data != null) {
          this.notes[0] = this.note;
        }
      },
        error => {
          this.errMessage = 'Http failure response for http://localhost:3000/notes: 404 Not Found';
          console.log('error in service call' + error);
        },
        () => console.log('Service was complete'));
    }
  }
  loadInfo() {
    this.notesservices.getNotes().subscribe(data => {
      if (data != null) {
        this.notes = data;
      }
    },
      error => {
        this.errMessage = 'Http failure response for http://localhost:3000/notes: 404 Not Found';

      },
      () => console.log('Service was complete'));

  }
}
