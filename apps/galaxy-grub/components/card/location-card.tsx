import { Card } from "../ui/card";
import { Typography } from "../ui/typography";

export type LocationCardProps = {};

export const LocationCard: React.FC<LocationCardProps> = ({}) => {
  return (
    <div className="bg-accent p-4 rounded-lg aspect-square">
      <Typography variant="h4">Location</Typography>
      <Typography variant="p">venue.location</Typography>
    </div>
  );
};
