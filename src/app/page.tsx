import prisma from '@/lib/db';
import { useTRPC } from '@/trpc/client';

export default function Home(){
  const trpc= useTRPC();
  trpc.hello.queryOptions({text:'from tRPC'});
   const users = prisma.user.findMany();
  return (
    <div>
      {JSON.stringify(users,null ,2)}
    </div>
  )
}

