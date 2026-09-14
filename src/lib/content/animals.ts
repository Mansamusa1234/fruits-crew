import type { AnimalRecord } from "./schema";
import { catalogAnimals } from "./animals-catalog";

export const animals: AnimalRecord[] = catalogAnimals;

export function getAnimal(slug: string) {
  return animals.find((a) => a.slug === slug);
}

export function animalsInRegion(id: string) {
  return animals.filter((a) => a.mapRegion === id);
}

export const animalKinds = [
  { id: "all", label: "All" },
  { id: "fish", label: "Fish" },
  { id: "mammal", label: "Mammals" },
  { id: "bird", label: "Birds" },
  { id: "insect", label: "Insects" },
  { id: "reptile", label: "Reptiles" },
  { id: "amphibian", label: "Amphibians" },
  { id: "invertebrate", label: "Other lives" },
] as const;

export const habitats = [
  { id: "all", label: "All homes" },
  { id: "ocean", label: "Ocean" },
  { id: "reef", label: "Reef" },
  { id: "river", label: "River" },
  { id: "wetland", label: "Wetland" },
  { id: "forest", label: "Forest" },
  { id: "garden", label: "Garden" },
  { id: "farm", label: "Farm" },
  { id: "savanna", label: "Savanna" },
  { id: "polar", label: "Polar" },
  { id: "sky", label: "Sky" },
  { id: "soil", label: "Soil" },
] as const;
