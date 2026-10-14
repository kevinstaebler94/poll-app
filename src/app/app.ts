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

  async ngOnInit() {
    this.surveys = (await this.surveyService.getAllData()) ?? [];
  }
}
