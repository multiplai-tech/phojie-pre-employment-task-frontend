<p align='center'>
<p align='center'>
  <img src='https://raw.githubusercontent.com/goteam-ti/frontend/main/public/og.png' alt='Redesign of GoTeam App' width='1260'/>
</p>

<p align='center'>
This app is a redesign of the GoTeam App.
</p>

<br>

<p align='center'>
<a href="https://jieui.com">Live Demo</a>
</p>

<br>


> **Note**: This project is for technical demonstration purposes only. It is not intended to be used as a production application.


<br>


## Features

- 💛 [UnaUI](https://github.com/una-ui/una-ui) - The atomic UI framework for Nuxt powered by Unocss Engine.

- 💚 [Nuxt 3](https://v3.nuxtjs.org/) - Latest version of Nuxt.

- 🎨 Theming system with Dark Mode support.

- 🔥 The `<script setup>` syntax.

- 🦾 TypeScript.

- 📲 [PWA](https://github.com/vite-pwa/nuxt) with offline support and auto update behavior.

- 🔐 Nuxt Auth doesn't work with Nuxt 3 yet, so I built my own from scratch. (Though still in development).

- ✅ Tasks CRUD - [Live Demo](https://jieui.com/tasks) 

## Plugins

### Nuxt Modules

- [UnaUI](https://github.com/una-ui/una-ui) - A nuxt module for [UnaUI](https://unaui.com/) framework
- [VueUse](https://github.com/vueuse/vueuse) - collection of useful composition APIs.
- [ColorMode](https://github.com/nuxt-modules/color-mode) - dark and Light mode with auto detection made easy with Nuxt.
- [Pinia](https://github.com/vuejs/pinia) - intuitive, type safe, light and flexible Store for Vue.
- [VitePWA](https://github.com/vite-pwa/nuxt) - zero-config PWA Plugin for Nuxt 3.

## Development

### Code Formatting

  - I use only [ESLint](https://eslint.org/) for code formatting. (Not fan of Prettier).

### Commits

  - I use [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) for commit messages.
  - I use Lint Staged and Simple Git Hooks to lint and format code before commiting. (An alternative to this is to use Husky and Lint Staged.

### Dev tools

- [TypeScript](https://www.typescriptlang.org/)
- [VS Code Extensions](./.vscode/extensions.json)
  - [Vite](https://marketplace.visualstudio.com/items?itemName=antfu.vite) - Fire up Vite server automatically
  - [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) - Vue 3 `<script setup>` IDE support
  - [Iconify IntelliSense](https://marketplace.visualstudio.com/items?itemName=antfu.iconify) - Icon inline display and autocomplete
  - [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

### Installation

1. Clone the repository

```bash
  git clone https://github.com/goteam-ti/frontend.git
  cd frontend
```

2. Install the dependencies

```bash
  yarn install 
```

3. Copy the example env file and make the required configuration changes in the .env file

```bash
  cp .env.example .env
```

4. Start the development server

```bash
  yarn dev
```

5. Visit [http://localhost:3000](http://localhost:3000)

### 🧪 Running tests

🚧 **Note:** Tests are still in development. 🚧

