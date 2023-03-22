const receivesAFunction =(spy)=>{

    return spy();
}

const returnsANamedFunction = ()=>{
    var fn = returnsANamedFunction;
    return fn;

}
const returnsAnAnonymousFunction = ()=>{

    return function(){

    };
}

//done!