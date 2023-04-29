export interface Link {
  id: number;
  url: string;
  text: string;
  type: "github" | "rss" | "link";
}
