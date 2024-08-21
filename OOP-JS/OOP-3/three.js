class Account{
  
    min_Bal=500;
   
    constructor(id,name,amount) {
        this.acc_Id=id
        this.acc_Name=name
        this.acc_Bal=amount
    }
    open_Account(){
        console.log("Account Opened Successfully!")
    }
    deposit_Amount(amount){
        this.acc_Bal = this.acc_Bal+amount
    }
    withdrawl_Amount(amount){
        this.acc_Bal = this.acc_Bal-amount
    }
    get_Bal(){
        return this.acc_Bal - this.min_Bal
    }
    close_Account(){
        console.log("Account Closed Successfully!")
    }
}

let a1=new Account(101,'Rahul',5000)
a1.open_Account()
a1.deposit_Amount(300)
a1.deposit_Amount(150)
a1.deposit_Amount(15)

console.log(a1.get_Bal())

a1.withdrawl_Amount(15)
console.log(a1.get_Bal())
