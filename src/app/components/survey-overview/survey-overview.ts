import { Component, inject, OnInit, signal } from "@angular/core";
import { SurveyService } from "../../services/survey.service";
import { SurveyCard } from "../survey-card/survey-card";
import { SurveyDetails } from "../survey-details/survey-details";

@Component({
  imports: [SurveyCard, SurveyDetails],
  selector: "app-survey-overview",
  styleUrl: "./survey-overview.scss",
  templateUrl: "./survey-overview.html",
})
export class SurveyOverview {
  private readonly surveyService = inject(SurveyService);

  surveys = signal<any[]>([]);
  expiringSurveys = signal<any[]>([]);

  async ngOnInit() {
    const surveys = await this.surveyService.getAllSurveysData();
    this.surveys.set(surveys);

    const expiringSurveys = await this.surveyService.getExpiringSurveysData();
    this.expiringSurveys.set(expiringSurveys);
  }
}
