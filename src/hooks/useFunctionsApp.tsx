export function capitalizeWord(str: string | undefined) {
  if (str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  return str;
}
