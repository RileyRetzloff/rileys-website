import { Rock_3D } from "next/font/google";
import { db } from "~/server/db";

export const dynamic = "force-dynamic";

const fileUrls = [
  "https://34ggzkze9s.ufs.sh/f/QUrPhpHwWNxUXSarqAf5NxjRVWc6L8Y4MQIFPTfUKtvy1uJi",
];

export default async function RecipesPage() {
  return (
    <div>
      <p>hi :3</p>
      <p>no recipes yet.</p>
      <p>by recipes i quite literally mean food i like to make.</p>
      <p>coming eventually, when i feel like doing it.</p>
    </div>
  );
}
