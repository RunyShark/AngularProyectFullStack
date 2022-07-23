export interface IdeaRes {
  Error: boolean;
  msg: string;
  newOIdea: NewOIdea;
}

export interface NewOIdea {
  title: string;
  creationDate: Date;
  description: string;
  image: string;
}
export interface IdeaPost {
  title: string;
  description: string;
  image: string;
}

export interface GetIdeas {
  Error: boolean;
  msg: string;
  results: Result[];
}

export interface Result {
  id: number;
  image: string;
  creationDate: Date;
  title: string;
  description: string;
}
