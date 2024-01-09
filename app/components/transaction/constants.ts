export type transaction = {
    id: string;
    date: string;
    amount: string;
    fee: string;
}

export const TransactionList: transaction[] = Array.from({ length: 19 }, (_, index) => ({
    id: `#${281209 + index}`,
    date: "7 July, 2023",
    amount: "₹1,278.23",
    fee: "₹22",
}));