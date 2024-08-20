class Account{
    acc_Id;
    acc_Name;
    constructor(id,name){
        this.acc_Id = id 
        this.acc_Name =name;
    }
}
class SA extends Account{
    acc_Bal=0;
    min_Bal=500
    constructor(id,name,amount){
        super(id,name)
        this.acc_Bal = amount
    }
    get_Bal(){
        return this.acc_Bal - this.min_Bal
    }

}

class CA extends Account{
    acc_Bal=0;
    min_Bal=5000
    constructor(id,name,amount){
        super(id,name)
        this.acc_Bal = amount
    }
    get_Bal(){
        return this.acc_Bal - this.min_Bal
    }
}

let sa1 = new SA(101,"Rahul",50000)
console.log(sa1)
let ca1 = new CA(102,"Sonia",1500000)
console.log(ca1)
console.log(sa1.get_Bal())
console.log(ca1.get_Bal())