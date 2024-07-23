import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DialogService {
  private dialog$ = new BehaviorSubject<boolean>(false)
  selectedDialog$ = this.dialog$.asObservable();

  constructor() { }

  setDialog(state: boolean) {
    this.dialog$.next(state);
  }
}
