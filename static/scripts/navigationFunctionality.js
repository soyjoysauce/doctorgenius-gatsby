import phoneWhite from "../img/phone-white.svg"
import phoneBlue from "../img/phone-blue.svg"
import logoWhite from "../img/icon/logo-white.svg"
import logoBlue from "../img/icon/logo-blue.svg"

{
  if (typeof document !== "undefined") {
    document.addEventListener("DOMContentLoaded", function() {
      document.addEventListener("scroll", function(e) {
        const winScroll =
          document.body.scrollTop || document.documentElement.scrollTop

        // const height =
        //   document.documentElement.scrollHeight -
        //   document.documentElement.clientHeight
        // const scrolled = winScroll / height
        if (winScroll >= 100 && winScroll < 200) {
          document
            .querySelector("nav.navbar")
            .classList.add("main-navbar-stuck")
          document.querySelector("nav.navbar").classList.add("stuck-midway")
          document.querySelector("nav.navbar").classList.remove("stuck-fully")
          document.querySelector("nav.navbar .navbar-brand").src = logoBlue
          document.querySelector("nav.navbar .phone").src = phoneBlue
        } else if (winScroll >= 200) {
          document
            .querySelector("nav.navbar")
            .classList.add("main-navbar-stuck")
          document.querySelector("nav.navbar").classList.add("stuck-fully")
          document.querySelector("nav.navbar").classList.remove("stuck-midway")
          document.querySelector("nav.navbar .navbar-brand").src = logoBlue
          document.querySelector("nav.navbar .phone").src = phoneBlue
        } else {
          document
            .querySelector("nav.navbar")
            .classList.remove("main-navbar-stuck")
          document.querySelector("nav.navbar").classList.remove("stuck-midway")
          document.querySelector("nav.navbar .navbar-brand").src = logoWhite
          document.querySelector("nav.navbar .phone").src = phoneWhite
        }
      })
    })
  }
}
