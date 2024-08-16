class P{
    constructor(){
        console.log("GA")
    }
}
class C extends P{
    constructor() {
        super()
    }
}
new C()