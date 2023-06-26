import { cachedFetch } from "@/lib/sanity";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Typography } from "@/components/ui/typography";

import { StarWithPlanets } from "./_types";

const groq = `*[_type == 'star']{
  ...,
  'planets': *[_type == 'planet' && references(^._id)]{
    _id,
    name
  }
}`;

export default async function Home() {
  const stars = await cachedFetch<StarWithPlanets[]>(groq);

  return (
    <main className="container max-w-2xl my-4">
      <Typography variant="h1" className="my-4">
        Stars
      </Typography>
      <ul>
        {stars.map((star) => (
          <Card
            key={star._id}
            className="shadow-white hover:shadow-lg transition-shadow ease-in"
          >
            <CardHeader>
              <CardTitle>{star.name}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <ul>
                <Typography variant="p">Planets:</Typography>
                {star.planets.map((planet) => (
                  <li key={planet._id}>{planet.name}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </ul>
    </main>
  );
}
