export interface Route {
  path: string;
  component: React.Component;
  match: (input: string) => boolean;
}

export const homeRoute = {
  path: "/",
  match: (input: string) => basicMatch(input, "/"),
};

export const organisationListRoute = {
  path: "/list",
  match: (input: string) => basicMatch(input, "/list"),
};

export const organisationUserDetailsRoute = {
  path: "/detail/:id",
  match: (input: string) => input.startsWith("/detail/"),
};

export const actorListRoute = {
  path: "/actor-list",
  match: (input: string): boolean => basicMatch(input, "/actor-list"),
};

export const actorDetailRoute = {
  path: "/actor-detail/:id",
  match: (input: string) => input.startsWith("/actor-detail/"),
};

const basicMatch = (input: string, path) => input === path;
