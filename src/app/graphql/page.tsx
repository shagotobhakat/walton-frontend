"use client";

import { ApolloProvider, useQuery } from "@apollo/client/react";
import { client } from "@/lib/graphqlClient";
import { GET_COUNTRIES } from "@/lib/graphqlQueries";

interface Language {
  name: string;
}

interface Continent {
  name: string;
}

interface Country {
  code: string;
  emoji: string;
  name: string;
  continent: Continent;
  languages: Language[];
}

interface CountriesData {
  countries: Country[];
}

function Countries() {
  const { data, loading, error } = useQuery<CountriesData>(GET_COUNTRIES);

  if (loading) return <p className="p-6">Loading...</p>;
  if (error) return <p className="p-6">Error...</p>;

  return (
    <div className="p-6 grid grid-cols-2 md:grid-cols-4 gap-4">
      {data?.countries.map((c: Country) => (
        <div key={c.code} className="border p-4 rounded-xl shadow">
          <p className="text-2xl">{c.emoji}</p>
          <p className="font-semibold">{c.name}</p>
          <p className="text-sm text-gray-600">Continent: {c.continent.name}</p>
          <p className="text-sm text-gray-600">
            Languages: {c.languages.map((l) => l.name).join(", ") || "N/A"}
          </p>
        </div>
      ))}
    </div>
  );
}

export default function GraphQLPage() {
  return (
    <ApolloProvider client={client}>
      <h1 className="text-2xl font-bold p-6">GraphQL Demo</h1>
      <Countries />
    </ApolloProvider>
  );
}
