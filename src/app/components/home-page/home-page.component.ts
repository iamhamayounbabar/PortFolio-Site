import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { ServicesComponent } from "../services/services.component";
import { MySkillsComponent } from "../my-skills/my-skills.component";
import { DetailsComponent } from '../details/details.component';
import { ProjectsCarouselComponent } from "../projects-carousel/projects-carousel.component";
import { ClientsSatisfiedComponent } from "../clients-satisfied/clients-satisfied.component";
import { CarouselComponent } from '../carousel/carousel.component';

@Component({
    selector: 'app-home-page',
    standalone: true,
    templateUrl: './home-page.component.html',
    styleUrl: './home-page.component.css',
    imports: [NavbarComponent, CarouselComponent, ServicesComponent, MySkillsComponent, DetailsComponent, ProjectsCarouselComponent, ClientsSatisfiedComponent]
})
export class HomePageComponent {

}
