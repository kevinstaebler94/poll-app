import { Service } from "@angular/core";
import { createClient } from "@supabase/supabase-js";

@Service()
export class SurveyService {
  private readonly supabaseUrl = "https://hdfgkbyvwmjjxnulytwi.supabase.co";
  private readonly supabaseKey = "sb_publishable_yzJP0hh_KGHXfvfccyPMhw_mrliFxVE";

  supabase = createClient(this.supabaseUrl, this.supabaseKey);

  async getAllSurvaysData() {
    const { data, error } = await this.supabase.from("surveys").select("*");

    if (error) throw error;

    return data ?? [];
  }

  async getAllQuestionsData() {
    const { data, error } = await this.supabase.from("questions").select("*");

    if (error) throw error;

    return data ?? [];
  }

  async getAllVotesData() {
    const { data, error } = await this.supabase.from("votes").select("*");

    if (error) throw error;

    return data ?? [];
  }

  async getAllAnswerOptionData() {
    const { data, error } = await this.supabase.from("answer_options").select("*");

    if (error) throw error;

    return data ?? [];
  }
}
