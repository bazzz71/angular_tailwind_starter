import { animate, keyframes, style, transition, trigger } from '@angular/animations';
import { Component, signal } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  animations:[
    trigger('jumpOverMoon', [
      transition(':enter', [
        animate('3s ease-in-out', keyframes([
          style({ transform: 'translateX(-80%) translateY(0)', offset: 0 }),       
          style({ transform: 'translateX(-60%) translateY(-500px)', offset: 0.1 }),  
          style({ transform: 'translateX(-40%) translateY(-700px)', offset: 0.2 }), 
          style({ transform: 'translateX(-20%) translateY(-800px)', offset: 0.3 }),   
          style({ transform: 'translateX(0) translateY(-800px)', offset: 0.4 }),   
          style({ transform: 'translateX(20%) translateY(-700px)', offset: 0.5 }),  
          style({ transform: 'translateX(40%) translateY(-500px)', offset: 0.6 }),     
          style({ transform: 'translateX(60%) translateY(0)', offset: 0.7 }),      
          style({ transform: 'translateX(80%) translateY(0)', offset: 1.0 })  
        ]))
      ])
    ])
  ]
})
export class AppComponent {

  title = 'angular_tailwind_starter';
  public cow = document.getElementById('cow');
  public feeling = signal('');

  updateFeeling(feeling:string){
    this.feeling.set(feeling);

    if(this.feeling() === 'Over the Moon'){
      this.cow!.style.animation = 'jump 5s ease-in-out infinite';
    }

    setTimeout(() => this.feeling.set(''), 5000);
  }

}
