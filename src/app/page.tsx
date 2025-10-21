"use client";
import { useTRPC } from "@/trpc/client";
import { toast } from "sonner";
import { useMutation } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";

const Page = () => {
  const [value, setValue] = useState("");
  const trpc = useTRPC();

  const { data: messages } = useQuery(trpc.messages.getmany.queryOptions());
  const createMessage = useMutation(
    trpc.messages.create.mutationOptions({
      onSuccess: () => {
        toast.success("Message created");
      },
    })
  );

  return (
    <div className="p-4 max-w-7xl mx-auto flex flex-col justify-center">
      <div className="flex mb-10 gap-4">
        <Input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="border p-2 rounded mr-2"
        />
        <Button
          disabled={createMessage.isPending}
          onClick={() => createMessage.mutate({ value: value })}
        >
          Invoked background job
        </Button>
      </div>

      <div>{JSON.stringify(messages, null, 2)}</div>
    </div>
  );
};
export default Page;
