function receivesAFunction(cb){
    cb();
}

function returnsANamedFunction(){
    const fn = () => {};
    return fn;
}

function returnsAnAnonymousFunction(){
    return function (){};
}