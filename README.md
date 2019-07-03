# Javascript Language Forms #

The concept of forms was borrowed from martial arts. Instead of solving new problems over and over in hopes that the language will stick, a form is intended to be repeated movement for movement to develop a relationship with the language and practices of a fluent developer. The student at each form level will learn to identify syntactic patterns while following an intentional and regimented process to promote fluency through a repeated process.

A student of any form will know they are ready to move to the next form when they can demonstrate proficiency in the current form by applying the techniques presented without referring to the example materials. No two programmers are alike so it is understood that the steps someone would follow may vary slightly. This variance is good as it demonstrates a deeper understanding of the ideas presented in the form.

All of the first three forms will use the same tests and will address the questions posed in the tests in the same order. For any proficiency check, the student will be expected to work through the tests by reading them and then providing an appropriate response.

As a student becomes more conversant in a particular form, they are encouraged to apply their knowledge using code katas, like the problems provided by [Exercism.io](http://exercism.io/).

## Setup ##

To use JS Learner Forms, you will need to do the following:

- Install [Node.js](https://nodejs.org/)
- Install [Visual Studio Code](https://code.visualstudio.com/)
- Clone the JS Language Forms repository:
    - From the terminal run the following:
        - `git clone https://github.com/cmstead/jsLearnerForms.git`

**After Installing**

- Set up project
    - open a terminal/command line
    - go to the directory where the JS Learner Forms project is stored
        - Windows: `cd c:\path\to\jsLearnerForms`
        - Mac: `cd /path/to/jsLearnerForms`
    - Run the setup script: `npm run setup`

**That's it! You're all set.**

## Using JS Learner Forms ##

### Running A Form ###

1. Open a terminal/command line in the JS Learner Forms directory (like when you ran the setup)
2. Run the start script: `npm start`
3. Select run from the main menu
4. Select Node or Browser
5. Choose the form number (start at 1 if this is your first time)
6. Start Visual Studio Code
7. Open the folder you cloned JS Learner Forms to in your editor
8. Open the test and source files:
    - Test files are found in the `test` directory
    - Source files are found in the `src` directory
    - Choose files from the `node` or `browser` directory depending on the mode in which the forms are run

### Starting a Form Over ###

1. From the start script menu, select the reset option.
2. Choose Node or Browser depending on how you have been working
3. Choose the form number to update

### Solving Each Form ###

1. First Form -- Write code to pass each test
2. Second Form -- Refactor the code, keep tests green, and adhere to the walkthrough
3. Third Form -- Refactor second form code, keep tests green, and adhere to the walkthrough
4. Test Dummy Form (Fourth Form) -- Write tests matching each description and get all of the code under test (modify ONLY the test code)
6. Async Test Dummy Form (Sixth Form) -- Write tests matching each description and get all of the code under test (modify ONLY the test code)

### Completing Each Task ###

1. Read description of the current failing test
    - Look in the test file, find the text that matches the description of the failing test
    - Read and try to understand what the test is doing
2. Write code to make the test pass.
3. All tests will automatically rerun as you save your code updates.

## Skills covered per form ##

This section will be updated as forms are completed and ready for use.

### First Form ###

Core setup concepts:

- Strict mode Javascript
- Immediately Invoked Function Expressions
- Exporting a module

Ideas to build upon:

- Function creation
- Conditional statements
- Calling a function
- Interaction and use of function parameters
- String concatenation
- Mathematical operations and operators
- Built in modules such as the Math module
- Built in functions such as toString and valueOf
- Adding or overriding functions on objects
- Looping
- Arrays
- Nested logic

Good reinforcement exercises from Exercism.io include:

- Leap
- Hamming
- RNA-Transcription
- Bob

Strong first form students will be challenged by these exercises:

- Gigasecond (The Date api is necessary for this problem)
- Word-count
- Pangram

### Second Form

Second form concepts

- Inner looping functions
- Ternary expressions
- Instantiable objects
- Closures
- Factory functions
- Higher-order functions

Reinforcement exercises from Exercism.io are to refactor the following using second form concepts:

- Hamming
- Word-count
- Pangram

### Third Form

Third form concepts

- Reduce
- Recursion
- Function chaining
- Instantiable objects as types
- Creating static methods on types
- Executing prototypal methods as static
- Scope management
- Partial application with bind
- Generic functions
- Type checking
- Metaprogramming

### Fourth Form -- Test Dummy Form

Fourth form concepts

- Writing unit tests
- Creating vice tests around existing code
- Mocks, stubs and spies
- Code seams
- Promises and async programming
- Pure and impure functions
- Programming patterns
- Code deduplication
- Testing libraries - Mocha, Chai, Sinon and Mockery
