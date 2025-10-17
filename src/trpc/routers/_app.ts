import { inngest } from '@/inngest/client';
import { z } from 'zod';
import { baseProcedure, createTRPCRouter } from '../init';
export const appRouter = createTRPCRouter({
  invoke: baseProcedure
    .input(
      z.object({
        value: z.string(),
      }),
    )
    .mutation(async({input})=>{
      await inngest.send({
        name:"test/hello.world",
        data:{
          value:input.value
        }
      })
      return {ok:"success"};
    })
    
});

export type AppRouter = typeof appRouter;