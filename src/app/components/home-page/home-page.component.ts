import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { ServicesComponent } from "../services/services.component";
import { MySkillsComponent } from "../my-skills/my-skills.component";

@Component({
    selector: 'app-home-page',
    standalone: true,
    templateUrl: './home-page.component.html',
    styleUrl: './home-page.component.css',
    imports: [NavbarComponent, ServicesComponent, MySkillsComponent]
})
export class HomePageComponent {

}
