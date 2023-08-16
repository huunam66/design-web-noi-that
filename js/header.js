const body = document.querySelector("body");
const header = body.querySelector("header");
let nav_link = header.querySelectorAll(".nav-item");
const nav_link_hov = () => {
  nav_link.forEach((item) => {
    let prod = item.querySelector(".prod");
    if (prod) {
      item.addEventListener("mouseenter", () => {
        prod.classList.remove("d-none");
      });
      item.addEventListener("mouseleave", () => {
        prod.classList.add("d-none");
      });
    }
  });
};
nav_link_hov();

const s_log = header.querySelector(".s-log");
const log = s_log.querySelector(".log");
const user_ic = log.querySelector(".user");
const go = log.querySelector(".go");
const user_ic_hov = () => {
  user_ic.addEventListener("mouseenter", () => {
    go.classList.remove("d-none");
  });
  log.addEventListener("mouseleave", () => {
    go.classList.add("d-none");
  });
};
user_ic_hov();

const search_f = s_log.querySelector(".s");
const input_s = search_f.querySelector(".c-in");
const icon_ic = search_f.querySelector(".btn-ops");
const input_cls_ic = input_s.querySelector("ion-icon");
const icon_ic_click = () => {
  icon_ic.addEventListener("click", () => {
    input_s.classList.remove("d-none");
    input_s.classList.add("d-flex");
  });
  input_cls_ic.addEventListener("click", () => {
    input_s.classList.remove("d-flex");
    input_s.classList.add("d-none");
  });
};
icon_ic_click();

const sticky_header_mk = () => {
  let height_header = header.clientHeight;
  window.addEventListener("scroll", () => {
    new IntersectionObserver((obs) => {
      let height_view_lost = obs[0].boundingClientRect.top;
      // console.log("height_view_lost: " + height_view_lost);
      // console.log("height_header: " + height_header);
      if (-height_view_lost >= height_header) {
        body.classList.add("sticky");
      }
      if (-height_view_lost < height_header) {
        body.classList.remove("sticky");
      }
    }).observe(body);
  });
};
sticky_header_mk();

const sect_5 = body.querySelector(".sect-5");
const grid_box_sect_5 = sect_5.querySelector(".box");
const card = grid_box_sect_5.querySelectorAll(".card");
const e_card_hov = () => {
  card.forEach((item) => {
    let img_s = item.querySelectorAll("picture img");
    let btn_link_more = item.querySelector(".btn-link-more");
    let btn_add_c = btn_link_more.querySelector("button");
    let btn_show_mr = btn_link_more.querySelector("a");
    item.addEventListener("mouseenter", () => {
      if (img_s.length == 2) {
        img_s[0].className = "hide-an";
        img_s[1].className = "show-an";
      }
      btn_add_c.classList.remove("d-none");
      btn_show_mr.classList.remove("d-none");
    });
    item.addEventListener("mouseleave", () => {
      if (img_s.length == 2) {
        img_s[1].className = "hide-an";
        img_s[0].className = "show-an";
      }
      btn_add_c.classList.add("d-none");
      btn_show_mr.classList.add("d-none");
    });
  });
};
e_card_hov();

const sect_1 = body.querySelector(".sect-1");
const cont_sect_1 = sect_1.querySelector(".container");
const ct = sect_1.querySelector(".ct");
const flag_ct_on = true;
const flag_ct_off = false;
let flag_ct = flag_ct_off;

const e_ct_mousemove = () => {
  cont_sect_1.addEventListener("mousemove", (e) => {
    if (flag_ct === flag_ct_on) {
      // console.log(client_pos_moudwn);
      // console.log(flag_ct);
      ct.style = `--move-x: ${e.clientX - client_pos_x}px; 
                  --move-y: ${e.clientY - client_pos_y}px`;
    } else {
      // console.log(flag_ct);
      ct.style = `--move-x: 0; --move-y: 0; transition: all .3s !important`;
    }
  });
};
e_ct_mousemove();

const e_ct_mouseleave = () => {
  cont_sect_1.addEventListener("mouseleave", () => {
    ct.style = `--move-x: 0; --move-y: 0; transition: all .3s !important`;
    flag_ct = flag_ct_off;
  });
};
e_ct_mouseleave();

let client_pos_x = null;
let client_pos_y = null;
const e_ct_mousedown = () => {
  ct.addEventListener("mousedown", (e) => {
    client_pos_x = e.clientX;
    client_pos_y = e.clientY;
    flag_ct = flag_ct_on;
  });
};
e_ct_mousedown();

const e_ct_mouseup = () => {
  ct.addEventListener("mouseup", () => {
    flag_ct = flag_ct_off;
  });
};
e_ct_mouseup();

const grid_box_item_sect5 = grid_box_sect_5.querySelectorAll(".grid-box-item");
const auto_h_gridItem_sect5 = () => {
  for (let key in grid_box_item_sect5) {
    let h_card = card[key].offsetHeight;
    grid_box_item_sect5[key].style = `--height-scgr-5: ${h_card}px`;
  }
};

// const auto_height_bg_sect_1 = () => {
//   let wd_cont = cont_sect_1.offsetWidth;
//   cont_sect_1.style = `--height-cs1: ${wd_cont / 2}px`;
// };

