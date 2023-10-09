new Glide(".glide", {
  type: "carousel",
  startAt: 0,
  perView: 3,
  gap: 30,
  keyboard: "checkbox.checked",
  breakpoints: {
    768: {
      gap: 12,
      perView: 2,
    },
    425: {
      gap: 8,
      perView: 2,
    },
  },
}).mount();
