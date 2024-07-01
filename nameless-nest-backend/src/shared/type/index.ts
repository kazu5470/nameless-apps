export type Id = string;

type IdResponse = { id: Id };

export type CreateResponse = IdResponse;

export type Master = {
  id: Id;
  text: string;
};
