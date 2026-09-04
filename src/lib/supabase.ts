import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://zhncqhkaxzeyinkxzcge.supabase.co';
const supabaseAnonKey = 'sb_publishable_XXYMY4OfyZSGTWfPkscjVA_RUrhZ1Lb';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);