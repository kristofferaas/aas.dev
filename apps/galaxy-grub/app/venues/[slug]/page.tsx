import { Main } from "@/components/layout/main";
import { Typography } from "@/components/ui/typography";
import { VenueWithImage } from "../_types";
import { cachedFetch } from "@/lib/sanity";
import { Image } from "@/components/ui/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Avatar } from "@/components/ui/avatar";
import { DescriptionCard } from "@/components/card/description-card";
import { LocationCard } from "@/components/card/location-card";
import { Grid } from "@/components/layout/grid";
import { ProductCard } from "@/components/card/product-card";

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
      <Grid>
        <DescriptionCard className="col-span-3" value={venue.description} />
        <LocationCard />
      </Grid>
      <Products />
    </Main>
  );
}

const Products = async () => {
  const products = await cachedFetch(`*[_type == 'product']`);

  return (
    <div>
      <Typography variant="h3" className="my-4">
        Products
      </Typography>
      <Grid>
        {products.map((product: any) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </Grid>
    </div>
  );
};
