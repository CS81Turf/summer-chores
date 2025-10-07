# Summer Chores Project

This project simulates a person completing their summer chores using JavaScript callbacks and Promises. Each task(like mowing, weed eating, trimming, etc.) takes a certain amount of time, and there's a chance the person might fall asleep before finishing all their chores. This project demonstrates asynchronous behavior using setTimeout() and explores two ways to manage async code -- callback chaining, also known as "callback hell" and a cleaner Promise-based approach.

---

## What I Learned

### Callback Version
- How to create and use callback functions to manage asynchronous tasks.
- How to simulate real-world timing with setTimeout().
- How to use Math.random() to introduce randomness into program behavior.
- How to use Node.js to run JavaScript files from the terminal.

### Promise Version
- How to use Promise objects to replace nested callbacks.
- How to chain .then() and .catch() to handle success and errors.
- How Promises make asynchronous code flow more like synchronous code.
- How to reject a Promise to simulate the person falling asleep.

---

## How to Run

1. Make sure you have Node.js installed. 
    Check with:
    ``` bash
    node -v

2. Clone or open this project folder in your terminal:
    ```bash
    cd path/to/summer-chores

3. Run the callbackVersion.
    ```bash
    node callbackVersion.js

4. Run the promiseVersion.
    ```bash
    node promiseVersion.js

5. Watch the console logs to see whether the person finishes their chores before falling asleep!