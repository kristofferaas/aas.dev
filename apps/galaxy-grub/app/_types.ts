export type Star = {
  _createdAt: string;
  _id: string;
  _rev: string;
  _type: "star";
  _updatedAt: string;
  name: string;
};

export type Planet = {
  _createdAt: string;
  _id: string;
  _rev: string;
  _type: "planet";
  _updatedAt: string;
  name: string;
};

export type StarWithPlanets = Star & {
  planets: Planet[];
};