const navlist = body.querySelector(".nav-list");
const succinct_nav = () => {
  const nav_item_sct = body.querySelectorAll(".nav-item-sct");
  let temp_nav_item_sct = nav_item_sct;
  nav_item_sct.forEach((item) => {
    item.remove();
  });
  const succinct = document.createElement("li");
  succinct.className = "nav-item succinct";
  const objects_horizontal_left = document.createElement("i");
  objects_horizontal_left.className = "bx bxs-objects-horizontal-left";
  succinct.appendChild(objects_horizontal_left);
  const ol_prod = document.createElement("ol");
  ol_prod.className = "prod d-none";
  temp_nav_item_sct.forEach((item) => {
    item.className = "prod--item";
    ol_prod.appendChild(item);
  });
  succinct.appendChild(ol_prod);
  navlist.appendChild(succinct);
  nav_link = header.querySelectorAll(".nav-item");
  nav_link_hov();
};

const back_to_before_nav = () => {
  const succinct = body.querySelector(".succinct");
  navlist.removeChild(succinct);
  let i = 0;
  for (; i < 3; i++) {
    const li = document.createElement("li");
    li.className = "nav-item nav-item-sct";
    if (i == 0) li.innerHTML = `<a href="#">bộ sưu tập</a>`;
    else if (i < 2) li.innerHTML = `<a href="#">thiết kế nội thất</a>`;
    else li.innerHTML = `<a href="#">góc cảm hứng</a>`;
    navlist.appendChild(li);
  }
};

const user = "huunam66";

let height_screen_dt = null;

const navbar = body.querySelector(".navbar");
let log_user_mode = body.querySelector(".log");
const update_nav_mb = () => {
  body.classList.add("mb");
  let temp_log_user_mode = log_user_mode;
  log_user_mode.remove();
  let p = document.createElement("p");
  p.innerHTML = user;
  let us = temp_log_user_mode.querySelector(".us");
  let user_pic = us.querySelector(".user");
  us.insertBefore(p, user_pic).firstChild;
  navbar.insertBefore(temp_log_user_mode, navlist).firstChild;
  const div = document.createElement("div");
  div.classList.add("icon-o-cl");
  div.appendChild(document.createElement("span"));
  div.appendChild(document.createElement("span"));
  let s_log = header.querySelector(".s-log");
  s_log.appendChild(div);
  const succinct = navlist.querySelector(".succinct");
  succinct ? navlist.removeChild(succinct) : null;
  let i = 0;
  for (; i < 3; i++) {
    const li = document.createElement("li");
    li.className = "nav-item nav-item-sct";
    if (i == 0) li.innerHTML = `<a href="#">bộ sưu tập</a>`;
    else if (i < 2) li.innerHTML = `<a href="#">thiết kế nội thất</a>`;
    else li.innerHTML = `<a href="#">góc cảm hứng</a>`;
    navlist.appendChild(li);
  }

  let navItem_firstChild = navlist.querySelector(".nav-item:first-child");
  navItem_firstChild.removeChild(
    navItem_firstChild.querySelector("a:first-child")
  );
  let navItem_nthChild_2 = navlist.querySelector(".nav-item:nth-child(2)");
  navItem_nthChild_2.removeChild(
    navItem_nthChild_2.querySelector("a:first-child")
  );

  p = document.createElement("p");
  p.innerHTML = "phòng";
  let span = document.createElement("span");
  span.classList.add("more");
  span.innerHTML = "&rsaquo;";
  navItem_nthChild_2.insertBefore(
    span,
    navItem_nthChild_2.querySelector(".prod")
  ).firstChild;
  navItem_nthChild_2.insertBefore(p, navItem_nthChild_2.querySelector(".more"))
    .firstChild;

  p = document.createElement("p");
  p.innerHTML = "sản phẩm";
  span = document.createElement("span");
  span.classList.add("more");
  span.innerHTML = "&rsaquo;";
  navItem_firstChild.insertBefore(
    span,
    navItem_firstChild.querySelector(".prod")
  );
  navItem_firstChild.insertBefore(p, navItem_firstChild.querySelector(".more"))
    .firstChild;
  update_height_nav_mb();
  height_screen_dt = navbar.getBoundingClientRect().height;
};

const update_height_nav_mb = () => {
  new IntersectionObserver((e) => {
    let height_screen = e[0].intersectionRect.height;
    navbar.style.height = `${height_screen}px`;
  }).observe(body);
};

let cur_mb = true;
let cur_1150 = true;
const e_win_resize = () => {
  window.addEventListener("resize", (e) => {
    // auto_height_bg_sect_1();
    auto_h_gridItem_sect5();
    if (body.offsetWidth <= 1150 && cur_1150) {
      succinct_nav();
      cur_1150 = false;
    }
    if (body.offsetWidth > 1150 && !cur_1150) {
      back_to_before_nav();
      cur_1150 = true;
    }
    if (body.offsetWidth <= 650 && cur_mb) {
      update_nav_mb();
      cur_mb = false;
    }
    console.log(height_screen_dt);
    if (e.srcElement.innerHeight < height_screen_dt) {
      console.log(true);
      navbar.style += "overflow-y: auto;";
    }
  });
};
e_win_resize();

const r_width_cont = cont_sect_1.offsetWidth;
window.onload = () => {
  auto_h_gridItem_sect5();
  if (body.offsetWidth <= 1150 && cur_1150) {
    succinct_nav();
    cur_1150 = false;
  }
  if (body.offsetWidth > 1150 && !cur_1150) {
    back_to_before_nav();
    cur_1150 = true;
  }
  if (body.offsetWidth <= 650 && cur_mb) {
    update_nav_mb();
    cur_mb = false;
  }
  // cont_sect_1.style = `--height-cs1: ${r_width_cont / 2}px`;
};
