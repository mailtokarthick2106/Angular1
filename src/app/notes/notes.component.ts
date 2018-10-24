import { Component, OnInit } from '@angular/core';
import { Note } from '../note';
import { NotesService } from '../notes.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {
  note : Note = new Note();
  notes : Array<Note> = [];
  constructor(private notesService : NotesService) {
      this.notesService.getNotes().subscribe(
      data => this.notes = data,
      err => console.log(err)
    ) }

  ngOnInit() {

  }
  takeNotes(){
    this.notes.push(this.note);
    this.notesService.addNote(this.note).subscribe(
    data => {},
    err =>{
      const index:number =
      this.notes.findIndex(note => note.title === this.note.title);
      this.notes.splice(index,1);
    }
  )
  this.note = new Note();
  console.log(this.note.title+" "+this.note.text);
  }

}
