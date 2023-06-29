"use client";

import { cn } from "@/lib/utils";
import { Typography } from "../ui/typography";
import { Button } from "../ui/button";
import {
  ChevronDownIcon,
  ChevronUpIcon,
  ChevronsUpDownIcon,
} from "lucide-react";
import { useState } from "react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../ui/collapsible";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

export type DescriptionCardProps = {
  className?: string;
  value: string;
};

export const DescriptionCard: React.FC<DescriptionCardProps> = ({
  className,
  value,
}) => {
  const [expanded, setExpanded] = useState(false);
  const paragraphs = value.split("\n\n");

  return (
    <Card className={cn("", className)}>
      <CardHeader>
        <CardTitle onClick={() => setExpanded(!expanded)}>
          Description
        </CardTitle>
      </CardHeader>
      <CardContent className="overflow-hidden max-h-20">
        {paragraphs.map((paragraph, index) => (
          <Typography key={index} className="block">
            {paragraph}
          </Typography>
        ))}
      </CardContent>
    </Card>
  );
};
