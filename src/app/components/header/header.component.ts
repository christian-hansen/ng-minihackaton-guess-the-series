import { Component } from '@angular/core';
import { PointsService } from '../../service/points.service';
import { BadgeModule } from 'primeng/badge';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [BadgeModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {


  constructor (public pointsService: PointsService) {

  }

}
