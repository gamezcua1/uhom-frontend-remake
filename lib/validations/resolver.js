import { yupResolver } from "@hookform/resolvers";

export const setFormResolver = (resolver) =>
  resolver ? yupResolver(resolver) : null;
