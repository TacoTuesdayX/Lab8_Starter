# Lab 8 - Starter

1) Where would you fit your automated tests in your Recipe project development pipeline? Select one of the following and explain why.

- This would occur within a github action, or whatever CI pipeline is in use, we would have them run whenever code is pushed.

2) Would you use an end to end test to check if a function is returning the correct output? (yes/no)

- No, use a unit test for specific functions.

3) Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.

- No, it would be best to utilize end to end tests to validate this feature. A messaging system has many moving parts to it, and unit tests are primarily used for testing single pieces of code (ie functions).

4) Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters.

- Yes, this feature can be tested using a unit test. Simply construct mock messages, or test cases, which represent various user messages (some with >80, <80, or =80). And assert the behavior (block vs no-block) is what we expected given that input.