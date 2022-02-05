import React, { useEffect } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { Link, Route, Switch } from "react-router-dom";
import routes from "./routes";
import mainActions from "../Store/Actions/mainActions";
import $ from "jquery";
import "./assets/css/vendor/bootstrap.min.css";
import "./assets/css/vendor/material-design-iconic-font.min.css";
import "./assets/css/vendor/font-awesome.min.css";
import "./assets/css/vendor/themify-icons.css";
import "./assets/css/vendor/cryptocurrency-icons.css";
import "./assets/css/plugins/plugins.css";
import "./assets/css/helper.css";
import "./assets/css/style.css";
import "./assets/css/custom.css";
import "./assets/css/style-primary.css";

function Index({ isUserLoggedIn, full_name }) {
  const jQuerycode = () => {
    var $window = $(window);
    var $body = $("body");

    /*--
      Adomx Dropdown (Custom Dropdown)
  -----------------------------------*/
    if ($(".adomx-dropdown").length) {
      var $adomxDropdown = $(".adomx-dropdown"),
        $adomxDropdownMenu = $adomxDropdown.find(".adomx-dropdown-menu");

      $adomxDropdown.on("click", ".toggle", function (e) {
        e.preventDefault();
        var $this = $(this);
        if (!$this.parent().hasClass("show")) {
          $adomxDropdown.removeClass("show");
          $adomxDropdownMenu.removeClass("show");
          $this
            .siblings(".adomx-dropdown-menu")
            .addClass("show")
            .parent()
            .addClass("show");
        } else {
          $this
            .siblings(".adomx-dropdown-menu")
            .removeClass("show")
            .parent()
            .removeClass("show");
        }
      });
      /*Close When Click Outside*/
      $body.on("click", function (e) {
        var $target = e.target;
        if (
          !$($target).is(".adomx-dropdown") &&
          !$($target).parents().is(".adomx-dropdown") &&
          $adomxDropdown.hasClass("show")
        ) {
          $adomxDropdown.removeClass("show");
          $adomxDropdownMenu.removeClass("show");
        }
      });
    }

    /*--
      Header Search Open/Close
  -----------------------------------*/
    var $headerSearchOpen = $(".header-search-open"),
      $headerSearchClose = $(".header-search-close"),
      $headerSearchForm = $(".header-search-form");
    $headerSearchOpen.on("click", function () {
      $headerSearchForm.addClass("show");
    });
    $headerSearchClose.on("click", function () {
      $headerSearchForm.removeClass("show");
    });

    /*--
      Side Header
  -----------------------------------*/
    var $sideHeaderToggle = $(".side-header-toggle"),
      $sideHeaderClose = $(".side-header-close"),
      $sideHeader = $(".side-header");

    /*Add/Remove Show/Hide Class On Depending on Viewport Width*/
    function $sideHeaderClassToggle() {
      var $windowWidth = $window.width();
      if ($windowWidth >= 1200) {
        $sideHeader.removeClass("hide").addClass("show");
      } else {
        $sideHeader.removeClass("show").addClass("hide");
      }
    }
    $sideHeaderClassToggle();
    /*Side Header Toggle*/
    $sideHeaderToggle.on("click", function () {
      if ($sideHeader.hasClass("show")) {
        $sideHeader.removeClass("show").addClass("hide");
      } else {
        $sideHeader.removeClass("hide").addClass("show");
      }
    });
    /*Side Header Close (Visiable Only On Mobile)*/
    $sideHeaderClose.on("click", function () {
      $sideHeader.removeClass("show").addClass("hide");
    });

    /*--
      Side Header Menu
  -----------------------------------*/
    var $sideHeaderNav = $(".side-header-menu"),
      $sideHeaderSubMenu = $sideHeaderNav.find(".side-header-sub-menu");

    /*Add Toggle Button in Off Canvas Sub Menu*/
    $sideHeaderSubMenu
      .siblings("a")
      .append(
        '<span class="menu-expand"><i class="zmdi zmdi-chevron-down"></i></span>'
      );

    /*Close Off Canvas Sub Menu*/
    $sideHeaderSubMenu.slideUp();

    /*Category Sub Menu Toggle*/
    var $subMenuState = null;
    $sideHeaderNav.on("click", "li div, li .menu-expand", function (e) {
      var $this = $(this);
      if (
        $this.parent("li").hasClass("has-sub-menu")
        // $this.attr("href") === "#" ||
        // $this.hasClass("menu-expand")
      ) {
        // e.preventDefault();
        if ($subMenuState) {
          $this.siblings("ul").removeClass("show-sub-menu");
          $subMenuState = false;
          $this
            .find(".menu-expand i")
            .addClass("zmdi-chevron-down")
            .removeClass("zmdi-chevron-up");
          // $this.siblings('ul').removeClass('active').slideUp()
          // $this
          // .parent("li")
          // .removeClass("active")
          // .children("ul")
          // .slideUp()
          // .siblings("a")
          // .find(".menu-expand i")
          // .removeClass("zmdi-chevron-up")
          // .addClass("zmdi-chevron-down");
          // $this
          //   .parent("li")
          //   .siblings("li")
          //   .removeClass("active")
          //   .find("ul:visible")
          //   .slideUp()
          //   .siblings("a")
          //   .find(".menu-expand i")
          //   .removeClass("zmdi-chevron-up")
          //   .addClass("zmdi-chevron-down");
        } else {
          $this.siblings("ul").addClass("show-sub-menu");
          $subMenuState = true;
          $this
            .find(".menu-expand i")
            .removeClass("zmdi-chevron-down")
            .addClass("zmdi-chevron-up");
          // $this
          //   .parent("li")
          //   .addClass("active")
          //   .children("ul")
          //   .slideDown()
          //   .siblings("a")
          //   .find(".menu-expand i")
          //   .removeClass("zmdi-chevron-down")
          //   .addClass("zmdi-chevron-up");
          // $this
          //   .parent("li")
          //   .siblings("li")
          //   .removeClass("active")
          //   .find("ul:visible")
          //   .slideUp()
          //   .siblings("a")
          //   .find(".menu-expand i")
          //   .removeClass("zmdi-chevron-up")
          //   .addClass("zmdi-chevron-down");
        }
      }
    });
    $sideHeaderNav.on("click", ".show-sub-menu li a", function () {
      $subMenuState = true;
      $("ul.show-sub-menu").removeClass("show-sub-menu");

      $(".menu-expand i")
        .addClass("zmdi-chevron-down")
        .removeClass("zmdi-chevron-up");
    });

    // Adding active class to nav menu depending on page
    var pageUrl = window.location.href.substr(
      window.location.href.lastIndexOf("/") + 1
    );
    $(".side-header-menu a").each(function () {
      if ($(this).attr("href") === pageUrl || $(this).attr("href") === "") {
        $(this)
          .closest("li")
          .addClass("active")
          .parents("li")
          .addClass("active")
          .children("ul")
          .slideDown()
          .siblings("a")
          .find(".menu-expand i")
          .removeClass("zmdi-chevron-down")
          .addClass("zmdi-chevron-up");
      } else if (
        window.location.pathname === "/" ||
        window.location.pathname === "/index.html"
      ) {
        $('.side-header-menu a[href="index.html"]')
          .closest("li")
          .addClass("active")
          .parents("li")
          .addClass("active")
          .children("ul")
          .slideDown()
          .siblings("a")
          .find(".menu-expand i")
          .removeClass("zmdi-chevron-down")
          .addClass("zmdi-chevron-up");
      }
    });

    /*-- 
      Selectable Table
  -----------------------------------*/
    function tableSelectable() {
      var $tableSelectable = $(".table-selectable");
      $tableSelectable
        .find("tbody .selected")
        .find('input[type="checkbox"]')
        .prop("checked", true);
      $tableSelectable.on("click", 'input[type="checkbox"]', function () {
        var $this = $(this);
        if ($this.parent().parent().is("th")) {
          if (!$this.is(":checked")) {
            $this
              .closest("table")
              .find("tbody")
              .children("tr")
              .removeClass("selected")
              .find('input[type="checkbox"]')
              .prop("checked", false);
          } else {
            $this
              .closest("table")
              .find("tbody")
              .children("tr")
              .addClass("selected")
              .find('input[type="checkbox"]')
              .prop("checked", true);
          }
        } else {
          if (!$this.is(":checked")) {
            $this.closest("tr").removeClass("selected");
          } else {
            $this.closest("tr").addClass("selected");
          }
          if (
            $this.closest("tbody").children(".selected").length <
            $this.closest("tbody").children("tr").length
          ) {
            $this
              .closest("table")
              .find("thead")
              .find('input[type="checkbox"]')
              .prop("checked", false);
          } else if (
            $this.closest("tbody").children(".selected").length ===
            $this.closest("tbody").children("tr").length
          ) {
            $this
              .closest("table")
              .find("thead")
              .find('input[type="checkbox"]')
              .prop("checked", true);
          }
        }
      });
    }
    tableSelectable();

    /*-- 
      To Do List
  -----------------------------------*/
    function todoList() {
      // Variable
      var $todoList = $(".todo-list"),
        $todoListAddNew = $(".todo-list-add-new");
      //Todo List Check
      $todoList
        .find(".done")
        .find('input[type="checkbox"]')
        .prop("checked", true);
      $todoList.on("click", 'input[type="checkbox"]', function () {
        var $this = $(this);
        if (!$this.is(":checked")) {
          $this.closest("li").removeClass("done");
        } else {
          $this.closest("li").addClass("done");
        }
      });
      //Todo List Status Stared
      $todoList.on("click", ".status", function () {
        var $this = $(this);
        if (!$this.hasClass("stared")) {
          $this
            .addClass("stared")
            .find("i")
            .removeClass("zmdi-star-outline")
            .addClass("zmdi-star");
        } else {
          $this
            .removeClass("stared")
            .find("i")
            .removeClass("zmdi-star")
            .addClass("zmdi-star-outline");
        }
      });
      //Todo List Remove
      $todoList.on("click", ".remove", function () {
        $(this).closest("li").remove();
      });
      //Todo List Add New Status Stared
      $todoListAddNew.on("click", ".status input", function () {
        var $this = $(this);
        if ($this.prop("checked") === true) {
          $this
            .siblings(".icon")
            .removeClass("zmdi-star-outline")
            .addClass("zmdi-star");
        } else {
          $this
            .siblings(".icon")
            .removeClass("zmdi-star")
            .addClass("zmdi-star-outline");
        }
      });
      //Todo List Add New
      $todoListAddNew.on("click", ".submit", function (e) {
        e.preventDefault();
        var $content = $(this).siblings("input.content").val(),
          $date =
            $(this).closest(".todo-list-add-new").data("date") === false
              ? "d-none"
              : "d-block",
          $status = $(this).siblings(".status").find("input"),
          $stared = $status.prop("checked") === true ? "stared" : "",
          $staredIcon =
            $status.prop("checked") === true
              ? "zmdi-star"
              : "zmdi-star-outline";
        if ($content) {
          $todoList.prepend(
            '<li> <div class="list-action"> <button class="status ' +
              $stared +
              '"><i class="zmdi ' +
              $staredIcon +
              '"></i></button> <label class="adomx-checkbox"><input type="checkbox"> <i class="icon"></i></label> </div> <div class="list-content"><p>' +
              $content +
              '</p> <span class="time ' +
              $date +
              '">' +
              // moment(moment.utc().toDate()).format("h:mm a (YYYY-MM-DD)") +
              '</span> </div> <div class="list-action right"> <button class="remove"><i class="zmdi zmdi-delete"></i></button> </div></li>'
          );
          $(this).siblings("input.content").val("");
          $status
            .prop("checked", false)
            .siblings(".icon")
            .removeClass("zmdi-star")
            .addClass("zmdi-star-outline");
        }
      });
    }
    todoList();

    /*--
      Chat Contact
  -----------------------------------*/
    var $chatContactOpen = $(".chat-contacts-open"),
      $chatContactClose = $(".chat-contacts-close"),
      $chatContacts = $(".chat-contacts");
    $chatContactOpen.on("click", function () {
      $chatContacts.addClass("show");
    });
    $chatContactClose.on("click", function () {
      $chatContacts.removeClass("show");
    });

    // Common Resize function
    function resize() {
      $sideHeaderClassToggle();
    }
    // Resize Window Resize
    $window.on("resize", function () {
      resize();
    });
  };

  useEffect(() => {
    jQuerycode();
  });

  // if (!isUserLoggedIn) {
  //   return <Redirect to={"/auth/login"} />;
  // }

  //  const jQuerycode = () => {
  //       return 'sdfsadf'
  //   };
  if (!isUserLoggedIn) {
    return <Redirect to={"/auth/login"} />;
  }
  return (
    <>
      <div className="main-wrapper">
        <div className="header-section">
          <div className="container-fluid">
            <div className="row justify-content-between align-items-center">
              <div className="header-logo col-auto">
                <Link to={"/"}>
                  <img src="./assets/images/logo/logo.png" alt="" />
                  <img
                    src="./assets/images/logo/logo-light.png"
                    className="logo-light"
                    alt=""
                  />
                </Link>
              </div>
              <div className="header-right flex-grow-1 col-auto">
                <div className="row justify-content-between align-items-center">
                  <div className="col-auto">
                    <div className="row align-items-center">
                      <div className="col-auto">
                        <button className="side-header-toggle">
                          <i className="zmdi zmdi-menu"></i>
                        </button>
                      </div>

                      <div className="col-auto">
                        <div className="header-search">
                          <button className="header-search-open d-block d-xl-none">
                            <i className="zmdi zmdi-search"></i>
                          </button>

                          <div className="header-search-form">
                            <form action="#">
                              <input type="text" placeholder="جستجو کنید" />
                              <button>
                                <i className="zmdi zmdi-search"></i>
                              </button>
                            </form>
                            <button className="header-search-close d-block d-xl-none">
                              <i className="zmdi zmdi-close"></i>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-auto">
                    <ul className="header-notification-area">


                      <li className="adomx-dropdown col-auto">
                        <a className="toggle" href="#">
                          <span className="user">
                            <span className="avatar">
                              <img
                                src="assets/images/avatar/avatar-1.jpg"
                                alt=""
                              />
                              <span className="status"></span>
                            </span>
                            <span className="name">{full_name}</span>
                          </span>
                        </a>

                        <div className="adomx-dropdown-menu dropdown-menu-user">
                          <div className="head">
                            <h5 className="name">
                              <a href="#">bile gates</a>
                            </h5>
                            <a className="mail" href="#">
                              mailnam@mail.com
                            </a>
                          </div>
                          <div className="body">
                            <ul>
                              <li>
                                <a href="#">
                                  <i className="zmdi zmdi-account"></i>profile
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i className="zmdi zmdi-email-open"></i>
                                  sending dropbox
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i className="zmdi zmdi-wallpaper"></i>
                                  activities
                                </a>
                              </li>
                            </ul>
                            <ul>
                              <li>
                                <a href="#">
                                  <i className="zmdi zmdi-settings"></i>setting
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i className="zmdi zmdi-lock-open"></i>log out
                                </a>
                              </li>
                            </ul>
                            <ul>
                              <li>
                                <a href="#">
                                  <i className="zmdi zmdi-paypal"></i>prices
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i className="zmdi zmdi-google-pages"></i>
                                  prices
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="side-header show">
          <button className="side-header-close">
            <i className="zmdi zmdi-close"></i>
          </button>
          <div className="side-header-inner custom-scroll ps">
            <nav className="side-header-menu" id="side-header-menu">
              <ul>
                <li className="has-sub-menu">
                  <div>
                    <i className="ti-home"></i> <span>songs</span>
                    <span className="menu-expand">
                      <i className="zmdi zmdi-chevron-down"></i>
                    </span>
                  </div>
                  <ul
                    className="side-header-sub-menu"
                    style={{ display: "none" }}
                  >
                    <li>
                      <Link to={"/dashboard/songs"}>
                        <span>all songs</span>
                      </Link>
                    </li>
                    <li>
                      <Link to={"/dashboard/add-new-song"}>
                        <span>add song</span>
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to={"/lll"}>
                    <i className="ti-palette"></i> <span>kaaa</span>
                  </Link>
                </li>
              </ul>
            </nav>

            <div className="ps__rail-x" style={{ left: "0px", bottom: "3px" }}>
              <div
                className="ps__thumb-x"
                tabindex="0"
                style={{ left: "0px", width: "0px" }}
              ></div>
            </div>
            <div
              className="ps__rail-y"
              style={{ top: "0px", left: "168px", height: "480px" }}
            >
              <div
                className="ps__thumb-y"
                tabindex="0"
                style={{ top: "0px", height: "0px" }}
              ></div>
            </div>
          </div>
        </div>

        <div className="content-body">
          <Switch>
            {routes.map((route, index) => (
              <Route {...route} key={index} />
            ))}
          </Switch>
        </div>
        <div className="footer-section">
          <div className="container-fluid">
            <div className="footer-copyright text-center">
              <p className="text-body-light">
                1400 ©<a href="#">mohammad hossein tazaroie</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default connect(
  (state) => ({
    isUserLoggedIn: state.main.isUserLoggedIn,
    full_name: state.main.full_name,
  }),
  (dispatch) => {
    return {
      init: () => {
        dispatch({ type: mainActions.INIT_REQUESTED, payload: null });
      },
    };
  }
)(Index);
