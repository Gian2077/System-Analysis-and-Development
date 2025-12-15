const sora = {
  name: "Sora",
  homeworld: "Destiny Islands",
  weapon: "Keyblade",
};
const { name, ...rest } = sora;
console.log(name);
console.log(rest);
