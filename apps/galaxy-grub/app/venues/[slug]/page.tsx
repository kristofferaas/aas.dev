import { Main } from "@/components/layout/main";
import { Typography } from "@/components/ui/typography";
import { VenueWithImage } from "../_types";
import { cachedFetch } from "@/lib/sanity";
import { Image } from "@/components/ui/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Avatar } from "@/components/ui/avatar";
import { DescriptionCard } from "@/components/card/description-card";
import { LocationCard } from "@/components/card/location-card";

// TODO: Change to slug
const groq = `*[_type == 'venue' && _id == $slug][0]{
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

export default async function VenuePage({
  params,
}: {
  params: { slug: string };
}) {
  const venue = await cachedFetch<VenueWithImage>(groq, { slug: params.slug });

  return (
    <Main className="space-y-8">
      <AspectRatio ratio={10 / 3} className="overflow-hidden rounded-lg">
        <Image src={venue.bannerImage} alt={venue.name} className="w-full" />
      </AspectRatio>
      <div className="flex">
        <Avatar className="mr-8 w-16 h-16">
          <Image src={venue.avatar} alt={venue.name} />
        </Avatar>
        <Typography variant="h1" className="self-center">
          {venue.name}
        </Typography>
      </div>
      <div className="grid grid-cols-2 gap-8 md:grid-cols-3">
        <DescriptionCard className="col-span-2" value={venue.description} />
        <LocationCard />
      </div>
    </Main>
  );
}
