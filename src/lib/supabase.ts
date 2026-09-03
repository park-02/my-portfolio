import { createClient } from '@supabase/supabase-js';

// 우선 직접 값을 넣어 에러를 해소합니다.
const supabaseUrl = 'https://zhncqhkaxzeyinkxzcge.supabase.co';
const supabaseAnonKey = 'sb_publishable_XXYMY4OfyZSGTWfPkscjVA_RUrhZ1Lb';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);