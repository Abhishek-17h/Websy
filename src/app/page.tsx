"use client"

import { useTRPC } from '@/trpc/client';

export default function Home(){
  const trpc = useTRPC();
  trpc.hello.queryOptions({text:"world"});
   
  return (
    <div>
      "hello world"
    </div>
  )
}

