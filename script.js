!(function (o, c) {
  var n = c.documentElement,
    t = " w-mod-";
  (n.className += t + "js"),
    ("ontouchstart" in o || (o.DocumentTouch && c instanceof DocumentTouch)) &&
      (n.className += t + "touch");
})(window, document);

//

(function (w, d, s, l, i) {
  w[l] = w[l] || [];
  w[l].push({
    "gtm.start": new Date().getTime(),
    event: "gtm.js",
  });
  var f = d.getElementsByTagName(s)[0],
    j = d.createElement(s),
    dl = l != "dataLayer" ? "&l=" + l : "";
  j.async = true;
  j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
  f.parentNode.insertBefore(j, f);
})(window, document, "script", "dataLayer", "GTM-W5ZL8KX");

//new script tag

const homePageDemoForm = document.querySelector("#home-page-demo-form");
if (homePageDemoForm) {
  homePageDemoForm.addEventListener("submit", () => {
    window.location.href = "/thank-you-pages/general-demo-form";
  });
}

const pricingForm = document.querySelector("#pricing-form");
if (pricingForm) {
  pricingForm.addEventListener("submit", () => {
    let industry = pricingForm.querySelector("select").value;

    if (industry !== "Select industry") {
      window.location.href = "/thank-you-pages/pricing";
    }
  });
}

const demoForm = document.querySelector("#demo-form");
if (demoForm) {
  demoForm.addEventListener("submit", () => {
    let industry = demoForm.querySelector("select").value;
    if (industry !== "Select Industry") {
      switch (industry) {
        case "Venture Capital":
          window.location.href = "/thank-you-pages/demo-venture-capital";
          break;
        case "Private Equity":
          window.location.href = "/thank-you-pages/demo-private-equity";
          break;
        case "Investment Banking / M&A Advisory":
          window.location.href =
            "/thank-you-pages/demo-investment-banking-and-m-a";
          break;
        case "Corporate Development / M&A":
          window.location.href =
            "/thank-you-pages/demo-corporate-development-and-m-a";
          break;
        case "Consulting":
          window.location.href = "/thank-you-pages/demo-consulting";
          break;
        case "Commercial Real Estate":
          window.location.href = "/thank-you-pages/demo-commercial-real-estate";
          break;
        case "Other":
          window.location.href = "/thank-you-pages/demo-consulting";
          break;
      }
    }
  });
}

const partnerForm = document.querySelector("#partners-form");
if (partnerForm) {
  partnerForm.addEventListener("submit", () => {
    let industry = partnerForm.querySelector("select").value;
    if (industry !== "Select Industry") {
      switch (industry) {
        case "Venture Capital":
          window.location.href = "/thank-you-pages/partners-venture-capital";
          break;
        case "Private Equity":
          window.location.href = "/thank-you-pages/partners-private-equity";
          break;
        case "Investment Banking / M&A Advisory":
          window.location.href =
            "/thank-you-pages/partners-investment-banking-and-m-a";
          break;
        case "Corporate Development / M&A":
          window.location.href =
            "/thank-you-pages/partners-corporate-development-and-m-a";
          break;
        case "Consulting":
          window.location.href = "/thank-you-pages/partners-consulting";
          break;
        case "Commercial Real Estate":
          window.location.href =
            "/thank-you-pages/partners-commercial-real-estate";
          break;
        case "Other":
          window.location.href = "/thank-you-pages/partners-consulting";
          break;
      }
    }
  });
}

const libraryForms = document.querySelectorAll("[form = 'library-form']");
if (libraryForms) {
  libraryForms.forEach((libraryForm) => {
    let pdfUrl = libraryForm.getAttribute("pdf-url");
    //console.log(pdfUrl)

    libraryForm.addEventListener("submit", () => {
      if (pdfUrl) {
        window.open(pdfUrl, "_blank");
      }
    });
  });
}

