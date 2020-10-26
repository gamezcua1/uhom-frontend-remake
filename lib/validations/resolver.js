import { yupResolver } from "@hookform/resolvers";

export const setFormResolver = (
  isRequired,
  requiredResolver,
  noRequiredResolver
) => {
  const resolver = isRequired ? requiredResolver : noRequiredResolver;
  return resolver ? yupResolver(resolver) : null;
};
