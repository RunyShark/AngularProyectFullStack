export interface IdeaRes {
  Error: boolean;
  msg: string;
  newOIdea: NewOIdea;
}
export interface Delete {
  Error: boolean;
  msg: string;
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

export interface Update {
  Error: boolean;
  msg: string;
  ideaUpdate: IdeaUpdate;
}

export interface IdeaUpdate {
  id: number;
  image: string;
  creationDate: Date;
  title: string;
  description: string;
}
export interface Ediet {
  image: string;
  title: string;
  description: string;
}
export interface IdeasByID {
  Error: boolean;
  msg: string;
  Result: Result;
}

export interface Result {
  id: number;
  image: string;
  creationDate: Date;
  title: string;
  description: string;
}

export interface NewRess {
  id?: number;
  image: string;
  creationDate?: Date;
  title: string;
  description: string;
}
