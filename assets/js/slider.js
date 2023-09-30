new Glide(".glide", {
  type: "carousel",
  startAt: 0,
  perView: 3,
  gap: 24,
  keyboard: "checkbox.checked",
  breakpoint: {
    768: {
      gap: 12,
    },
    425: {
      gap: 8,
    },
  },
}).mount();
