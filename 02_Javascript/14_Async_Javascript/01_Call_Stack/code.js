/*
Call Stack

The mechanism the JS interpreter uses to 
keep track of its place in a script that calls
multiple functions

How JS "knows" what function is currently 
being run and what functions are called
from within that function, ect.

How JS knows where it is
*/

/*
Stack
Data structure in computer science
Last in, first out data structure

Stack of books with apple on top
Apple is lasted added but first removed
*/

/*
How it works

- When a script calls a function, the interpreter adds it to the call
stack and then starts carrying out the functino

- Any functions that are called by that function are added to the
call stack further up, and run where their calls are reached

-When the current function is finished, the interpreter takes it off 
the stack and resumes execution where it left off in the last code
*/
