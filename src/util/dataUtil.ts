export type insertDataType = {
    // account_name: 'Sample Account',
    use_date: Date,
    item: string,
    item_name: string,
    amount: number,
    bank: string,
    memo: string
    // user_id は挿入しない
}

export type insertBankType = {
    last_insert_date: Date,
    bank_name: string,
    amount: number,
    first_amount: number,
    // user_id は挿入しない
}


export const receptionDate = [
    { value: "1", label: "1日" },
    { value: "2", label: "2日" },
    { value: "3", label: "3日" },
    { value: "4", label: "4日" },
    { value: "5", label: "5日" },
    { value: "6", label: "6日" },
    { value: "7", label: "7日" },
    { value: "8", label: "8日" },
    { value: "9", label: "9日" },
    { value: "10", label: "10日" },
    { value: "11", label: "11日" },
    { value: "12", label: "12日" },
    { value: "13", label: "13日" },
    { value: "14", label: "14日" },
    { value: "15", label: "15日" },
    { value: "16", label: "16日" },
    { value: "17", label: "17日" },
    { value: "18", label: "18日" },
    { value: "19", label: "19日" },
    { value: "20", label: "20日" },
    { value: "21", label: "21日" },
    { value: "22", label: "22日" },
    { value: "23", label: "23日" },
    { value: "24", label: "24日" },
    { value: "25", label: "25日" },
    { value: "26", label: "26日" },
    { value: "27", label: "27日" },
    { value: "28", label: "28日" },
    { value: "29", label: "29日" },
    { value: "30", label: "30日" },
    { value: "31", label: "31日" },
]

export const depositOptions = [
    {
        value: "1",
        label: "出金",
    },
    {
        value: "2",
        label: "入金",
    },
];

export const assetsOptions = [
    {
        value: "1",
        label: "現金",
    },
    {
        value: "2",
        label: "〇〇銀行",
    },
];