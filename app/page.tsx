import { db } from "@/libs/db";

export default async function Home() {
  await db.set("hello", "hello");
  return <main className="">Home.</main>;
}
