import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    // Create user
    // const user = await prisma.user.create({
    //     data: {
    //         name: "indrajith bodhinayaka",
    //         email: "indra@test.com"
    //     }
    // });

    // Get all users
    // const users = await prisma.user.findMany({
    //     include: {
    //         articles: true
    //     }
    // });

    // console.log(users);

    // create article and associate it with user
    // const article = await prisma.article.create({
    //     data: {
    //         title: 'Indrajith first article',
    //         body: "This is a indrajith first article",
    //         author: {
    //             connect: {
    //                 id: 1,
    //             }
    //         }
    //     }
    // })

    // Get all articles
    // const articles = await prisma.article.findMany();

    // Create user and article associate them
    // const user = await prisma.user.create({
    //     data: {
    //         name: "Jhone deo",
    //         email: "jhon@test.com",
    //         articles: {
    //             create: {
    //                 title: "Jhone first article",
    //                 body: "this is jhone first article"
    //             }
    //         }
    //     }
    // })

    // Create another article
    // const article = await prisma.article.create({
    //     data: {
    //         title: "Sample article",
    //         body: "This is a sample article",
    //         author: {
    //             connect: {
    //                 id: 2
    //             }
    //         }
    //     }
    // })

    // console.log(articles)


}

main().then(async () => {
    await prisma.$disconnect();
}).catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
})