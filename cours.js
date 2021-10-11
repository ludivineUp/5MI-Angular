// twitch en TS
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var _a;
// tsc cours.ts pour compiler et générer le cours.js
// node cours.js pour exécuter le code généré du ts
// nodemon cours.ts
// langage typé mais facultatif
// ; obligatoires en fin d'instruction
var n = 1;
var b = false;
var str = "abc";
var PI = 3.14;
// on essaie de modifier une constance => compil failed
// PI = PI *2;
console.log(1 + 2 + str);
console.log(str + 1 + 2);
// opérateurs math : + / * % - =
// opérateurs logiques :  &&  || == === != !== < > <= >=
function afficheTab(tab) {
    console.log("*** *** ***");
    for (var _i = 0, tab_2 = tab; _i < tab_2.length; _i++) {
        var i = tab_2[_i];
        console.log(i);
    }
    console.log("*** *** ***");
}
// tableau vide
var tab = [];
var tabEquivalent = new Array();
tabEquivalent.push(1); // ajout
tabEquivalent.push(2); // ajout
afficheTab(tabEquivalent);
tabEquivalent.unshift(0); // ajout au début
afficheTab(tabEquivalent);
console.log("shift " + tabEquivalent.shift());
afficheTab(tabEquivalent);
console.log("pop " + tabEquivalent.pop());
afficheTab(tabEquivalent);
// copie de tableau
tab = tabEquivalent.slice();
tab = [9, 3, 4];
for (var i in tab) { // boucle sur les indices
    console.log("in i : " + i);
}
for (var _i = 0, tab_1 = tab; _i < tab_1.length; _i++) { // boucle sur l'élément
    var i = tab_1[_i];
    console.log("of i : " + i);
}
// tableau en read only
var arrayOnlyRead = tab;
// arrayOnlyread.push(3); => compil failed
var t; // tab de string et int
t = ['Jan', 2, 'March', 'April', 'June', 'Juilly', 'August', 9, 10, 11];
// slicing : modif de tableau directement
// slice(begin, end) qui sont des indices, end facultatif
t.slice(1, 2); // [2]
console.log(" *** SLICE ***");
console.log(t.slice(1, 2)); // [2]
console.log(t.slice(7)); // [9,10,11]
console.log("*** *** ***");
// splicing = modifie le tableau
t.splice(1, 8, 'toto'); // a partir de l'indice, je remplace jusuqu'au 8 par 'toto'
console.log(" *** SPLICE ***");
console.log(t);
console.log("*** *** ***");
// type Pipe ou Union : soit x soit y
var question;
question = "question 1";
console.log(question);
question = 1;
console.log(question);
// question = true; => compile failed
// Union permet d'éviter le "any"
// le type any inclut tous les types
var badQuestion;
badQuestion = "question 1";
badQuestion = 1;
badQuestion = true;
// Déstructuration
var a = 1;
var d = 2;
_a = [d, a], a = _a[0], d = _a[1];
console.log(" a : " + a + " - d : " + d);
var first = tab[0], rest = tab.slice(1);
console.log("tab : " + tab);
console.log("first : " + first);
console.log("rest : " + rest);
var f = tab[0], s = tab[1], r = tab.slice(2);
console.log("f : " + f);
console.log("s : " + s);
console.log("r : " + r + " de type " + typeof r);
// Tuple : clé-valeur
var aTuple = [1, "coucou"];
// Dictionnaire
var aListOfTuples = [[1, "coucou"], [2, "hello"]];
var nbIntTuple = aTuple[0];
var strInListTUple = aListOfTuples[0][1];
console.log(strInListTUple);
// Enumeration
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
// Attention 0b veut dire que c'est un nombre binaire
//  0x pour l'exa et 0o pour l'octal
var rouge = Color.Red;
console.log(rouge);
var Color2;
(function (Color2) {
    Color2["Red"] = "0b001";
    Color2["Green"] = "0b010";
    Color2["Blue"] = "0b100";
})(Color2 || (Color2 = {}));
;
rouge = Color.Red;
console.log(rouge);
// vous pouvez faire des calculs dans une enum
var AccessMode;
(function (AccessMode) {
    AccessMode[AccessMode["Read"] = 0] = "Read";
    AccessMode[AccessMode["Write"] = 1] = "Write";
    AccessMode[AccessMode["ReadWrite"] = 1] = "ReadWrite";
})(AccessMode || (AccessMode = {}));
;
console.log(AccessMode.ReadWrite);
var dummy = undefined;
dummy = null;
// ? facultatif
function msgf(msg) {
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
function crash() {
    throw new Error('never');
}
//crash();
// functions anonymes, function types
var func; // signature de la ft
func = function (a, b) { return a * b; }; // return implicite si 1 instructions sinon {... return ...;}
console.log(func(1, 2));
func = function (a, b) { return a + b; };
console.log(func(1, 2));
var Voiture = /** @class */ (function () {
    function Voiture(marque, couleur, nbRoues) {
        // this est obligatoire pour les attributs
        this.marque = marque;
        this.couleur = couleur;
        this.nbRoues = nbRoues;
        Voiture.nbVehicule++;
    }
    Voiture.prototype.foo = function () {
        this.m();
        return this.marque;
    };
    Voiture.prototype.m = function () {
        console.log("private");
    };
    // static = mémoire de la classe, et pas celle de l'objet
    Voiture.nbVehicule = 0;
    return Voiture;
}());
// Potected à éviter dan la majorité des langages (mauvaise implémentation donc dangeureux pour la cohésion de code)
var cocci = new Voiture("vw", "coccinelle", 4);
cocci.foo();
console.log(cocci.nbRoues);
// cocci.m(); => compil failed
// objet à la volée
//let quatreL : Voiture = {marque: "4L", couleur: "gris", nbRoues: 4, foo : ()=> 'toto', m()=> console.log('toto')};
var car = { marque: "4L", couleur: "gris", nbRoues: 4, puissance: 8 };
// quatreL.foo();
// car.foo();
var Bus = /** @class */ (function (_super) {
    __extends(Bus, _super);
    function Bus(marque, couleur, nbRoues, nbPlaces) {
        var _this = _super.call(this, marque, couleur, nbRoues) || this;
        _this.nbPlaces = nbPlaces;
        return _this;
    }
    Bus.prototype.foo = function () {
        this.m();
        return "" + this.nbPlaces.toString();
    };
    return Bus;
}(Voiture));
var bus = new Bus("vw", "coccinelle", 4, 120);
console.log(bus.foo());
console.log("static " + Voiture.nbVehicule);
tab = [1, 2, 3, 4, 5, 6];
// reduce tab => élément
var somme = tab.reduce(function (sortie, element) { return sortie += element; });
console.log(somme);
// map tab => tab
var double = tab.map(function (element) { return element * element; });
console.log(double);
// filter tab => tab
var pair = tab.filter(function (element) { return element % 2 == 0; });
console.log(pair);
