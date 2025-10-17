"use client";
import { useTRPC } from "@/trpc/client";
import { toast } from "sonner";
import { useMutation } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { use, useState } from "react";

const Page = () => {
  const [value, setValue] = useState("");
  const trpc = useTRPC();
  const invoke = useMutation(
    trpc.invoke.mutationOptions({
      onSuccess: () => {
        toast.success("background job started");
      },
    })
  );

  return (
    <div className="p-4 max-w-7xl mx-auto flex justify-center">
      <Input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="border p-2 rounded mr-2"
      />
      <Button
        disabled={invoke.isPending}
        onClick={() => invoke.mutate({ value: value })}
      >
        Invoked background job
      </Button>
    </div>
  );
};
export default Page;
