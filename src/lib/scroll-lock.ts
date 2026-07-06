let scrollLockY = 0;

export function lockPageScroll() {
  scrollLockY = window.scrollY;
  document.documentElement.style.overflow = "hidden";
  document.body.style.overflow = "hidden";
  document.body.style.position = "fixed";
  document.body.style.top = `-${scrollLockY}px`;
  document.body.style.left = "0";
  document.body.style.right = "0";
  document.body.style.width = "100%";
}

export function unlockPageScroll(resetTop = true) {
  document.documentElement.style.overflow = "";
  document.body.style.overflow = "";
  document.body.style.position = "";
  document.body.style.top = "";
  document.body.style.left = "";
  document.body.style.right = "";
  document.body.style.width = "";
  if (resetTop) {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  } else {
    window.scrollTo({ top: scrollLockY, left: 0, behavior: "instant" });
  }
}
