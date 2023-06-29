import { cn } from "@/lib/utils";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Typography } from "../ui/typography";

export type ProductCardProps = {
  className?: string;
  product: any;
};

export const ProductCard: React.FC<ProductCardProps> = ({
  className,
  product,
}) => {
  return (
    <Card className={cn("", className)}>
      <CardHeader>
        <CardTitle>{product.name}</CardTitle>
      </CardHeader>
      <CardContent>
        <Typography className="block">{product.description}</Typography>
      </CardContent>
    </Card>
  );
};
