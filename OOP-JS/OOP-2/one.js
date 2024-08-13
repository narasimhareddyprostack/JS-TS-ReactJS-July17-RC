class Account{
    open_Account(){
        console.log("Account Opened Successfully!")
    }
    deposit_Amount(){
        console.log("Deposited Successfully!")
    }
    withdrawl(){
        console.log("Insuffient Balance")
    }
    get_Bal(){
        console.log("Server Busy")
    }
    get_St(){
        console.log("Pay 50 INR")
    }
    close_Account(){
        console.log("-ve Bal- Deposit more")
    }
}
let a1=new Account();
a1.open_Account()
a1.deposit_Amount()
a1.withdrawl()
a1.get_Bal()
a1.get_St()
a1.close_Account()