const adwardsForms = document.querySelectorAll("[form = 'adwards-form']");
if (adwardsForms) {
  adwardsForms.forEach((adwardsForm) => {
    const thankYouPage = adwardsForm.getAttribute("thank-you-page-url");
    adwardsForm.addEventListener("submit", () => {
      if (thankYouPage) {
        window.location.href = thankYouPage;
      }
    });
  });
}

const _0x26dfbd = _0xe5a4;
function _0x431c() {
  const _0x365a53 = [
    "8UIiCoq",
    "container",
    "3170YeSNow",
    "Parent\x20container\x20with\x20ID\x20",
    "r-selector-value",
    "16RDIQwa",
    "113153uRVehJ",
    "6123576BZzDku",
    "add",
    "150456SJXgXs",
    "n-container",
    "callFunction",
    "createElement",
    "rangeInput",
    "\x20not\x20found.",
    "step",
    "input",
    "div",
    "addEventListener",
    "innerWrap",
    "range",
    "style",
    "2624842dhipBj",
    "r-progress-bar",
    "selectorKnob",
    "95nXdurB",
    "error",
    "classList",
    "minValWrap",
    "target",
    "numberInput",
    "r-container",
    "r-track",
    "r-selector",
    "defaultValue",
    "width",
    "maxValWrap",
    "max",
    "progressBar",
    "r-selector-knob",
    "round",
    "appendChild",
    "track",
    "min",
    "1127371TYWPVD",
    "textContent",
    "selector",
    "val-wrap",
    "selectorValue",
    "parentContainer",
    "526944BStizS",
    "number",
    "2HrHixz",
    "26NeWnHb",
    "value",
    "n-input",
    "5463EmerIs",
    "parentContainerId",
    "getElementById",
    "left",
  ];
  _0x431c = function () {
    return _0x365a53;
  };
  return _0x431c();
}
(function (_0x4b205d, _0xcd62ba) {
  const _0xbf80c9 = _0xe5a4,
    _0x5a6626 = _0x4b205d();
  while (!![]) {
    try {
      const _0x403a0a =
        (-parseInt(_0xbf80c9(0x1e5)) / 0x1) *
          (-parseInt(_0xbf80c9(0x1d7)) / 0x2) +
        (parseInt(_0xbf80c9(0x1d5)) / 0x3) *
          (parseInt(_0xbf80c9(0x1df)) / 0x4) +
        (-parseInt(_0xbf80c9(0x1f8)) / 0x5) *
          (parseInt(_0xbf80c9(0x1e8)) / 0x6) +
        (-parseInt(_0xbf80c9(0x1cf)) / 0x7) *
          (parseInt(_0xbf80c9(0x1e4)) / 0x8) +
        (parseInt(_0xbf80c9(0x1db)) / 0x9) *
          (-parseInt(_0xbf80c9(0x1e1)) / 0xa) +
        -parseInt(_0xbf80c9(0x1f5)) / 0xb +
        (-parseInt(_0xbf80c9(0x1e6)) / 0xc) *
          (-parseInt(_0xbf80c9(0x1d8)) / 0xd);
      if (_0x403a0a === _0xcd62ba) break;
      else _0x5a6626["push"](_0x5a6626["shift"]());
    } catch (_0x468c61) {
      _0x5a6626["push"](_0x5a6626["shift"]());
    }
  }
})(_0x431c, 0x3e5de);
function _0xe5a4(_0x4d6f28, _0x21005a) {
  const _0x431c5e = _0x431c();
  return (
    (_0xe5a4 = function (_0xe5a409, _0x2878ac) {
      _0xe5a409 = _0xe5a409 - 0x1cd;
      let _0x3f749b = _0x431c5e[_0xe5a409];
      return _0x3f749b;
    }),
    _0xe5a4(_0x4d6f28, _0x21005a)
  );
}
class ZenSlider {
  constructor(_0x541ff6) {
    const _0x38d4d9 = _0xe5a4;
    this[_0x38d4d9(0x1d4)] = document[_0x38d4d9(0x1dd)](
      _0x541ff6[_0x38d4d9(0x1dc)]
    );
    if (!this[_0x38d4d9(0x1d4)]) {
      console[_0x38d4d9(0x1f9)](
        _0x38d4d9(0x1e2) + parentContainerId + _0x38d4d9(0x1ed)
      );
      return;
    }
    console["log"](_0x541ff6[_0x38d4d9(0x1ce)]),
      (this["container"] = document["createElement"](_0x38d4d9(0x1f0))),
      this[_0x38d4d9(0x1e0)]["classList"]["add"](_0x38d4d9(0x1fe)),
      (this[_0x38d4d9(0x1f2)] = document[_0x38d4d9(0x1eb)](_0x38d4d9(0x1f0))),
      this[_0x38d4d9(0x1f2)][_0x38d4d9(0x1fa)][_0x38d4d9(0x1e7)](
        "r-inner-wrap"
      ),
      (this[_0x38d4d9(0x1ec)] = document[_0x38d4d9(0x1eb)]("input")),
      (this[_0x38d4d9(0x1ec)]["type"] = _0x38d4d9(0x1f3)),
      this["rangeInput"][_0x38d4d9(0x1fa)][_0x38d4d9(0x1e7)]("r-input");
    _0x541ff6[_0x38d4d9(0x1ce)]
      ? (this[_0x38d4d9(0x1ec)][_0x38d4d9(0x1ce)] = _0x541ff6[_0x38d4d9(0x1ce)])
      : (this[_0x38d4d9(0x1ec)][_0x38d4d9(0x1ce)] = 0x0);
    _0x541ff6["max"]
      ? (this[_0x38d4d9(0x1ec)][_0x38d4d9(0x204)] = _0x541ff6[_0x38d4d9(0x204)])
      : (this[_0x38d4d9(0x1ec)][_0x38d4d9(0x204)] = 0x64);
    _0x541ff6[_0x38d4d9(0x1ee)]
      ? (this[_0x38d4d9(0x1ec)][_0x38d4d9(0x1ee)] = _0x541ff6[_0x38d4d9(0x1ee)])
      : (this[_0x38d4d9(0x1ec)]["step"] = 0x1);
    _0x541ff6[_0x38d4d9(0x201)] &&
      (this[_0x38d4d9(0x1ec)][_0x38d4d9(0x1d9)] = _0x541ff6[_0x38d4d9(0x201)]);
    this[_0x38d4d9(0x1ec)]["value"] = Math[_0x38d4d9(0x207)](
      (parseInt(this[_0x38d4d9(0x1ec)]["min"]) +
        parseInt(this["rangeInput"]["max"])) /
        0x2
    );
    _0x541ff6[_0x38d4d9(0x201)] &&
      (this[_0x38d4d9(0x1ec)][_0x38d4d9(0x1d9)] = _0x541ff6[_0x38d4d9(0x201)]);
    this[_0x38d4d9(0x1f2)][_0x38d4d9(0x208)](this[_0x38d4d9(0x1ec)]),
      (this[_0x38d4d9(0x1cd)] = document[_0x38d4d9(0x1eb)](_0x38d4d9(0x1f0))),
      this[_0x38d4d9(0x1cd)][_0x38d4d9(0x1fa)][_0x38d4d9(0x1e7)](
        _0x38d4d9(0x1ff)
      ),
      this["innerWrap"][_0x38d4d9(0x208)](this[_0x38d4d9(0x1cd)]),
      (this[_0x38d4d9(0x205)] = document[_0x38d4d9(0x1eb)]("div")),
      this[_0x38d4d9(0x205)][_0x38d4d9(0x1fa)]["add"](_0x38d4d9(0x1f6)),
      this[_0x38d4d9(0x1f2)]["appendChild"](this["progressBar"]),
      (this[_0x38d4d9(0x1d1)] = document[_0x38d4d9(0x1eb)]("div")),
      this[_0x38d4d9(0x1d1)]["classList"][_0x38d4d9(0x1e7)](_0x38d4d9(0x200)),
      this[_0x38d4d9(0x1f2)]["appendChild"](this["selector"]),
      (this[_0x38d4d9(0x1f7)] = document[_0x38d4d9(0x1eb)](_0x38d4d9(0x1f0))),
      this["selector"][_0x38d4d9(0x1fa)]["add"](_0x38d4d9(0x206)),
      this[_0x38d4d9(0x1d1)][_0x38d4d9(0x208)](this[_0x38d4d9(0x1f7)]),
      (this[_0x38d4d9(0x1d3)] = document[_0x38d4d9(0x1eb)](_0x38d4d9(0x1f0))),
      (this[_0x38d4d9(0x1d3)][_0x38d4d9(0x1d0)] =
        this[_0x38d4d9(0x1ec)]["value"]),
      this["selectorValue"][_0x38d4d9(0x1fa)][_0x38d4d9(0x1e7)](
        _0x38d4d9(0x1e3)
      ),
      this[_0x38d4d9(0x1f7)][_0x38d4d9(0x208)](this["selectorValue"]),
      (this[_0x38d4d9(0x1fb)] = document["createElement"]("div")),
      this["minValWrap"][_0x38d4d9(0x1fa)][_0x38d4d9(0x1e7)]("val-wrap"),
      (this[_0x38d4d9(0x1fb)][_0x38d4d9(0x1d0)] =
        this[_0x38d4d9(0x1ec)][_0x38d4d9(0x1ce)]),
      (this["maxValWrap"] = document[_0x38d4d9(0x1eb)](_0x38d4d9(0x1f0))),
      this[_0x38d4d9(0x203)]["classList"][_0x38d4d9(0x1e7)](_0x38d4d9(0x1d2)),
      (this[_0x38d4d9(0x203)][_0x38d4d9(0x1d0)] =
        this[_0x38d4d9(0x1ec)][_0x38d4d9(0x204)]),
      this[_0x38d4d9(0x1e0)][_0x38d4d9(0x208)](this[_0x38d4d9(0x1fb)]),
      this[_0x38d4d9(0x1e0)]["appendChild"](this[_0x38d4d9(0x1f2)]),
      this[_0x38d4d9(0x1e0)]["appendChild"](this[_0x38d4d9(0x203)]),
      this["parentContainer"][_0x38d4d9(0x208)](this[_0x38d4d9(0x1e0)]);
    let _0x29fac8 = this[_0x38d4d9(0x1ec)]["value"],
      _0x832020 = Math["round"](
        ((_0x29fac8 - this["rangeInput"][_0x38d4d9(0x1ce)]) /
          (this[_0x38d4d9(0x1ec)][_0x38d4d9(0x204)] -
            this[_0x38d4d9(0x1ec)][_0x38d4d9(0x1ce)])) *
          0x64
      );
    (this[_0x38d4d9(0x205)]["style"][_0x38d4d9(0x202)] = _0x832020 + "%"),
      (this[_0x38d4d9(0x1d1)][_0x38d4d9(0x1f4)][_0x38d4d9(0x1de)] =
        _0x832020 + "%"),
      (this[_0x38d4d9(0x1d3)]["textContent"] = _0x29fac8),
      this[_0x38d4d9(0x1ec)]["addEventListener"](
        _0x38d4d9(0x1ef),
        (_0x4df4ec) => {
          const _0x2060f4 = _0x38d4d9;
          let _0x54f33f = _0x4df4ec[_0x2060f4(0x1fc)][_0x2060f4(0x1d9)],
            _0x10a307 = Math[_0x2060f4(0x207)](
              ((_0x54f33f - this[_0x2060f4(0x1ec)][_0x2060f4(0x1ce)]) /
                (this[_0x2060f4(0x1ec)][_0x2060f4(0x204)] -
                  this[_0x2060f4(0x1ec)]["min"])) *
                0x64
            );
          (this[_0x2060f4(0x205)]["style"]["width"] = _0x10a307 + "%"),
            (this[_0x2060f4(0x1d1)][_0x2060f4(0x1f4)]["left"] =
              _0x10a307 + "%"),
            (this[_0x2060f4(0x1d3)][_0x2060f4(0x1d0)] = _0x54f33f),
            _0x541ff6[_0x2060f4(0x1ea)] && _0x541ff6["callFunction"]();
        }
      );
  }
  get [_0x26dfbd(0x1d9)]() {
    const _0x519b68 = _0x26dfbd;
    return this["rangeInput"][_0x519b68(0x1d9)];
  }
}
class ZenNumber {
  constructor(_0x5ede01) {
    const _0x11a126 = _0x26dfbd;
    this[_0x11a126(0x1d4)] = document[_0x11a126(0x1dd)](
      _0x5ede01[_0x11a126(0x1dc)]
    );
    if (!this[_0x11a126(0x1d4)]) {
      console["error"](_0x11a126(0x1e2) + parentContainerId + _0x11a126(0x1ed));
      return;
    }
    (this[_0x11a126(0x1e0)] = document["createElement"](_0x11a126(0x1f0))),
      this["container"]["classList"]["add"](_0x11a126(0x1e9)),
      (this["numberInput"] = document[_0x11a126(0x1eb)](_0x11a126(0x1ef))),
      (this[_0x11a126(0x1fd)]["type"] = _0x11a126(0x1d6)),
      this[_0x11a126(0x1fd)][_0x11a126(0x1fa)][_0x11a126(0x1e7)](
        _0x11a126(0x1da)
      ),
      _0x5ede01[_0x11a126(0x201)]
        ? (this[_0x11a126(0x1fd)][_0x11a126(0x1d9)] =
            _0x5ede01[_0x11a126(0x201)])
        : (this["numberInput"]["value"] = 0x1),
      this["container"]["appendChild"](this["numberInput"]),
      this[_0x11a126(0x1d4)]["appendChild"](this[_0x11a126(0x1e0)]),
      this[_0x11a126(0x1fd)][_0x11a126(0x1f1)]("input", (_0x47484c) => {
        const _0x164d1c = _0x11a126;
        _0x5ede01[_0x164d1c(0x1ea)] && _0x5ede01[_0x164d1c(0x1ea)]();
      });
  }
  get ["value"]() {
    const _0x35863a = _0x26dfbd;
    return this[_0x35863a(0x1fd)][_0x35863a(0x1d9)];
  }
}

