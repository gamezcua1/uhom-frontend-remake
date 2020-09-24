export const smallImage = (src, alt) => ({
  alt: alt || "",
  isFluidWidth: true,
  src: src,
});

export const largeImage = (src) => ({
  src: src,
  width: 1426,
  height: 2000,
});
