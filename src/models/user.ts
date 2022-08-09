import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"],

    },
    phone :{
        type: String,
        required: [true, "Phone is required"],
    },
    password: {
        type: String,
        required: [true, "Password is required"],
    }
    // {
    //     "meta": {
    //         "data_status": "AVAILABLE",  // AVAILABLE, PROCESSING, FAILED
    //         "auth_method": "mobile_banking" // internet_banking
    //     },
    //     "account": {
    //         "_id": "5feec8ce95e8dc6a52e53257",
    //         "institution": {
    //             "name": "GTBank",
    //             "bankCode": "058",
    //             "type": "PERSONAL_BANKING" // or BUSINESS_BANKING
    //         },
    //         "name": "HASSAN ABDULHAMID TOMIWA",
    //         "accountNumber": "0131863463",
    //         "type": "SAVINGS ACCOUNT",
    //         "balance": 538786,
    //         "currency": "NGN",
    //         "bvn": "1595"
    //     }
    // }
//     Field	description	type
// meta	A meta object containing the current data status and the auth method	object
// meta.data_status	The status of the returned connected data, if it is AVAILABLE, PROCESSING, FAILED	string
// meta.auth_method	This refers to the authentication method used by user. It returns either, mobile_banking or internet_banking	string
// account	An object with all account data	object
// account._id	The unique identifier for the member which has new or updated transaction data	string
// account.institution	All data related to the financial institution of the connected user	object
// account.institution.name	The institution name of the connected account	string
// account.institution.bankCode	The bank code of the institution name connected to this account	string
// account.institution.type	The type of banking method for this connected user. E.g PERSONAL_BANKING, BUSINESS_BANKING etc	string
// account.name	The account name of the connected user	string
// account.accountNumber	The account number of the connected user	string
// account.type	The account type of the connected user E.g SAVINGS ACCOUNT, CURRENT ACCOUNT	string
// account.name/balance	The current account balance of the connected user	string
// account.currency	The curency of the connected user (NGN, GHS ETC)	string
// account.bvn	The BVN of the connected user	string

})

export default mongoose.model("User", UserSchema);