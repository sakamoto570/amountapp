const { createClient } = require('@supabase/supabase-js')

exports.handler = async function insertBank(event, context) {
    if (event.httpMethod === 'OPTIONS') {
        return {
            statusCode: 200,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
            },
            body: ''
        };
    }

    const supabaseUrl = process.env.SUPABASE_URL;
    const supabaseKey = process.env.SUPABASE_KEY;
    const supabase = createClient(supabaseUrl, supabaseKey);

    const { last_insert_date, bank_name, amount } = JSON.parse(event.body);

    const { data, error } = await supabase
        .from('bank_table')
        .insert([
            {
                last_insert_date: last_insert_date,
                bank_name: bank_name,
                amount: amount,
                first_amount: amount
                // user_id は挿入しない
            }
        ]);

    if (error) {
        return {
            statusCode: 500,  // エラーの場合は500を返す
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',
            },
            body: JSON.stringify({ error: error.message })  // エラーメッセージを返す
        };
    } else {
        return {
            statusCode: 200,  // 成功時は200を返す
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',
            },
            body: JSON.stringify({ data })  // 挿入されたデータを返す
        };
    }
}