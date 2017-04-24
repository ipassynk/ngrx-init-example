import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {AppState} from 'app/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  user$;

  constructor(private store: Store<AppState>) {
  }

  ngOnInit(): void {
    this.user$ = this.store.select('user');
  }
}