//Fix all Template Images

let richText = document.querySelector(".rich-text");
if (richText) {
  let allImages = richText.querySelectorAll("img");
  allImages.forEach((image) => {
    //console.log(image)
    image.style.width = "100%";
    image.style.height = "auto";
  });
}

//Put all button inside filters collection list
// Get the button element with the class 'all-button'
var allButton = document.querySelector(".all-button");

// Get the element with the class 'filters-collection-list'
var filtersCollectionList = document.querySelector(".filters-collection-list");

// Check if both elements exist
if (allButton && filtersCollectionList) {
  // Insert the 'all-button' as the first child of 'filters-collection-list'
  filtersCollectionList.insertBefore(
    allButton,
    filtersCollectionList.firstChild
  );
} else {
  console.error("Could not find one or both of the specified elements.");
}

//Hide empty toc code
document.addEventListener("DOMContentLoaded", () => {
  const tocContainer = document.querySelector("#toc");
  if (tocContainer) {
    const allTocLinks = tocContainer.querySelectorAll(".tocitem");
    //console.log(allTocLinks.length)
    //console.log(allTocLinks)

    if (allTocLinks.length < 2) {
      document.querySelector(".bt-toc-contain").style.display = "none";
    }
  }
});

var typed = new Typed(".typed-words", {
  strings: [
    "Venture Capital",
    "Private Equity",
    "M&A",
    "Investment Banking",
    "Family Offices",
  ],
  typeSpeed: 75,
  backSpeed: 50,
  backDelay: 800,
  startDelay: 500,
  loop: true,
  showCursor: false,
  cursorChar: "|",
  attr: null,
});
