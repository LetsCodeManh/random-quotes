"use client";
import { useState } from "react";

function Footer() {
  // Can't do with prisma. I try but my knowledge is not there yet. Need help If possible. What I want to do in the beginning.
  /*
  - SetUp a Database with MongoDB, MySQL or PostgreSQL. I choose PostgreSQL. SinceI have it install and it's compatible with prisma. -Check

  - SetUp Prisma with the Database by using this 
  DATABASE_URL="postgresql://NAME:PASSOWORD@localhost:5432/DATABASE?schema=public"
  Using my own of course. After install prisma with npm install prisma and init with npx prisma init. Put the right DATABASE_URL and using npx prisma db pull. I should get the right schema when it's connected. -Check

  - Next step would be using the prisma/client. Set thing up and export prisma. So we can use it everywhere. -Check (The thing is somehow I always get an message that it can't run on the brower. My question would be why not? I am using nextJs??? Shouln't it be server-side-rendering first before it reach the browser? This is where I stuck...)

  - After getting the global prisma. I need do two request. First one would be getting the IP_adresse from the visitors and store it on the database. Second one would be getting the visitors number from the database. After the getting the number I can diplay it in the footer. But unfortunaly I got stuck in the step above...

  */
  const [visitorCount, setVisitorCount] = useState<number>(0);

  return (
    <footer
      className={`px-[5%] sm:px-[10%] md:px-[15%] lg:px-[20%] flex justify-between py-4`}
    >
      <p>
        Number of visitors:{" "}
        {visitorCount !== null ? visitorCount.toLocaleString() : "Loading..."}
      </p>
      {/* <p className="text">Build and Design with &#x2764;&#xfe0f; by Manh</p> */}
      <a
        className="text text-dark hover:text-primary transition-colors"
        href="https://github.com/LetsCodeManh/random-quotes"
        target="_blank"
      >
        Repository
      </a>
    </footer>
  );
}

export default Footer;
