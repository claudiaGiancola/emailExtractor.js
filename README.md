# emailExtractor.js

Writing and debugging a program to extract emails data from a text file saved locally.

Goals:
- Pair programming (driver - navigator)
- Writing and debugging a program
- Using the Dictionary class
- Regular Expressions
- Installing additional node modules using the “require()” method > Node File System class to read external files (`const fs = require('fs')`, `readFile`, `readFileSync`) + “prompt-sync" to prompt the user to specify their preferred display count

### Incremental updates
- I used Regular Expressions with the .match() string method to streamline the identification and count of a specific email domain in the given text file.
- I made a Dictionary to store a mapping of each different domain and its occurrences, then converted it into an array to sort it in descending order, finally converted it back into a Dictionary to make the program print out the 10 most common domains.
- I enhanced the program so that the user can enter a frequency and the program would return and print out the domains that occur more than the specified number of times.
- The program ignores different top-level domain. For example "hotmail.com" and "hotmail.co.uk" are considered to be the same.

Possible upgrades for the future:
1. Try downloading a page from the Internet and analyse that.

Extra unrelated excercises to practice RegEx:
- Validating a phone number
- Extracting the components of someone's name (Dr Fred Bloggs)
- Parsing a regular expression (! - start with a simple subset of the regular expression language...)

