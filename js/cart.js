$(document).ready(function () {
  //add product to cart
  const add_pro_to_cart = () => {
    const card = $(".sect-card .box .grid-box .card");
    card.each(function () {
      const btn_add_cart = $(this).find(".btn-link-more button");
      const pic = $(this).find(".pic");
      const img = pic.find("img");
      btn_add_cart.on("click", function () {});
    });
  };
  add_pro_to_cart();

  const cart_ic_click = () => {
    $(".s-log .cart-ic").on("click", function () {
      let has = $(".cart").hasClass("open");
      if (!has) {
        $(".cart").addClass("open");
        $("body").addClass("overflow-hd");
      }
    });
  };
  cart_ic_click();

  const close_ic_cart_click = () => {
    $(".cart .box .close").on("click", function () {
      let has = $(".cart").hasClass("open");
      if (has) {
        $(".cart").removeClass("open");
        $("body").removeClass("overflow-hd");
      }
    });
  };
  close_ic_cart_click();

  const all_cb_click = () => {
    $(".cart .box .all-cb").on("click", function () {
      $(".list-pr .pr-item").each(function () {
        let item = $(this);
        let checkBox = item.find("figure").find(".c-b");
        if (!checkBox.prop("checked")) {
          checkBox.prop("checked", true);
        }
      });
    });
  };
  all_cb_click();

  const cancel_all_cb_click = () => {
    $(".cart .box .rmv-cb").on("click", function () {
      $(".list-pr .pr-item").each(function () {
        let item = $(this);
        let checkBox = item.find("figure").find(".c-b");
        if (checkBox.prop("checked")) {
          checkBox.prop("checked", false);
        }
      });
    });
  };
  cancel_all_cb_click();

  const change_val_cou_pr_up = () => {
    const num_pr = $(".cart .list-pr .pr-item .num-pr");
    num_pr.on("keyup", function () {
      // console.log($(this).val());
      if ($(this).val() < 1) {
        $(this).val(1);
      }

      if ($(this).val() > 100) {
        $(this).val(100);
      }
    });
  };
  change_val_cou_pr_up();
});
