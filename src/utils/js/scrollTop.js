export const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
    /* you can also use 'auto' behaviour
         in place of 'smooth' */
  });
};
