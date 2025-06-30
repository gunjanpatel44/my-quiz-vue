# Interactive Quiz Application with Timer and Results

## ✨ Description

This Vue-based **Interactive Quiz App** presents a series of predefined questions to the user. It provides immediate feedback on each answer and displays a summary at the end. The project demonstrates key Vue 3 concepts such as reactive state, routing, dynamic components, and advanced composition features like `Pinia`, `script setup`, and composables.

---

## 🚀 Features

### 🔧 Vue Core Concepts

- **Vue Instance & Data Binding**: Manages quiz data and user interactions.
- **Directives (`v-if`, `v-for`, `v-show`)**: Conditionally renders question UI and feedback.
- **Event Handling (`v-on`)**: Handles answer selection, quiz navigation, and restart.
- **Two-way Binding (`v-model`)**: Binds user-selected answers for each question.

### 🧠 Logic & Reactivity

- **Computed Properties**: Calculates current score and remaining questions.
- **Watchers**: Observes answer selection and updates feedback instantly.
- **Lifecycle Hooks**: Loads quiz data on `created()` or `mounted()`.

### 🧹 Components

- **Global & Local Components**:

  - `Question.vue`: Displays a question and answer options.
  - `ResultSummary.vue`: Shows score and detailed results.

- **Props & Events**: Passes question data via props and emits selection events.
- **Slots**: Customizes layout of questions and answers via named slots.
- **Dynamic & Async Components**: Renders different question types (`MultipleChoice`, `TrueFalse`) dynamically.

### 🧱 Routing (Vue Router)

- `/start`: Quiz intro page with instructions.
- `/quiz/:id`: Displays a question page based on index.
- `/result`: Shows final result summary.

### 📦 State Management with Pinia

- Stores:

  - Quiz questions
  - Current index
  - User answers
  - Timer state

### ⏱ Timer Functionality

- **Composables**:

  - `useTimer()`: Handles countdown timer per question.
  - Emits timeout events and auto-submits unanswered questions.

### 🧙‍♂️ Advanced Vue 3 Features

- **Teleport**: Displays modals (e.g., quiz instructions or confirmation).
- **Suspense**: Gracefully loads async question components.
- **`<script setup>` Syntax**: Cleaner components with Composition API.
- **Custom Directives**:

  - `v-highlight`: Highlights selected or correct/incorrect answers.

---

## 🏗️ Project Structure

```
/src
├── /components
│   ├── Question.vue
│   ├── ResultSummary.vue
│   ├── MultipleChoice.vue
│   ├── TrueFalse.vue
│   └── Timer.vue
├── /views
│   ├── QuizStart.vue
│   ├── QuizPage.vue
│   └── QuizResult.vue
├── /stores
│   └── useQuizStore.ts
├── /composables
│   └── useTimer.ts
├── /directives
│   └── highlight.ts
├── App.vue
├── main.ts
└── router.ts
```

---

## 📦 Installation & Setup

```bash
npm install
npm run dev
```

---

## 🧪 Usage

1. Start the quiz via `/start`.
2. Navigate through questions.
3. See immediate feedback after each answer.
4. Final score and results shown on `/result`.

---

## 🔮 Future Enhancements

- Add difficulty levels.
- Backend integration for storing quiz attempts.
- Analytics and user dashboard.

---

## 🚲 Technologies

- Vue 3 + `<script setup>`
- Vue Router
- Pinia
- TypeScript
- Tailwind CSS (optional)
- Vite
