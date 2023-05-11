import { cachedFetch } from "../lib/sanity";

type Pet = {
  _id: string;
  name: string;
};

export default async function Page() {
  const pets = await cachedFetch<Pet[]>(`*[_type == "pet"]`);

  return (
    <main>
      <h1>Hi :)</h1>
      <ul>
        {pets.map((pet) => (
          <li key={pet._id}>{pet.name}</li>
        ))}
      </ul>
    </main>
  );
}
