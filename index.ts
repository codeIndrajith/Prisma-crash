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
    const users = await prisma.user.findMany();

    console.log(users);
}

main().then(async () => {
    await prisma.$disconnect();
}).catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
})