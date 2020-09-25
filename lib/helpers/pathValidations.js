export function redirectTo(pathToSkip, pathToRedirect) {
  const regex = new RegExp(pathToSkip);
  const currentPath = window.location.pathname;

  return regex.test(currentPath) ? pathToRedirect : currentPath;
}
