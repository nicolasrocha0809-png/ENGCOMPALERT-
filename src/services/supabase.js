import 'react-native-url-polyfill/auto';
import { createClient } from '@supabase/supabase-js';
// Substitua pelas suas chaves do painel do Supabase (Project Settings > API)
const supabaseUrl = 'https://pjgycouxgpdahjtxqrbe.supabase.co';
const supabaseKey = 'sb_publishable_IoZDqhOlccBn2YVmuOwS0Q_h7kQDuBm';
export const supabase = createClient(supabaseUrl, supabaseKey);