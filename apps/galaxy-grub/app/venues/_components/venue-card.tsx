"use client";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Avatar } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { Image } from "@/components/ui/image";
import { Typography } from "@/components/ui/typography";
import { VenueWithImage } from "../_types";

export const VenueCard = ({ name, avatar, bannerImage }: VenueWithImage) => {
  return (
    <AspectRatio ratio={16 / 10} asChild>
      <Card className="flex flex-col flex-auto overflow-hidden p-4 space-y-4 hover:bg-accent hover:text-accent-foreground">
        <div className="overflow-hidden rounded-lg flex-shrink">
          <Image src={bannerImage} alt={name} />
        </div>
        <div>
          <div className="flex">
            <Avatar className="mr-4">
              <Image src={avatar} alt={name} />
            </Avatar>
            <Typography variant="h4" className="self-center">
              {name}
            </Typography>
          </div>
        </div>
      </Card>
    </AspectRatio>
  );
};
