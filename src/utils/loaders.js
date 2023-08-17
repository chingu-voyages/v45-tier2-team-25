import { fetchStrikes } from "./api";

export async function homeLoader() {
  const strikesList = await fetchStrikes();
  return { strikesList };
}
