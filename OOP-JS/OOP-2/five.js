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
let a3=new Account();
a3.deposit_Amount(50000)
a3.deposit_Amount(150000)
console.log(a3)
console.log(a3.get_Bal())