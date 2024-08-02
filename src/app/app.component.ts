import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  title = 'angular_tailwind_starter';
  public slider:string = ''; 

  submit() {
    alert(this.slider)
  }

  changeSlider(event:any){
    const background = document.getElementById('root') as HTMLInputElement;
    const submitButton = document.getElementById('submitButton') as HTMLInputElement;

    if (this.slider == "1") {
      background.className = "hero bg-base-100 min-h-screen";
    }
    else if (this.slider == "2") {
      background.className = "hero bg-base-200 min-h-screen";
    }
    else if (this.slider == "3") {
      background.className = "hero bg-base-200 min-h-screen";
    }
    else if (this.slider == "4") {
      background.className = "hero bg-base-300 min-h-screen";
    }
    else if (this.slider == "5") {
      background.className = "hero bg-base-300 min-h-screen";
    }
    else{
      background.className = "hero bg-base-200 min-h-screen";
    }

    submitButton.removeAttribute("disabled");
  }
}

