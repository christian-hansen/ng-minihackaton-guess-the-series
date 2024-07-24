import { Component } from '@angular/core';
import { PointsService } from '../../service/points.service';
import { BadgeModule } from 'primeng/badge';
import { TooltipModule } from 'primeng/tooltip';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { DividerModule } from 'primeng/divider';
import { DialogService } from '../../service/dialog.service';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [BadgeModule, TooltipModule, ButtonModule, DialogModule, DividerModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  public infoVisible: boolean = false;

  constructor (public pointsService: PointsService, private dialogService: 
    DialogService) {
  }

  showDialog() {
    this.infoVisible = true;
    this.dialogService.setDialog(true)
  }

  closeDialog() {
    this.infoVisible = false;
    this.dialogService.setDialog(false)
  }
}
