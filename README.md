# Simple row calculator(React + TypeScript + Vite + Shadcn UI +TailwindCSS)

[![Netlify Status](https://api.netlify.com/api/v1/badges/c3051ef8-9877-4bc4-8908-e5fa28a2a8c7/deploy-status)](https://app.netlify.com/sites/my-simple-react-calculator/deploys)

Link for live preview: https://my-simple-react-calculator.netlify.app/

How to start the project locally:

- git clone https://github.com/beardy-raccoon/react-calculator.git
- npm install
- npm run dev

Functionality:

- rows can be added and removed
- each row has a sign (minus or plus)
- each row can be enabled or disabled by a dedicated control switch. Disabled rows excluded from the addition.
- result updated "live" while the user is writing

- to avoid using an index as a key used the lightweight nanoid library
- to encapsulate the state and logic of the calculator a custom hook used
- implemented result limitation to prevent exceeding the boundaries of safe integers(for alternative 'BigInts' could be used)
- to inform users about reaching limit of calculations special message provided:

[![Error message](https://i.postimg.cc/yNxZGNZ0/Screenshot-2024-01-19-at-15-48-53.png)](https://postimg.cc/8F8cJNwC)

# Codestyle:

To uphold the best coding standards provided and configured Eslint and Prettier

To run lint check:

- npm run lint .

To format code:

- npx prettier . --write

# UI

For the fast delivery of the smooth and friendly UI were used beautifully designed components built using RadixUI and TailwindCSS provided by Shadcn UI

Benefits of Shadcn UI:

- Ease of use
- Accessibility
- Fine-grained control and extensibility

# Additional features:

Switching between dark and light themes:

[![Dark theme](https://i.postimg.cc/G3qyJYNq/Screenshot-2024-01-19-at-15-32-48.png)](https://postimg.cc/3W0N3y3v)

[![Light theme](https://i.postimg.cc/Gt9jRjVh/Screenshot-2024-01-19-at-15-07-08.png)](https://postimg.cc/K3STrtmd)

Basic adaptation for mobile devices(320px-768px):

[![Mobile preview](https://i.postimg.cc/MT9gpvFd/Screenshot-2024-01-19-at-15-17-25.png)](https://postimg.cc/47hW8NZ9)
