// twitch en TS

// tsc cours.ts pour compiler et générer le cours.js
// node cours.js pour exécuter le code généré du ts

// langage typé mais facultatif
// ; obligatoires en fin d'instruction
let n : number = 1;	
let b : boolean = false;
let str : string = "abc";
const PI : number = 3.14;

// on essaie de modifier une constance => compil failed
// PI = PI *2;

console.log(1+2+str);
console.log(str+1+2);

// opérateurs math : + / * % - =
// opérateurs logiques :  &&  || == === != !== < > <= >=

function afficheTab(tab) : void{
	console.log("*** *** ***");
	for(let i of tab){
		console.log(i);
	}
	console.log("*** *** ***");
}
// tableau vide
let tab : number[] = [];
let tabEquivalent : Array<number> = new Array();
tabEquivalent.push(1); // ajout
tabEquivalent.push(2); // ajout
afficheTab(tabEquivalent);
tabEquivalent.unshift(0); // ajout au début
afficheTab(tabEquivalent);
console.log("shift " + tabEquivalent.shift());
afficheTab(tabEquivalent);
console.log("pop " +  tabEquivalent.pop());
afficheTab(tabEquivalent);

// copie de tableau
tab = tabEquivalent.slice();

tab = [9,3,4];

for(let i in tab){	// boucle sur les indices
	console.log("in i : "+ i);
}
for(let i of tab){ // boucle sur l'élément
	console.log("of i : "+ i);
}

// tableau en read only
let arrayOnlyRead : ReadonlyArray<number> = tab;
// arrayOnlyread.push(3); => compil failed

let t : Array<number | string>; // tab de string et int
t = ['Jan', 2, 'March', 'April', 'June', 'Juilly', 'August', 9, 10, 11];
// slicing : modif de tableau directement
// slice(begin, end) qui sont des indices, end facultatif
t.slice(1,2); // [2]
console.log(" *** SLICE ***")
console.log(t.slice(1,2)); // [2]
console.log(t.slice(7)); // [9,10,11]
console.log("*** *** ***") 

// splicing = modifie le tableau
t.splice(1,8, 'toto'); // a partir de l'indice, je remplace jusuqu'au 8 par 'toto'
console.log(" *** SPLICE ***")
console.log(t);
console.log("*** *** ***") 

// type Pipe ou Union : soit x soit y
let question : string | number;
question = "question 1";
console.log(question);
question = 1;
console.log(question);
// question = true; => compile failed

// Union permet d'éviter le "any"
// le type any inclut tous les types
let badQuestion : any;
badQuestion = "question 1";
badQuestion = 1;
badQuestion = true;

// Déstructuration
let a = 1;
let d = 2;
[a,d] = [d,a];
console.log(" a : "+ a + " - d : " + d);
let [first, ...rest] = tab;
console.log("tab : " + tab);
console.log("first : " + first);
console.log("rest : " + rest);
let [f,s, ...r] = tab;
console.log("f : " + f);
console.log("s : " + s);
console.log("r : " + r + " de type " + typeof r);


// Tuple : clé-valeur
let aTuple : [number, string] = [1, "coucou"];

// Dictionnaire
let aListOfTuples : Array<[number, string]> = [[1, "coucou"], [2, "hello"]];
let nbIntTuple = aTuple[0];
let strInListTUple = aListOfTuples[0][1];
console.log(strInListTUple);

// Enumeration
enum Color { Red, Green, Blue };
// Attention 0b veut dire que c'est un nombre binaire
//  0x pour l'exa et 0o pour l'octal
let rouge: Color = Color.Red;
console.log(rouge);	

enum Color2 { Red = "0b001", Green = "0b010", Blue = "0b100" };
rouge = Color.Red;
console.log(rouge);	

// vous pouvez faire des calculs dans une enum
enum AccessMode { 
    Read = 0b00, 
    Write = 1,          
    ReadWrite = Read + Write   
};
console.log(AccessMode.ReadWrite);


let dummy: void = undefined;
dummy = null;

// ? facultatif
function msgf(msg? : string): void{
	console.log(msg || 'empty');
}
msgf();
msgf('titi');

// never : JAMAIS
/*function dummyF() : never {	// Jamais de retour
	 while(true) console.log("dummy");
	// return 42; compil failed
}
dummyF();*/
function crash(): never{
	throw new Error('never');
}
//crash();

// functions anonymes, function types
let func : (x:number, y: number) => number; // signature de la ft
func = (a,b) => a*b;	// return implicite si 1 instructions sinon {... return ...;}
console.log(func(1,2));
func = (a,b) => a+b;
console.log(func(1,2));

// visibilté/scope : public, private, defaut, protected
// Bonne pratique : interface QUE DES METHODES
interface Vehicule{
	nbRoues: number;	// attributs des interface ne sont pas des attributs de classe
	foo : () => string;
}

class Voiture implements Vehicule{
	marque: string;
	couleur: string;
	nbRoues: number;
	// static = mémoire de la classe, et pas celle de l'objet
	static nbVehicule : number = 0;

	constructor(marque:string, couleur: string, nbRoues: number){
		// this est obligatoire pour les attributs
		this.marque = marque;
		this.couleur = couleur;
		this.nbRoues = nbRoues;
		Voiture.nbVehicule ++;
	}

	public foo() : string{
		this.m();
		return this.marque;
	}

	protected m(): void{
		console.log("private");
	}
}

// Potected à éviter dan la majorité des langages (mauvaise implémentation donc dangeureux pour la cohésion de code)

let cocci : Voiture = new Voiture("vw", "coccinelle", 4);
cocci.foo();
console.log(cocci.nbRoues);
// cocci.m(); => compil failed

// objet à la volée
//let quatreL : Voiture = {marque: "4L", couleur: "gris", nbRoues: 4, foo : ()=> 'toto', m()=> console.log('toto')};
let car = {marque: "4L", couleur: "gris", nbRoues: 4, puissance: 8};
// quatreL.foo();
// car.foo();

class Bus extends Voiture{
	nbPlaces: number;
	constructor(marque:string, couleur: string, nbRoues: number, nbPlaces: number){
		super(marque, couleur, nbRoues);
		this.nbPlaces = nbPlaces;
	}
	public foo() : string{
		this.m();
		return "" + this.nbPlaces.toString();
	}
}

let bus : Bus = new Bus("vw", "coccinelle", 4, 120);
console.log(bus.foo());
console.log("static " +  Voiture.nbVehicule);
console.log("static " +  bus.nbVehicule);











































