This demo was created by Fawwaz Lawal 
More notes are in the actual code for ease of reference 

# Moderate Scientific Calculator – Reference README

## Overview

This project is a **moderate-complexity scientific calculator web app** built with **HTML, CSS, and JavaScript**.
It demonstrates how a modern front-end application is structured using:

* **HTML** → structure and layout
* **CSS** → styling, layout, animations, and UI behavior
* **JavaScript** → calculator logic, event handling, and feature implementation

The design is inspired by the **Windows 11 scientific calculator**, including a dark theme, history panel, and interactive button feedback.

---

# Features

### Core Calculator

* Basic arithmetic operations (+ − × ÷)
* Decimal support
* Clear (`C`) and Delete (`⌫`) functions
* Expression display
* Result formatting

### Scientific Functions

* π (Pi constant)
* e (Euler’s number)
* Square (`x²`)
* Reciprocal (`1/x`)
* Absolute value (`|x|`)
* Square root (`√x`)
* Exponential (`exp`)
* Factorial (`n!`)
* Parentheses support

### UI / UX Enhancements

* Windows-style dark theme
* Button hover and press animations
* Animated equals (`=`) button rainbow effect
* Scrollable calculation history
* Display expression preview
* Responsive layout using CSS Grid and Flexbox

---

# Project Structure

```
calculator-project/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

Each file has a distinct responsibility.

---

# HTML – Structure and Layout

**File:** `index.html`

HTML defines the **structure of the application**.

### Key Elements

#### App Container

```html
<div class="app-shell">
```

Main layout container for the entire application.

---

#### Calculator Panel

```html
<main class="calculator-panel">
```

Holds the calculator UI and controls.

---

#### Display Panel

```html
<div id="display" class="display">0</div>
```

Shows the **current calculator value**.

```html
<div id="expression" class="expression"></div>
```

Shows the **current expression being calculated**.

---

#### Button Grid

```html
<section class="button-grid">
```

Contains all calculator buttons arranged in a **CSS grid layout**.

Example button:

```html
<button type="button" data-value="7">7</button>
```

Important attributes:

| Attribute       | Purpose                             |
| --------------- | ----------------------------------- |
| `type="button"` | prevents form submission            |
| `data-value`    | stores the value used by JavaScript |
| `id="equals"`   | used for targeting specific buttons |

---

#### Special Buttons

```html
<button id="clear">C</button>
<button id="delete">⌫</button>
<button id="equals">=</button>
<button id="factorial">n!</button>
```

IDs allow JavaScript to attach logic to buttons.

---

#### History Panel

```html
<div id="history-list" class="history-list">
```

Displays past calculations.

---

# CSS – Styling and Layout

**File:** `style.css`

CSS defines **appearance, layout, and animations**.

---

## Layout System

### Grid Layout

```css
.app-shell {
    display: grid;
    grid-template-columns: 1fr 320px;
}
```

Creates two panels:

| Panel | Purpose    |
| ----- | ---------- |
| left  | calculator |
| right | history    |

---

### Button Grid

```css
.button-grid {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
}
```

Creates the **5-column calculator button layout**.

---

## Display Styling

```css
.display {
    font-size: 72px;
}
```

Large font to mimic real calculator displays.

---

## Interactive States

### Hover

```css
.button-grid button:hover {
    background: #22262d;
}
```

Visual feedback when the mouse moves over a button.

---

### Active (Pressed)

```css
.button-grid button:active {
    transform: scale(0.98);
}
```

Creates a button press effect.

---

## Equals Button Animation

```css
#equals {
    background: orange;
}
```

Default equals button styling.

Rainbow animation:

```css
@keyframes rainbowWave {
    0% { background-position: 0% }
    100% { background-position: 200% }
}
```

Activated when JavaScript adds the class:

```css
#equals.equals-animate
```

---

# JavaScript – Calculator Engine

**File:** `script.js`

JavaScript controls **behavior and calculations**.

---

## DOM References

```javascript
const display = document.getElementById("display");
```

Access the display element.

```javascript
const equalsButton = document.getElementById("equals");
```

Access specific buttons.

---

## Event Listeners

```javascript
equalsButton.addEventListener("click", evaluateExpression);
```

Triggers the calculation when `=` is clicked.

---

## Button Input

```javascript
document.querySelectorAll("[data-value]")
```

Finds all buttons containing calculator values.

---

## Expression Handling

```javascript
currentExpression += value;
```

Adds the button input to the expression string.

---

## Expression Evaluation

```javascript
Function(`return ${safeExpression}`)();
```

Evaluates the mathematical expression.

---

## Result Formatting

```javascript
Number(result).toLocaleString()
```

Formats numbers for readability.

Example:

```
1000000 → 1,000,000
```

---

## History Tracking

```javascript
historyItems.unshift(`${expression} = ${result}`);
```

Adds the newest calculation to the top of history.

---

## Animation Trigger

```javascript
equalsButton.classList.add("equals-animate");
```

Activates the equals button rainbow animation.

Removed after 2 seconds:

```javascript
setTimeout(() => {
    equalsButton.classList.remove("equals-animate");
}, 2000);
```

---

# Scientific Function Example

Factorial implementation:

```javascript
function factorial(n) {
    if (!Number.isInteger(n) || n < 0) return "Error";

    let result = 1;

    for (let i = 1; i <= n; i++) {
        result *= i;
    }

    return result;
}
```

Connected to button:

```javascript
document.getElementById("factorial")
```

---

# Development Workflow

Typical workflow for updating the calculator:

```
git checkout -b feature-name
make changes
git add .
git commit -m "description"
git push origin feature-name
```

Then merge into `main`.

---

# Future Improvements

Possible enhancements:

* Keyboard input support
* Advanced expression parser
* Trigonometric functions (sin, cos, tan)
* Memory storage system
* Persistent history (localStorage)
* Mobile optimization

---

# Author

**Fawwaz Lawal**

Calculator project built as a learning exercise in:

* front-end development
* UI design
* JavaScript event systems
* Git workflows

# Running the Project

To run the calculator:

1. Open the project folder.
2. Open `basic-calculator.html` in a web browser.

Or use the **Live Server extension in VS Code**.

---

# Contributing
To update the project:

1. Create a new branch
git checkout -b "your-new-branch-name"

2. Make your changes

3. Stage your changes
git add . (the period (.) is important lol )

4. Commit the changes
git commit -m "Brief description of the changes"

 " -m " means message, so when you view the git history of updates.


5. Push the branch
git push origin "your-new-branch-name"
origin tells git where to send it


6. Open a Pull Request on GitHub.

---

# Learning Purpose

This project was created by Fawwaz Lawal as a **coding demo to learn web development and Git workflows**.
...