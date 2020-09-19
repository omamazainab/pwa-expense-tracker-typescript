export interface TransactionType  {
    id: number,
    description: String,
    amount: number
}

export interface InitialStateType {
    transactions : TransactionType[]
}