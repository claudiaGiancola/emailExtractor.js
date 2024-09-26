﻿# emailExtractor.js

We’ve got some text, and we’d like to extract the email addresses from it and work out which domains are most common.

The exact specification of email addresses is very complex, so we are going to simplify it a bit! Let’s say that an email always has 2 parts, separated by an @:
<local>@<domain>

Where:
- The 'local' part consists of letters, numbers and a few special characters - e.g. joe.bloggs or anna_bell
- The 'domain' part consists of two or more sub-domains, consisting of letters, numbers and dashes, separated by dots. e.g. softwire.com
- To simplify life, we'll only allow the following special characters: .'_%+-

### Learning goals
- Writing and debugging a program
- Using the Dictionary class
- Regular Expressions
- Node File System class to read external files > `const fs = require('fs')` + `readFile` + `readFileSync`

### Incremental updates
1. To start off, we'll avoid using regular expressions and try testing the sample 'by hand'.
2. Modify your program to use a regular expression to count the occurrences of the required email addresses.
3. Make a Dictionary that stores a mapping of each domain to the number of times email addresses with that domain appear. Print the results.
4. Print out the 10 most common domains in order.
5. Enhance your program so that the user can enter a frequency (e.g. 63) and the program returns the domains that occur more than that number of times.
6. Tweak the rules so that we don't care about a different top-level domain. For example "hotmail.com" and "hotmail.co.uk" are considered to be the same.
7. Rather than loading your input from a file, try downloading a page from the Internet and analyse that.
8. Improve your regex to conform more closely to the specification

Extra unrelated excercises to practice RegEx:
- Validating a phone number
- Extracting the components of someone's name (Dr Fred Bloggs)
- Parsing a regular expression (! - start with a simple subset of the regular expression language...)

