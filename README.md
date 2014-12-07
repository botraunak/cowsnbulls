cowsnbulls
==========

The Popular cows and bulls game implemented in javascript

Check the live implementation of game on botraunak.github.io/cowsnbulls

RULES:
Aim is to find the 4-letter word the computer has thought of.
Bulls correspond to the number of common letters in the correct position compared between your guess and the computers' word.
Cows correspond to the number of common letters in the incorrect position compared between your guess and the computers' word.
Bulls are counted first and those letters are not counted for cows.

Example: Word assumed by computer: WORD
Guess 1: CAVE Clue: 0B 0C (no common letters)
Guess 2: DOOR Clue: 1B 2C (bull for 'O' and cows for 'D' and 'R')
Guess 3: ODOR Clue: 0B 3C (cows for 'O', 'D' and 'R')
Guess 4: WOOD Clue: 3B 0C (bulls for 'W', 'O' and 'D')
Guess 5: WORD -- Yay, you did it!!
