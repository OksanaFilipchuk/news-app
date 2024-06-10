export interface NewsItemData {
  id: number;
  title: string;
  url: string;
  image_url: string;
  news_site: string;
  summary: string;
  published_at: string;
  updated_at: string;
  featured: boolean;
  launches: [];
  events: [];
}

export interface NewsResponce {
  count: number;
  next: string | null;
  previous: string | null;
  results: NewsItemData[];
}
