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
let a2=new Account();
a2.deposit_Amount(15000)
console.log(a2)
console.log(a2.get_Bal())