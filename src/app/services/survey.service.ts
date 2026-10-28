import { Service } from "@angular/core";
import { createClient } from "@supabase/supabase-js";

@Service()
export class SurveyService {
  private readonly supabaseUrl = "https://hdfgkbyvwmjjxnulytwi.supabase.co";
  private readonly supabaseKey = "sb_publishable_yzJP0hh_KGHXfvfccyPMhw_mrliFxVE";

  supabase = createClient(this.supabaseUrl, this.supabaseKey);

  async getAllSurveysData() {
    const { data, error } = await this.supabase.from("surveys").select("*");

    if (error) throw error;

    return data ?? [];
  }

  async getExpiringSurveysData() {
    const { data, error } = await this.supabase
      .from("surveys")
      .select("*")
      .gt("expires_at", new Date().toISOString())
      .order("expires_at", { ascending: true })
      .limit(3);

    if (error) throw error;

    return data ?? [];
  }

  // async getAllQuestionsData() {
  //   const { data, error } = await this.supabase.from("questions").select("*");

  //   if (error) throw error;

  //   return data ?? [];
  // }

  // async getAllVotesData() {
  //   const { data, error } = await this.supabase.from("votes").select("*");

  //   if (error) throw error;

  //   return data ?? [];
  // }

  // async getAllAnswerOptionData() {
  //   const { data, error } = await this.supabase.from("answer_options").select("*");

  //   if (error) throw error;

  //   return data ?? [];
  // }
}
