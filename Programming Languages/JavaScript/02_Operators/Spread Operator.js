const sora = {
  name: "Sora",
  homeworld: "Destiny Islands",
  weapon: "Keyblade",
};
const riku = { ...sora };
riku.name = "Riku";
const mickey = {
  ...sora,
  name: "Mickey",
  homeworld: "Disney Castle",
};
console.log(sora);
console.log(riku);
console.log(mickey);
