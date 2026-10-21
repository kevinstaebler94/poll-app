import { Routes } from "@angular/router";
import { Home } from "./components/home/home";
import { CreateSurvey } from "./components/create-survey/create-survey";
import { SurveyDetails } from "./components/survey-details/survey-details";

export const routes: Routes = [
  {
    path: "",
    component: Home,
  },
  {
    path: "",
    component: CreateSurvey,
  },
  {
    path: "",
    component: SurveyDetails,
  },
];
