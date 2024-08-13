class Account{
    acc_Bal=0;
    min_Bal=500
    deposit_Amount(amount){
        this.acc_Bal = this.acc_Bal+amount;
    }
    withdrawl_Amount(amount){
        this.acc_Bal = this.acc_Bal - amount;
    }
    get_Bal(){
        return this.acc_Bal -this.min_Bal
    }
}
let a1=new Account();
a1.deposit_Amount(5000)
a1.deposit_Amount(150)
console.log(a1)
a1.withdrawl_Amount(15)
console.log(a1)
console.log(a1.get_Bal())