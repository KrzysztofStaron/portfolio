import sportData from "@/data/sport.json";

export interface SportCard {
  id: string;
  title: string;
  description: string;
  image: string;
  tags?: string[];
  link?: string;
  linkLabel?: string;
  article?: string[];
  imageClassName?: string;
  imageNatural?: { width: number; height: number };
}

const sportCards = sportData as SportCard[];

export function getSportCards(): SportCard[] {
  return sportCards;
}
