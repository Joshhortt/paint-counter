# PAINT COUNTER

#### _A Programm that replaces numbers with words like 'beep' and 'boop'_.

#### By _**Josh Hortt**_
_version: 24/05/2019_

## Description

_This program uses jQuery to gather numerical user input from a form and display_</br>
_every integer up to that number to the user, replacing numbers divisible by 3, a number_</br>
_that uses zero(0) with the words: 'beep', 'boop' respectively_:

## Specs

_his web app will take a user number above zero and return a list of numbers counting up from zero to 48_.</br>
_If the user enter the number Zero it will return a displayed message_.</br>
_Some of the listed numbers will be replaced with words_.</br>
_If the number entered is higher than number 48 it will display an image_:

- Replaces a non-number with a message.
    - **abc --> Upps! Please enter only natural numbers**
- Replaces a number less than 1 with a message..
    - **0 --> Upps! Please enter only natural numbers**  
- Replaces a number that contains 1 with Boop!
    - **1 --> Boop!**
- Replaces a number that is divisible by 3.
    - **3 --> Boop!, 2, SORRY!**
- Replaces a number that contains 0 with Beep!.
    - **10 --> Boop!, 2, SORRY!, 4, 5, SORRY!, 7, 8, 9, Beep!**    
- input a number greater than 48:.
    - **49 or higher --> (display an image)**
- Displays all integers from user's input back to one (Boop) if 'reverse' button is selected.

## Setup/Installation Requirements

_Clone repository in a shell using the command_:</br>
`git clone https://github.com/joshhortt/paint-counter`

## Known Bugs

_There are no known bugs at this current time._

## Support and contact details

_If you have any questions or find any issues with the site, get in touch. My email is: joshhortt@yahoo.com_

## Technologies Used

* JavaScript-Vanilla
* JQuery-3.4.0.
* Bootstrap-4
* CSS-3
* HTML-5

### License

*This software is licensed under the MIT license.*

Copyright (c) 2019 **_Josh Hortt_**
