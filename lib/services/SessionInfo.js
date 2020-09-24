export function useSessionInfo() {
  if (localStorage) {
    const session = JSON.parse(localStorage.getItem("session"));
    return session;
  }
}
