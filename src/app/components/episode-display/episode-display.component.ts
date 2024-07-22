import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { OmdbService } from '../../service/omdb.service';
import { CommonModule } from '@angular/common';
import { EpisodedbService } from '../../service/episodedb.service';

@Component({
  selector: 'app-episode-display',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './episode-display.component.html',
  styleUrl: './episode-display.component.scss',
})
export class EpisodeDisplayComponent {
  episode: any;
  seriesTitle: string = '';
  showImage: boolean = false;
  episodeIds: string[] = [];
  answered: boolean = false;
  answerOptions: { title: string; isCorrect: boolean }[] = [];
  answeredCorrect: boolean = false;
  isLoading: boolean = false;

  constructor(
    private omdbService: OmdbService,
    private episodedb: EpisodedbService
  ) {}

  ngOnInit(): void {
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

      if (this.episode.Type !== 'episode') {
        console.log('No episode', this.episode.Type);
        return;
      }
      if (this.episode.Response !== 'True') {
        console.log('No respone', this.episode.Response);
        return;
      }
    });
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
  }

  answer(isCorrect: boolean) {
    this.answered = true;
    if (isCorrect) {
      this.answeredCorrect = true;
    }
  }
}
