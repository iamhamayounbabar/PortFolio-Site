import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CarouselComponent } from "../carousel/carousel.component";

@Component({
    selector: 'app-services',
    standalone: true,
    templateUrl: './services.component.html',
    styleUrl: './services.component.css',
    imports: [CarouselComponent]
})
export class ServicesComponent {

}
