const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal(".container .letter-now", {
  duration: 1000,
  delay: 1000,
});

ScrollReveal().reveal(".container img", {
  duration: 1000,
  delay: 1500,
});

ScrollReveal().reveal(".container .text__left", {
  ...scrollRevealOption,
  origin: "right",
  delay: 2000,
});

ScrollReveal().reveal(".container .text__right", {
  ...scrollRevealOption,
  origin: "left",
  delay: 2000,
});

ScrollReveal().reveal(".container .generate-now", {
  duration: 2500,
  delay: 2500,
});
