// tsc -t es6

function doAsyncTack(callback){
	setTimeout( () =>{
		console.log("asynck avec callback");
		callback();
	}, 1000);
}
// pb : on attends forcément 1000ms, beurk...
doAsyncTack(()=>console.log("callback called"));
console.log("attent");

// éviter le timeout et faire de l'asyn : Promise
let prom = new Promise(function(resolve, reject){
	resolve('Bravo');
	reject('Essaie encore');
});

// pour lancer le traitement de la promise et affectuer une tâche > then
prom.then((value) => console.log(value)).catch((err)=> console.log(err));

prom.then((value) => console.log("2"+value)).catch((err)=> console.log(err));

// vrai utilisation

function pair(x : number){
	return new Promise((resolve, reject) =>{
		if(x % 2 == 0){
			resolve(true);
		}else{
			reject(false);
		}
	});
}

pair(3).then(res => console.log(res)).catch((err) =>console.log(err));
pair(30).then(res => console.log(res)).catch((err) =>console.log(err));
pair(3).then(res => console.log(res)).catch((err) =>console.log(err));
pair(30).then(res => console.log(res)).catch((err) =>console.log(err));
pair(3).then(res => console.log(res)).catch((err) =>console.log(err));
pair(30).then(res => console.log(res)).catch((err) =>console.log(err));
pair(3).then(res => console.log(res)).catch((err) =>console.log(err));
pair(30).then(res => console.log(res)).catch((err) =>console.log(err));
pair(3).then(res => console.log(res)).catch((err) =>console.log(err));
pair(30).then(res => console.log(res)).catch((err) =>console.log(err));
pair(3).then(res => console.log(res)).catch((err) =>console.log(err));
pair(30).then(res => console.log(res)).catch((err) =>console.log(err));