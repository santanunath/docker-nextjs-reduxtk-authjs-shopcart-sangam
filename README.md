## Tested: ERROR

## Created by: Sangam Mukherjee


This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).



## Tech Stack
- Nextjs (v14.2.3) Reactjs v18
- Nodejs (version in Dockerfile)
- radix-ui
- class-variance-authority
- clsx
- lucide-react
- next-auth
- react-redux (redux toolkit)
- tailwindcss

## used 'Redux Toolkit' for session management 

## Error:
[auth][error] UntrustedHost: Host must be trusted. URL was:   http://192.168.0.102:3000/api/auth/session. Read more at     https://errors.authjs.dev#untrustedhost  (auth.js)  
(Thrown when the 'trustHost' option was not set to 'true').    
  

### Fetching data from third pary API https://dummyjson.com/products (see in /src/actions/index.js)
      
## Nextjs14/15 application structure 
  
- 'public' and 'src/app' folders are created automatically.   
- a default Home page is created automatically in '/src/app/page.js'
- all 'pages' in nextjs must be defined inside folder /src/app/
- all server actions (API substitute) defined in folder /src/actions/
- all 'ui components' are defined inside folder /src/components/ 
- for Redux Toolkit, we have created folders src/lib, src/procider, src/store
- third party API (https://dummyjson.com/products) called in /src/actions/


## Getting Started

First, install the dependencies (listed in package.json file)

```bash
npm install 
# or
npm i
```

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
