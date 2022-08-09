import mongoose from "mongoose";

const TransactionSchema = new mongoose.Schema({

  accountNumber: {

    type: String,
    required: [true, "Account number is required"]}
    ,
    accountType: {
        type: String,
        required: [true, "Account type is required"],
        // type: 'SAVINGS_ACCOUNT',
    }
        ,
    amount: {
        type: Number,
        required: [true, "Amount is required"],
    }
    ,currency:{
        type: String,
    },channel:{
        type:String,
        required: [true, "Channel is required Channel from which the transaction was done such as ATM, POS, Mobile, USSD"],
    },narration:{
        type:String,
        required: [true, "A description of the transaction"],

    },transactionTime:{
        type:Date,
        required: [true, "Transaction time is required"],
    },transactionType:{
        type:String,
        required: [true, "Transaction type is required"],
    },
    valueDate:{
        type:Date,required: [true, "Required The value date for transaction on the system in the format DDMMYYYY"],
    },balanceAfter:{
        type: Number
    }
    });
    
// accountNumber	string	Required The customer’s bank account number `
// amount	number	Required Transaction amount
// currency	string	Required A 3 character code that represents the currency
// channel	string	Optional Channel from which the transaction was done such as ATM, POS, Mobile, USSD
// narration	string	Required A description of the transaction
// referenceId	string	Required A unique internal reference to the specific transaction
// transactionTime	datetime	Required The time on which the transaction was done on the system in the format DDMMYYYY hh:mm:ss
// transactionType	string	Required The type of transaction
// valueDate	datetime	Required The value date for transaction on the system in the format DDMMYYYY
// balanceAfter	number	Optional The balance of the account after the transaction was approved or authorized
export default mongoose.model("Transaction", TransactionSchema);
