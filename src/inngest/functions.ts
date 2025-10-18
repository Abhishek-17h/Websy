import { inngest } from "./client";
import { openai, createAgent } from "@inngest/agent-kit";

export const helloWorld = inngest.createFunction(
  { id: "hello-world" },
  { event: "test/hello.world" },
  async ({ event }) => {
    const summerizer = createAgent({
      name: "summerizer",
      system: "You are an expert summerizer.  You summerize in 2 words.",
      model: openai({ model: "gpt-4o" }),
    });

    const { output } = await summerizer.run(
      `Summarize the following text in 2 words: ${event.data.value}`
    );
    return { output };
  }
);
