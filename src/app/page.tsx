import prisma from '@/lib/db';

export default function Home(){
   const users = prisma.user.findMany();
  return (
    <div>
      {JSON.stringify(users,null ,2)}
    </div>
  )
}

