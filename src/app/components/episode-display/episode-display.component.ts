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
import { PointsService } from '../../service/points.service';

@Component({
  selector: 'app-episode-display',
  standalone: true,
  imports: [FormsModule, CommonModule, ButtonModule, TooltipModule, ProgressSpinnerModule, TagModule, DividerModule, BadgeModule],
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

  constructor(
    private omdbService: OmdbService,
    private episodedb: EpisodedbService,
    private pointsService: PointsService
  ) {}

  ngOnInit(): void {
    this.pointsService.points = 0;
    this.loadEpisode();
  }

  loadEpisode(): void {
    this.reset();
    this.answeredCorrect = false;
    const searchId = this.episodedb.getRandomEpisode() as string;

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
  }

  answer(isCorrect: boolean) {
    this.answered = true;
    if (isCorrect) {
      this.answeredCorrect = true;
      this.points = this.getPoints()
      this.pointsService.points += this.points;      
    }
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
