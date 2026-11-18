import { Component, signal } from "@angular/core";

@Component({
  imports: [],
  selector: "app-survey-details",
  styleUrl: "./survey-details.scss",
  templateUrl: "./survey-details.html",
})
export class SurveyDetails {
  readonly selectedTab = signal<"active" | "past">("active");
}
