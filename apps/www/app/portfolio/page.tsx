import { cachedFetch } from "../../lib/sanity";

type Pet = {
  _id: string;
  name: string;
};

const getPets = async () => {
  const pets = await cachedFetch<Pet[]>("*[_type == 'pet']");
  return pets;
};

export default async function PortfolioPage() {
  const pets = await getPets();

  return (
    <article className="container mx-auto">
      <h1>Portfolio</h1>
      <ol>
        {pets.map((pet) => (
          <li key={pet._id}>{pet.name}</li>
        ))}
      </ol>
    </article>
  );
}
