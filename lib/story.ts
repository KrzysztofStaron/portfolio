export interface StoryContent {
  title: string;
  description: string;
  image: string;
  article?: string[];
  tags?: string[];
  link?: string;
  linkLabel?: string;
  categoryLabel?: string;
  imageClassName?: string;
  imageNatural?: { width: number; height: number };
}
