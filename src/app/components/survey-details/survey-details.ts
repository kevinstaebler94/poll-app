import { Component, input } from "@angular/core";
import { SurveyCard } from "../survey-card/survey-card";

@Component({
  imports: [SurveyCard],
  selector: "app-survey-details",
  styleUrl: "./survey-details.scss",
  templateUrl: "./survey-details.html",
})
export class SurveyDetails {
  readonly surveys = input.required<any[]>();
}
