const a=10;
let b;           //initialization
var c

b=20        //reassignmet
c=30

// let b=40    //redeclaration for const and let not allowed in same scoped hence bot are blocked scope
        //redeclaration allowed for var in same scoped hence var in not blocked scope
var c=60


//const and let are block-scope and var are not block-scope

{
    const a=20
    let b=20
    var c=30

    console.log(a)
    console.log(b)    //output for all will get
    console.log(c)


}
    console.log(a)
    console.log(b)   //o/p for c will only get while a abd b are not defined 
    console.log(c)

x=10  //it will consider as var
