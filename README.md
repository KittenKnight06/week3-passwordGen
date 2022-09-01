# week3-passwordGen

Week 3 homework - random password generator

Users should be able to choose different criteria when prompt with window.prompt, and alert will be prompt when wrong choices were made.

---

The password generator is deployed in Github

[Please click the URL](https://kittenknight06.github.io/week3-passwordGen/)

And the below page will be presented:

![](assets/03-javascript-homework-demo.png)

---

## When clicking the "Generate Password" button, you will be prompted with a series of 5 password criteria to choose from:

### 1. Length of charactors (has to be between 8 and 128 charactors).

![](assets/charactors-prompt.png)

If wrong input was keyed in, it will return to default and error alert will be displayed.

![](assets/charactors-prompt-error.png)

## Note: Between prompt number 2 and number 5, choose either "OK" as true, or "Cancel" as fause.

### 2. When correct number of characters are keyedin and click "OK", the next prompt will ask you to select if your password will include numbers.

![](assets/number-prompt.png)

### 3. After choosing the inclusion of numbers, the next prompt will ask you to select if your password will include special characters.

![](assets/special-charactor-prompt.png)

### 4. After choosing the inclusion of special characters, the next prompt will ask you to select if your password will include uppercase letters.

![](assets/uppercase-prompt.png)

### 5. After choosing the inclusion of uppercase letters, the next prompt will ask you to select if your password will include lowercase letters.

![](assets/lowercase-prompt.png)

## Note: At least one criteria has to be selected out of the 4! Else will return to default with error alert.

![](assets/error-message.png)

---

## The generated password will display in the center box just below the wording of "Generate a Password"

![](assets/password-gen.png)

