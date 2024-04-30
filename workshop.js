/*Create 1 str variable and 3 num variables.
  The num variables will use math operators to set the values and each value will be one of the combinations (10-40-39)
  Then create an alert that uses the variables to show the secret combo
 */
const greeting = "You have received this message because you have been chosen to open an important vault. Here is the secret combination" //This is the string used in the alert message

const combo1 = 20 * 2 + 50 - 80; //Encrypted Combination 1
const combo2 = (36 + 54 - combo1) / 2; //Encrypted Combination 2 that utilizes the value of combo1

const combo3 = combo2 / combo1 * 20 - 41; //Encrypted Combination 3 that utilizes the value of combo1 and combo2

alert(`${greeting}\n${combo1}-${combo2}-${combo3}`) //final Alert Message