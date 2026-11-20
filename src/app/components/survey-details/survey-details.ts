import { Component, signal, input } from "@angular/core";
import { SurveyCard } from "../survey-card/survey-card";

@Component({
  imports: [SurveyCard],
  selector: "app-survey-details",
  styleUrl: "./survey-details.scss",
  templateUrl: "./survey-details.html",
})
export class SurveyDetails {
  readonly selectedTab = signal<"active" | "past">("active");
  readonly surveys = input.required<any[]>();
}
