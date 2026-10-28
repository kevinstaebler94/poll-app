import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";
import { SurveyOverview } from "../survey-overview/survey-overview";

@Component({
  imports: [RouterLink, SurveyOverview],
  selector: "app-home",
  styleUrl: "./home.scss",
  templateUrl: "./home.html",
})
export class Home {}
