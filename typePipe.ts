// Fonctions génériques, templates
function f(a: string | number, b: string | number) {
    if (typeof a === 'string') {
        return a + ':' + b; // no error but b can be number!
    } else {
        return  (a as number) + (b as number); 
    }
}

console.log(f(2, 3)); // correct usage
// console.log(f(1, 'a')); // should be error
// console.log(f('a', 2)); // should be error
console.log(f('a', 'b')); // correct usage

// gestion des types le extends

type AppendArgument<F extends (...args: any) => any, A> 
 	= (x: A, ...args: Parameters<F>) => ReturnType<F> 

type FinalF = AppendArgument<(a: number, b: string) => number, boolean> 
