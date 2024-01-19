# React + TypeScript + Vite

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
  ![Error message](https://imgur.com/pbpA130)

Codestyle:

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

Additional features:

Switching between dark and light themes:

![Dark theme](https://imgur.com/SyVMJvE)

![Light theme](https://imgur.com/Zn08XFq)

Basic adaptation for mobile devices(320px-768px):

![Mobile view on 425px device](https://photos.app.goo.gl/qi6Ra8JF44rxY2g59)
