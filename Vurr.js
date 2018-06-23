var person = {
    firstname: 'John',
    lastname: 'Doe',
    getFullName: function(){

        var fullname = this.firstname + ' ' + this.lastname
        return fullname;

    }
 }

 var logname = function (lang1, lang2){

    console.log('logged: ' + this.getFullName());
    console.log('Arguments: ' + lang1 + ' ' + lang2);
    console.log('------------');
}

var logPersonName = logname.bind(person);
 
logPersonName('en');

logname.call(person, 'en' , 'es');
logname.apply(person, ['en', 'es']);

(function (lang1, lang2){

    console.log('logged: ' + this.getFullName());
    console.log('Arguments: ' + lang1 + ' ' + lang2);
    console.log('------------');

}).apply(person, ['en', 'es']);

//function borrowing
var person2 = {
    firstname: 'Jane',
    lastname: 'Doe'
}

console.log(person.getFullName.apply(person2));

//function currying
function multiply (a,b){
   console.log('--------');
    return a*b;
}

var multiplybytwo=multiply.bind(this, 2);

console.log(multiplybytwo(5));
