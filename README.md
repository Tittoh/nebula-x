<a href="#">
  <img alt="Nebula X" src="./public/images/screenshot.jpg">
  <h1 align="center">✨ Nebula UI Concepts ✨</h1>
</a>
  <p align="center">✨ A collection of website concepts ✨</p>


## What's inside?

### Folder structure
```
nebula-x
├─ apps
│  ├─ app
│  │  └─ package.json
│  ├─ docs
│  │  └─ package.json
│  └─ web
│     └─ package.json
├─ packages
│  └─ shared
│     └─ package.json
└─ package.json
```

### Apps and Packages

- [React 18](https://reactjs.org/) 
- [Next.js 13](https://nextjs.org/) 
- [Turborepo](https://turbo.build/repo)
- [Tailwind CSS](https://tailwindcss.com/)
- [@iconify/react](https://docs.iconify.design/icon-components/react/)
- `eslint-config-custom`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `tsconfig`: `tsconfig.json`s used throughout the monorepo

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

This turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting

### Build

To build all apps and packages, run the following command:

```
cd nebula-x
pnpm run build
```

### Develop

To develop all apps and packages, run the following command:

```
cd nebula-x
pnpm run dev
```
## Author

- Titus K. (twitter [𝓣𝓲𝓽𝓽𝓸𝓱](https://twitter.com/_tittoh)).

## Useful Links

Learn more about the power of Turborepo:

- [Tasks](https://turbo.build/repo/docs/core-concepts/monorepos/running-tasks)
- [Caching](https://turbo.build/repo/docs/core-concepts/caching)
- [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching)
- [Filtering](https://turbo.build/repo/docs/core-concepts/monorepos/filtering)
- [Configuration Options](https://turbo.build/repo/docs/reference/configuration)
- [CLI Usage](https://turbo.build/repo/docs/reference/command-line-reference)
