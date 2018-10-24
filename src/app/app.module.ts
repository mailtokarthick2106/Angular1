import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NotesService } from './notes.service';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

// ------- Material imports---------
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatExpansionModule} from '@angular/material/expansion';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

import { NotesComponent } from './notes/notes.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NotesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatInputModule,
    MatFormFieldModule,
    MatExpansionModule,
    MatButtonModule,
    MatCardModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [NotesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
