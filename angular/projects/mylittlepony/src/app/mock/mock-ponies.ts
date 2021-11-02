// extremenent important pour les tests 

import { Pony } from "../pony";

// test unit 70%
// test d'intégration 20% (api, db, etc)
// test e2e/fonctionnel 10% car n'intègre pas les autres tests
export const PONIES : Pony[] = [
    {id: 1, name: "toto", color: "red", age: 1},
    {id: 2, name: "zoro", color: "black", age: 10},
    {id: 3, name: "pere fouras", color: "gray", age: 100}
];

