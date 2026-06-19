# Task Manager Application

A simple Task Manager Application built using HTML, CSS, and Vanilla JavaScript.

## Features

- Add Task
- Edit Task
- Complete Task
- Delete Task
- Dark Mode / Light Mode Toggle
- Event Delegation
- Event Bubbling
- Event Capturing
- Custom Data Attributes
- Dynamic DOM Manipulation

---

# Browser Rendering Pipeline

When a browser loads a webpage, it follows these steps:

### 1. Parsing
The browser reads the HTML code and converts it into tokens.

### 2. Tokenization
HTML tags, text, and attributes are converted into tokens.

### 3. DOM Tree
The browser creates a Document Object Model (DOM) tree from the HTML.

Example:

HTML
↓
Parsing
↓
Tokenization
↓
DOM Tree

### 4. CSSOM Tree
The browser reads CSS and creates a CSS Object Model (CSSOM) tree.

CSS
↓
CSSOM Tree

### 5. Render Tree
The DOM Tree and CSSOM Tree combine to form the Render Tree, which is used to display the webpage.

DOM Tree + CSSOM Tree
↓
Render Tree

---

# Event Bubbling

In event bubbling, the event travels from the child element to the parent element.

Example:

Child
↓
Parent
↓
Grandparent

When the child button is clicked, the event moves upward through its ancestors.

---

# Event Capturing

In event capturing, the event travels from the parent element to the child element.

Example:

Grandparent
↓
Parent
↓
Child

Capturing occurs before bubbling.

---

# Event Delegation

Instead of attaching separate event listeners to every button, a single event listener is attached to the parent container.

Benefits:

- Better performance
- Handles dynamically created elements
- Less code

---

# Attributes vs Properties

### Property

```javascript
input.value
```

Returns the current value of the input field.

### Attribute

```javascript
input.getAttribute("value")
```

Returns the initial value specified in HTML.

---

# DOM Manipulation Methods Used

- createElement()
- createTextNode()
- append()
- prepend()
- before()
- after()
- replaceWith()
- remove()

---

# Event Handling

The project uses:

```javascript
addEventListener()
```

For:

- Add Task
- Edit Task
- Complete Task
- Delete Task
- Theme Toggle

---

# Technologies Used

- HTML5
- CSS3
- JavaScript (Vanilla JS)

---

# Author

Taranjot Singh
