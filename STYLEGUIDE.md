# Style Guide

## Coding and Documentation Standards

### 1. TSDoc Commenting Standard
When adding documentation comments to functions, components, hooks, interfaces, or classes, always use the **TSDoc** (`/** ... */`) format. 
* Do not use standard inline comments (`//`) for API, component-level, hook, interface, or class documentation.
* Standard inline comments (`//`) should only be used for brief notes inside function bodies or for local configuration variables.

### 2. Minimize Use of `useEffect`
Do not use `useEffect` for data transformations, rendering calculations, or state synchronizations that can be calculated dynamically during render or handled directly inside event handlers. 
* Use `useEffect` only when synchronizing with external systems outside of React's control (e.g., direct DOM manipulations, window event listeners, setups for external libraries, WebSockets, or browser-only APIs).

### 3. No Emojis Rule
Do not use emojis under any circumstances within the codebase or application outputs.
* This applies to User Interfaces (UI), source code comments, documentation (including Markdown files), terminal outputs, logs, and Git commit messages.
* Use clean text or professional vector iconography (e.g., Lucide icons) for visual indicators.