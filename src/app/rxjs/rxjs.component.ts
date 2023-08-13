import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css']
})
export class RxjsComponent implements OnInit, AfterViewInit{

  word: string = '';


 

  word$: Observable<string> = new Observable<string>(
  (observer) => {
    observer.next("First");
    observer.next("Second");
    observer.next("Third");
    observer.next("Fourth");
    observer.complete();

  }
  );

  constructor(){}
  

  ngOnInit(): void {
  
    this.word$.subscribe({
      next: (data) => this.word = data,
      error: (error) => console.log(error),
      complete: () => console.log('completed')


    })
  }

  ngAfterViewInit(): void {
    throw new Error('Method not implemented.');
  }




}
