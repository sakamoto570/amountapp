// const { createClient } = require('@supabase/supabase-js')

// exports.handler = async function insertData() {
//     const supabaseUrl = process.env.SUPABASE_URL;
//     const supabaseKey = process.env.SUPABASE_KEY;
//     const supabase = createClient(supabaseUrl, supabaseKey);

//     const { data, error } = await supabase
//         .from('amount_table')
//         .insert([
//             {
//                 // account_name: 'Sample Account',
//                 usage_date: '2024-09-16',
//                 item: 'Food',
//                 product_name: 'Apple',
//                 amount: 300,
//                 account: 'Credit Card',
//                 memo: 'Lunch'
//                 // user_id は挿入しない
//             }
//         ]);

//     if (error) {
//         return {
//             statusCode: 500,
//             body: JSON.stringify({ error: error.message })
//         };
//     } else {
//         console.log('Data inserted:', data);
//     }
// }