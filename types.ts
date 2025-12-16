export interface Tribute {
  id: string;
  author: string;
  originalMessage: string;
  timestamp: number;
}

export interface Album {
  title: string;
  year: string;
  coverUrl: string;
  keyTrack: string;
}

export interface MentalHealthResource {
  name: string;
  description: string;
  link: string;
  icon: string;
}