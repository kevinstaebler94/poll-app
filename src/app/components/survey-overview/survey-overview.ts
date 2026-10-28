import { Component, inject, OnInit } from "@angular/core";
import { SurveyService } from "../../services/survey.service";
import { SurveyCard } from "../survey-card/survey-card";

@Component({
  imports: [SurveyCard],
  selector: "app-survey-overview",
  styleUrl: "./survey-overview.scss",
  templateUrl: "./survey-overview.html",
})
export class SurveyOverview {
  private readonly surveyService = inject(SurveyService);

  surveys: any[] = [];
  expiringSurveys: any[] = [];

  async ngOnInit() {
    this.surveys = await this.surveyService.getAllSurveysData();
    this.expiringSurveys = await this.surveyService.getExpiringSurveysData();
  }
}
