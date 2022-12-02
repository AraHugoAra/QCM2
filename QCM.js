//Objet : deux manières de rajouter un attribut :

const obj1 = {
    greeting : "hello" 
}

obj1.shouting = "HELLO!!"
obj1[2] = "*steps noises*"

// console.log(obj1)



//Objet : rajouter deux méthode de 2 manières différentes : 


const obj2 = {
    greeting : "hello",
    method1(){
        console.alert('Maaaaan')
    },
    method2: function(){
        console.log('Yay')
    }
} 


//Objet : comment boucle-t-on sur un objet ? 

for(key in obj1){
    //code qui itère sur les clés
}

//Objet : à partir de l'objet suivant, renvoyez un tableau comportant uniquement les clés de l'objet :
const obj = {
    width : '10px',
    height : '10px',
    color : 'red'
}

let keysArray = []
for(key in obj){ keysArray.push(key) }
// console.log(keysArray)



//Class : écrivez une class (prenom, nom, age) et instanciez vous !

class Person {
    constructor(prenom, nom, age){
        this.prenom = prenom,
        this.nom = nom,
        this.age = age
    }
}

let me = new Person('Hugo', 'Aragones', 29)


//Ecrivez une sous-classe (possible de réutiliser la classe ci dessus)

class Pupil extends Person{
    constructor(nom, prenom, age, grade){
        super(nom, prenom, age)
        super.prenom = prenom
        super.nom = nom
        super.age = age
        this.grade = grade
    }
}

let jeanMich = new Pupil('Jean', 'Mich', 21, '6ème')

// console.log(jeanMich)

//Les 4 cas où la console renvoie undefined 

let varNonAssign
console.log(varNonAssign)
//Je vois pas les autres