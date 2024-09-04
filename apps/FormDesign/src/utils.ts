export const getImgUrl = (name: string) => {
  return new URL(`./assets/source/${name}`, import.meta.url).href;
}
