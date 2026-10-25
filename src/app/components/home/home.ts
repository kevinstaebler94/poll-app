import { Component, inject, OnInit } from "@angular/core";
import { SurveyService } from "../../services/survey.service";
import { CreateSurvey } from "../create-survey/create-survey";
import { RouterLink } from "@angular/router";

@Component({
  imports: [RouterLink],
  selector: "app-home",
  styleUrl: "./home.scss",
  templateUrl: "./home.html",
})
export class Home {
  private readonly surveyService = inject(SurveyService);

  surveys: any[] = [];
  questions: any[] = [];
  votes: any[] = [];
  answerOptions: any[] = [];

  async ngOnInit() {
    this.surveys = await this.surveyService.getAllSurvaysData();
    this.questions = await this.surveyService.getAllQuestionsData();
    this.votes = await this.surveyService.getAllVotesData();
    this.answerOptions = await this.surveyService.getAllAnswerOptionData();
  }
}
