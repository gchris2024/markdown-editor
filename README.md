### Project Description

Reactive Markdown editor

### How to Run Locally

Use the `Live Server` extension

### Feature List

- Show live preview of text
- Display character counter (excluding HTML tags)
- Light/Dark Theme
- Persisting text and theme in localStorage
- Responsive (stacked mobile / split desktop)

### Milestone 1 Quiz

1. The purpose of `git commit` is to save changes in incremental steps.
2. When you push to GitHub, your changes get stored in the remote repository.
3. We should commit multiple times instead of once at the end to be able to get back to a previous working version and to have an easier time reviewing code.
4. A local repository is stored on your device, while a remote repository is stored on a server, like GitHub.

### Milestone 2 Quiz

1. `display: flex` turns an element into a flex container, allowing children to be aligned and spaced easily.
2. A media query is a CSS rule that applies styles conditionally.
3. Responsive design should be handled in CSS, not JS, to keep logic from styling.
4. If a media query is placed before base styles, it may get overridden by the base styles written after it.

### Milestone 3 Quiz

1. In Vue, `data` stores reactive state, while `computed` derives reactive values based on data and updates automatically.
2. We should not manipulate the DOM manually in Vue because Vue uses a virtual DOM and reactive updates. Editing it manually might introduce bugs.
3. `v-html` renders raw HTML inside an element.
4. We must strip HTML before counting characters to only count visible text--not HTML tags.

### Milestone 4 Quiz

1. localStorage is a browser API for storing key-value pairs that persist
2. `mounted()` runs when a Vue component is inserted into the DOM.
3. A Vue watcher is a reactive listener than runs when data changes.
4. Theme state should also be persisted for continuity across reloads and sessions.

### Final Reflection Quiz

1. See below sample prompts I used to help code the app.
2. Keeping track of state (message, theme) was the most challenging part because I haven't used Vue before--I wasn't familiar with the patterns.
3. The benefit of using Vue for frontend development is that it provides common built-in funcionality. For example, you can update save state easily using Vue's `data` property, and update it using `computed`.

### AI Usage

I used ChatGPT to help answer questions concisely and Copilot within VS Code for occasional code snippets (mostly via autocomplete) and explanations.

#### AI Prompts I Used

- How many of these Vue properties are built-in? New to Vue
- What other properties are used in creating a Vue app? Briefly go over the ones used here then explain some other common ones.
- Add a "Clear" button in the bottom left to clear all text currently in the textarea
