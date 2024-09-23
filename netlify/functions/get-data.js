const { createClient } = require('@supabase/supabase-js')

exports.handler = async function (event, context) {
    const supabaseUrl = process.env.SUPABASE_URL;
    const supabaseKey = process.env.SUPABASE_KEY;
    const supabase = createClient(supabaseUrl, supabaseKey);

    const { data, error } = await supabase
        .from('account_table')
        .select('*');

    if (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: error.message })
        };
    }

    return {
        statusCode: 200,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': 'Content-Type',
            'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',
        },
        body: JSON.stringify(data)
    };
}
