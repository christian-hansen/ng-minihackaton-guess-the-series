import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { OmdbService } from '../../service/omdb.service';
import { CommonModule } from '@angular/common';
import { EpisodedbService } from '../../service/episodedb.service';
import { ButtonModule } from 'primeng/button';
import { TooltipModule } from 'primeng/tooltip';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { TagModule } from 'primeng/tag';
import { DividerModule } from 'primeng/divider';
import { BadgeModule } from 'primeng/badge';
import { MessagesModule } from 'primeng/messages';

import { PointsService } from '../../service/points.service';
import { DialogService } from '../../service/dialog.service';
import { Message } from 'primeng/api';

@Component({
  selector: 'app-episode-display',
  standalone: true,
  imports: [FormsModule, CommonModule, ButtonModule, TooltipModule, ProgressSpinnerModule, TagModule, DividerModule, BadgeModule, MessagesModule],
  templateUrl: './episode-display.component.html',
  styleUrl: './episode-display.component.scss',
})
export class EpisodeDisplayComponent {
  episode: any;
  seriesTitle: string = '';
  showImage: boolean = false;
  showDetails: boolean = false;
  episodeIds: string[] = [];
  answered: boolean = false;
  answerOptions: { title: string; isCorrect: boolean }[] = [];
  answeredCorrect: boolean = false;
  isLoading: boolean = false;
  points: number = 0;
  dialogActive: boolean = false;
  loadingCounter: number = 0;
  private intervalId: any;
  messages!: Message[];

  constructor(
    private omdbService: OmdbService,
    private episodedb: EpisodedbService,
    private pointsService: PointsService,
    private dialogService: DialogService,
  ) {}

  ngOnInit(): void {
    this.pointsService.points = 0;
    this.loadEpisode();
    this.dialogService.selectedDialog$.subscribe((value) => {
      this.dialogActive = value;
  });  
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }


  loadEpisode(): void {
    this.reset();
    this.answeredCorrect = false;
    const searchId = this.episodedb.getRandomEpisode() as string;
    this.startLoadingCounter();

      this.omdbService.getImdbEntry(searchId).subscribe((episode) => {
      this.episode = episode;

      if (
        (this.episode.Response = 'True' &&
          this.episode.Type === 'episode' &&
          this.episode.seriesId !== 'N/A' &&
          this.episode.Plot !== 'N/A')
      ) {
        this.seriesTitle = this.episodedb.getSeriesTitle(this.episode.seriesID) as string;
        this.answerOptions = [
          { title: this.seriesTitle, isCorrect: true },
          ...this.episodedb
            .getRandomSeriesTitles(this.episode.seriesID, 2)
            .map((title) => ({ title, isCorrect: false })),
        ];

        this.answerOptions = this.answerOptions.sort(() => Math.random() - 0.5);
        this.stopLoadingCounter();
        this.isLoading = false;
      }
      else return;
    });

}

  showMoreDetails() {
    this.showDetails = true;
  }

  showEpisodeImage() {
    this.showImage = true;
  }

  reset() {
    this.isLoading = true;
    this.episode = {};
    this.seriesTitle = '';
    this.answered = false;
    this.answerOptions = [];
    this.showImage = false;
    this.showDetails = false;
    this.points = 0;
    this.loadingCounter = 0;
  }

  startLoadingCounter() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }

    this.loadingCounter = 0;
    this.intervalId = setInterval(() => {
      this.loadingCounter++;
      if(this.loadingCounter === 10) {
        this.messages = this.addWarnMessage(1)
      }

      if(this.loadingCounter === 30) {
        this.messages = this.addWarnMessage(2)
      }

      if(this.loadingCounter === 60) {
        this.messages = this.addWarnMessage(3)
      }
    }, 1000);
  }

  stopLoadingCounter() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }

  answer(isCorrect: boolean) {
    this.answered = true;
    if (isCorrect) {
      this.answeredCorrect = true;
      this.points = this.getPoints();
      this.pointsService.points += this.points;
    }
  }

  addWarnMessage(number: number) {
    if (number = 1) return [{severity:'info', detail:'Sorry, the series database response takes a bit longer'}];
    else if (number = 2) return [{severity:'warn', detail:'Please wait for the series database to respond. Unfortunately sometimes the requests can take a while.'}];
    else if (number = 3) return [{severity:'error', detail:'There seems to be an issue with the series database. Please reload the page or wait for the series database to respond.'}];
    else return [{severity:'success', detail:'Successfully loaded'}];
}

  getPoints() {
    if (!this.showImage && !this.showDetails) {
      return 5;
    }
    else if (!this.showImage && this.showDetails) {
      return 2;
    }
    else {
      return 1;
    }
  }
}
