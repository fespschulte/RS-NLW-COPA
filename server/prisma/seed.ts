import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  const user = await prisma.user.create({
    data: {
      name: 'Fernando Pinto',
      email: 'fschultepinto@gmail.com',
      avatarUrl: 'http://github.com/fespschulte.png',
    }
  })

  const pool = await prisma.pool.create({
    data: {
      title: 'Example Pool',
      code: 'BOL123',
      ownerId: user.id
      
      
    }
  })

}



main ()