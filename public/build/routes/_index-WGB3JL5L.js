import {
  login_default,
  require_request
} from "/build/_shared/chunk-RF7ZUYON.js";
import {
  checklist_default,
  require_session
} from "/build/_shared/chunk-SAWA2PYZ.js";
import {
  require_db
} from "/build/_shared/chunk-KONDUBG3.js";
import {
  Form,
  Link,
  useActionData,
  useSearchParams
} from "/build/_shared/chunk-XTSDW6LX.js";
import {
  createHotContext
} from "/build/_shared/chunk-5UFQ5NKC.js";
import "/build/_shared/chunk-UWV35TSL.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import "/build/_shared/chunk-BOXFZXVX.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/_index.jsx
var import_db = __toESM(require_db());
var import_request = __toESM(require_request());
var import_session = __toESM(require_session());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/_index.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/_index.jsx"
  );
}
var links = () => [{
  rel: "stylesheet",
  href: login_default
}];
var meta = () => {
  return [{
    title: "Remix TodoER App"
  }, {
    name: "description",
    content: "Welcome"
  }];
};
function Index() {
  var _a, _b, _c2, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m;
  _s();
  const actionData = useActionData();
  const [searchParams] = useSearchParams();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
    fontFamily: "system-ui, sans-serif",
    lineHeight: "1.8"
  }, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: checklist_default, alt: "", style: {
        height: "50px"
      } }, void 0, false, {
        fileName: "app/routes/_index.jsx",
        lineNumber: 154,
        columnNumber: 11
      }, this),
      "TODOER"
    ] }, void 0, true, {
      fileName: "app/routes/_index.jsx",
      lineNumber: 154,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "container", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "content", "data-light": "", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "post", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "redirectTo", value: (_a = searchParams.get("redirectTo")) != null ? _a : void 0 }, void 0, false, {
          fileName: "app/routes/_index.jsx",
          lineNumber: 161,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("fieldset", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("legend", { className: "sr-only", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { children: "\u{1F4DD}TODOER" }, void 0, false, {
            fileName: "app/routes/_index.jsx",
            lineNumber: 166,
            columnNumber: 16
          }, this) }, void 0, false, {
            fileName: "app/routes/_index.jsx",
            lineNumber: 165,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "radio", name: "loginType", value: "register", defaultChecked: ((_b = actionData == null ? void 0 : actionData.fields) == null ? void 0 : _b.loginType) === "register" }, void 0, false, {
              fileName: "app/routes/_index.jsx",
              lineNumber: 169,
              columnNumber: 17
            }, this),
            " ",
            "Register"
          ] }, void 0, true, {
            fileName: "app/routes/_index.jsx",
            lineNumber: 168,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_index.jsx",
          lineNumber: 164,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "email-input", children: "Email" }, void 0, false, {
            fileName: "app/routes/_index.jsx",
            lineNumber: 176,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "text", id: "email-input", name: "email", defaultValue: (_c2 = actionData == null ? void 0 : actionData.fields) == null ? void 0 : _c2.email, "aria-invalid": Boolean((_d = actionData == null ? void 0 : actionData.fieldErrors) == null ? void 0 : _d.email), "aria-errormessage": ((_e = actionData == null ? void 0 : actionData.fieldErrors) == null ? void 0 : _e.email) ? "email-error" : void 0 }, void 0, false, {
            fileName: "app/routes/_index.jsx",
            lineNumber: 177,
            columnNumber: 15
          }, this),
          ((_f = actionData == null ? void 0 : actionData.fieldErrors) == null ? void 0 : _f.email) ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "form-validation-error", role: "alert", id: "email-error", children: actionData.fieldErrors.email }, void 0, false, {
            fileName: "app/routes/_index.jsx",
            lineNumber: 180,
            columnNumber: 49
          }, this) : null
        ] }, void 0, true, {
          fileName: "app/routes/_index.jsx",
          lineNumber: 175,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "username-input", children: "Username" }, void 0, false, {
            fileName: "app/routes/_index.jsx",
            lineNumber: 186,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "text", id: "username-input", name: "username", defaultValue: (_g = actionData == null ? void 0 : actionData.fields) == null ? void 0 : _g.username, "aria-invalid": Boolean((_h = actionData == null ? void 0 : actionData.fieldErrors) == null ? void 0 : _h.username), "aria-errormessage": ((_i = actionData == null ? void 0 : actionData.fieldErrors) == null ? void 0 : _i.username) ? "username-error" : void 0 }, void 0, false, {
            fileName: "app/routes/_index.jsx",
            lineNumber: 187,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_index.jsx",
          lineNumber: 185,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "password-input", children: "Password" }, void 0, false, {
            fileName: "app/routes/_index.jsx",
            lineNumber: 192,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { id: "password-input", name: "password", type: "password", defaultValue: (_j = actionData == null ? void 0 : actionData.fields) == null ? void 0 : _j.password, "aria-invalid": Boolean((_k = actionData == null ? void 0 : actionData.fieldErrors) == null ? void 0 : _k.password), "aria-errormessage": ((_l = actionData == null ? void 0 : actionData.fieldErrors) == null ? void 0 : _l.password) ? "password-error" : void 0 }, void 0, false, {
            fileName: "app/routes/_index.jsx",
            lineNumber: 193,
            columnNumber: 15
          }, this),
          ((_m = actionData == null ? void 0 : actionData.fieldErrors) == null ? void 0 : _m.password) ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "form-validation-error", role: "alert", id: "password-error", children: actionData.fieldErrors.password }, void 0, false, {
            fileName: "app/routes/_index.jsx",
            lineNumber: 196,
            columnNumber: 52
          }, this) : null
        ] }, void 0, true, {
          fileName: "app/routes/_index.jsx",
          lineNumber: 191,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { id: "form-error-message", children: (actionData == null ? void 0 : actionData.formError) ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "form-validation-error", role: "alert", children: actionData.formError }, void 0, false, {
          fileName: "app/routes/_index.jsx",
          lineNumber: 202,
          columnNumber: 40
        }, this) : null }, void 0, false, {
          fileName: "app/routes/_index.jsx",
          lineNumber: 201,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "submit", className: "button", children: "Submit" }, void 0, false, {
          fileName: "app/routes/_index.jsx",
          lineNumber: 207,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_index.jsx",
        lineNumber: 160,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/_index.jsx",
        lineNumber: 158,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "links", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/login", children: "Login" }, void 0, false, {
        fileName: "app/routes/_index.jsx",
        lineNumber: 215,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/routes/_index.jsx",
        lineNumber: 214,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/_index.jsx",
        lineNumber: 213,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/_index.jsx",
        lineNumber: 212,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_index.jsx",
      lineNumber: 157,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_index.jsx",
    lineNumber: 149,
    columnNumber: 10
  }, this);
}
_s(Index, "l8x34vVXs1FlNFLPEnmoic4WVOs=", false, function() {
  return [useActionData, useSearchParams];
});
_c = Index;
var _c;
$RefreshReg$(_c, "Index");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Index as default,
  links,
  meta
};
//# sourceMappingURL=/build/routes/_index-WGB3JL5L.js.map
