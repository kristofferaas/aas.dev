import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Image } from "@/components/ui/image";
import { Typography } from "@/components/ui/typography";
import { cachedFetch } from "@/lib/sanity";
import { VenueWithImage } from "./_types";
import { VenueCard } from "./_components/venue-card";
import Link from "next/link";
import { Main } from "@/components/layout/main";

export default async function VenuesPage() {
  return (
    <Main>
      <Typography variant="h1" className="mb-8">
        Venues
      </Typography>
      <VenueGrid />
    </Main>
  );
}

const groq = `*[_type == 'venue'] {
  ...,
  bannerImage {
    ...,
    asset -> {
      ...,
      metadata
    }
  },
  avatar {
    ...,
    asset -> {
      ...,
      metadata
    }
  }
}`;

const VenueGrid = async () => {
  const venues = await cachedFetch<VenueWithImage[]>(groq);

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      {venues.map((venue) => (
        <Link key={venue._id} href={`/venues/${venue._id}`}>
          <VenueCard key={venue._id} {...venue} />
        </Link>
      ))}
    </div>
  );
};
