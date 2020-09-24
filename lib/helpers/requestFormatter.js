export const setHeaders = (bearerToken) => ({
  headers: {
    Authorization: bearerToken,
  },
});

export const setUserParams = (user) => ({
  user: { ...user },
});
