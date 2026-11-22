import { Component, input } from "@angular/core";

@Component({
  imports: [],
  selector: "app-survey-card",
  styleUrl: "./survey-card.scss",
  templateUrl: "./survey-card.html",
})
export class SurveyCard {
  survey = input.required<any>();

  getRemainingDays(expiresAt: string | null): number | null {
    if (expiresAt === null) return null;

    const expirationDate = new Date(expiresAt).getTime();
    const currentDate = Date.now();
    const difference = expirationDate - currentDate;
    const millisecondsPerDay = 1000 * 60 * 60 * 24;

    return Math.max(0, Math.ceil(difference / millisecondsPerDay));
  }
}
