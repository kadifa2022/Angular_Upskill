import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit{
mentors: string [] = ['Ower', 'Mat', 'Sahin'];
mentorSelected: string ='Ower';
constructor(){}



  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  onSelectedMentor(mentor: string){
    this.mentorSelected = mentor;
   

  }
  onLikeMentor(event: any){
    console.log(event);
  }



}
