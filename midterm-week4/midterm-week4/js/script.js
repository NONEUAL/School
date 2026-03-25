// alert('Hello JavaScript!');
/** This 
 * is 
 * comment
 **/

//VARIABLES 
// - temporary containers that can hold different types of data such as text, numbers, collections, object and etc. 
// - can be named for easy read/write access by the programmer/developer it's called an identifier

/**
 * IDENTFIER
 * - variable name that has been set by the programmer
 * 1. must be UNIQUE;
 * 2. CASE SENSITIVE
 * 3. RESERVE KEYWORDS are not allowed as identifiers
 * 4. MUST start with a letter, $ or _
 * 5. cannot contain SPECIAL CHARACTERS
 */

student_name = 'Peter Parker';
$student_name = 'Peter Parker';
_student_name = 'Peter Parker';

/** 4 WAYS OF DECLARING VARIABLES **/
//1. AUTOMATICALLY - automatically declare themselves.
x = 3;
x = 10;
console.log(x);

//2. LET - this the recommended way, uses the let keyword, it can't be redeclared. It's preferred to be used by default when declaring variable.

let school_name = 'Olivarez College Tagaytay';
console.log(school_name);

//3. CONST - Hindi na babago; uses the const keyword, it cannot be redeclared. these variables cannot be reassigned/changed.
const DATABASE_NAME = 'db_students';
const DATABASE_PASSWORD = 'admin@123';
console.log(DATABASE_NAME);
console.log(DATABASE_PASSWORD);

//4. VAR - uses the var keyword, it can be redeclared and should only be used when you want to support older browser.
var a = 21;
var a = 12;
console.log(a);

//DATA TYPES
//1. STRING - A text characters enclosed in quotes
let message_in_a_bottle = 'Mother save me john dave';
console.log(typeof(message_in_a_bottle));

//2. Number - representing a mathematical value
let abc = -123;
let defg = 456.78;
console.log(typeof(abc));
console.log(typeof(defg));

//3. Boolean - representing true or false
let isUserLoggedin = true;
let isUserStudent = false;
console.log(typeof(isUserLoggedin));
console.log(typeof(isUserStudent));

//4. Undefined - primitive variable with no assigned value.
let faculty;
console.log(typeof(faculty));

//5. NULL - primitive value representing object absence - walang laman;

let first_name = 'John Dave';
let middle_name = null;
let last_name = 'Bueno';
console.log(typeof(middle_name));

//6. Object - collection of key-value pairs of data.
const person = {firstname:'Isiah', lastname: 'Enriquez', age: 20};
console.log(person.firstname);
console.log(person.lastname);
console.log(person.age);
console.log(typeof(person));

//7. Array
$igstudents = ['@theycallmetugbo', '@jdg_bernardino', '@caprice_cateyano', '@rocha413'];
console.log($igstudents);
console.log($igstudents[0]);
console.log($igstudents[1]);
console.log($igstudents[2]);
console.log($igstudents[3]);

//8. Date
const date = new Date('2026-03-25');
console.log(date);





