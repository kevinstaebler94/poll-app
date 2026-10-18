import { Component, inject, signal, OnInit } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { SurveyService } from "./services/survey.service";

@Component({
  imports: [RouterOutlet],
  selector: "app-root",
  styleUrl: "./app.scss",
  templateUrl: "./app.html",
})
export class App {
  protected readonly title = signal("Poll-App");
  surveyService = inject(SurveyService);

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
