import { cachedFetch } from "@/lib/sanity";
import { Typography } from "ui";
import { Venue } from "./_types";

const groq = `*[_type == 'venue']`;

export default async function VenuesPage() {
  const venues = await cachedFetch<Venue[]>(groq);

  return (
    <main className="container max-w-2xl">
      <Typography variant="h1">Venues</Typography>
      <code>{JSON.stringify(venues, null, 2)}</code>
    </main>
  );
}
