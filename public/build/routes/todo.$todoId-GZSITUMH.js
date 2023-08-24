import {
  require_node
} from "/build/_shared/chunk-G7CHZRZX.js";
import {
  require_db
} from "/build/_shared/chunk-KONDUBG3.js";
import {
  Link,
  useLoaderData
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

// app/routes/todo.$todoId.jsx
var import_node = __toESM(require_node());
var import_db = __toESM(require_db());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/todo.$todoId.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/todo.$todoId.jsx"
  );
  import.meta.hot.lastModified = "1692013961925.367";
}
function TodoId() {
  _s();
  const data = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { children: "Todo ID" }, void 0, false, {
      fileName: "app/routes/todo.$todoId.jsx",
      lineNumber: 70,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: data.todo.description }, void 0, false, {
      fileName: "app/routes/todo.$todoId.jsx",
      lineNumber: 71,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: ".", children: [
      '"',
      data.todo.title,
      '" Permalink'
    ] }, void 0, true, {
      fileName: "app/routes/todo.$todoId.jsx",
      lineNumber: 72,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/todo.$todoId.jsx",
    lineNumber: 69,
    columnNumber: 10
  }, this);
}
_s(TodoId, "5thj+e1edPyRpKif1JmVRC6KArE=", false, function() {
  return [useLoaderData];
});
_c = TodoId;
var _c;
$RefreshReg$(_c, "TodoId");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  TodoId as default
};
//# sourceMappingURL=/build/routes/todo.$todoId-GZSITUMH.js.map
