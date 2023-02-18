# Random-Quotes

This is a random-quotes application using the chucknorris API. https://api.chucknorris.io/

## Tasks

- Create a Next.js application with a Header, Content, and Footer section.
- In the Hedaer section, display a logo
- In the Content section, display a joke from the "dev" category along with a refresh button that fetches a new joke when clicked.
- Use the "Chucknorris API: https://api.chucknorris.io/" to fetch the jokes.
- In the Footer section, diplay a visitor counter that increments each time the site is visited.
- Use Prisma to store and retrieve the visitor count from a your choice database.
- Use Tailwind CSS to style the UI.

## Results

- It have a Header, Content, and Footer section.
- In the Header section I use just a h1 with "Chucknorris" text as a logo. Since I didn't get any Logo.
- In the content section there is Box with the joke and below that the refreshbutton. Bonus: below that all of the category is display and you can change it if you want to. But the default category is "dev".
- On the Footer section there is a visitorCounter. But I didn't manage to implement prisma with nextjs somehow... For more info just check the footer.tsx inside the components folder. There is more note on what I did and try.
- I style it mostly with tailwind except for the font-size. Because you have have clamp() in tailwind.
- I don't know if this is a bonus but there are some animation and transistion.
- Also on the footer is Link for the repo. But since you reading this already. You probably click on it. Maybe.

## Lessons Learned

- Since I never use prisma. I need to get better at it.
- Working a lit little bit more with APIs

## Questions

- Using prisma, and connecting the database and creating APIs routes. Isn't it the backend-side? Means this full project is a fullstack project?


This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
