import { Service } from "@angular/core";
import { createClient } from "@supabase/supabase-js";

@Service()
export class SurveyService {
  supabase = createClient(
    "https://hdfgkbyvwmjjxnulytwi.supabase.co",
    "sb_publishable_yzJP0hh_KGHXfvfccyPMhw_mrliFxVE"
  );

  async getAllData() {
    let { data, error } = await this.supabase.from("surveys").select("*");

    if (error) {
      console.error(error.message);
      return [];
    }

    return data;
  }
}
