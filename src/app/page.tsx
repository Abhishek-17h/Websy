"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function Home(){
  const [count,setcount] = useState(0);

  const handler=()=>setcount(count+1);
  const handler1=()=>setcount(count-1);
  return (
    <div>
      <div className="text">This is counter app</div>
      <div>count:${count}</div>
      <Button onClick={handler} >increse me</Button>
      <Button onClick={handler1} variant="destructive">decrese me</Button>
    </div>
  )
}

