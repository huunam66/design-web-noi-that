$(document).ready(function () {
  const sect_card = $("body").find(".sect-card");
  const card = sect_card.find(".card");
  const intersect_card_view = () => {
    card.each(function () {
      let seft_card = $(this);
      let pic = seft_card.find(".pic");
      let img = pic.find("img");
      let intersect_card = new IntersectionObserver((e) => {
        if (e[0].isIntersecting) {
          setTimeout(() => {
            img.each(function () {
              let data_set = $(this).attr("data-set");
              $(this).attr("src", data_set);
              $(this).addClass("lazy-loading-05");
              setTimeout(() => {
                $(this).removeClass("lazy-loading-05");
              }, 500);
            });
            intersect_card.observe(sect_card[0]);
          }, 400);
        }
      });
      intersect_card.observe(seft_card[0]);
      // console.log(seft_card[0]);
    });
  };
  intersect_card_view();
});
