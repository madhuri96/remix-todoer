import {
  require_node
} from "/build/_shared/chunk-G7CHZRZX.js";
import {
  require_db
} from "/build/_shared/chunk-KONDUBG3.js";
import {
  useLoaderData,
  useNavigate
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

// app/routes/edit-todo.$todoId.jsx
var import_node = __toESM(require_node());
var import_db = __toESM(require_db());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/edit-todo.$todoId.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/edit-todo.$todoId.jsx"
  );
  import.meta.hot.lastModified = "1692246471058.763";
}
function EditTodo() {
  _s();
  const data = useLoaderData();
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const response = await fetch(`/edit-todo/${data.todo.id}`, {
      method: "POST",
      body: formData
    });
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { children: "Edit Todo" }, void 0, false, {
      fileName: "app/routes/edit-todo.$todoId.jsx",
      lineNumber: 87,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", { onSubmit: handleSubmit, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { children: [
        "Title:",
        " ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("textarea", { name: "title", defaultValue: data.todo.title }, void 0, false, {
          fileName: "app/routes/edit-todo.$todoId.jsx",
          lineNumber: 92,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/edit-todo.$todoId.jsx",
        lineNumber: 90,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/edit-todo.$todoId.jsx",
        lineNumber: 89,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "submit", onClick: () => {
        navigate(`/todo`);
      }, className: "button", children: "Save" }, void 0, false, {
        fileName: "app/routes/edit-todo.$todoId.jsx",
        lineNumber: 96,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/edit-todo.$todoId.jsx",
        lineNumber: 95,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/edit-todo.$todoId.jsx",
      lineNumber: 88,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/edit-todo.$todoId.jsx",
    lineNumber: 86,
    columnNumber: 10
  }, this);
}
_s(EditTodo, "4nbjkS3ssGN9Q3RbZpbWupwlNbw=", false, function() {
  return [useLoaderData, useNavigate];
});
_c = EditTodo;
var _c;
$RefreshReg$(_c, "EditTodo");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  EditTodo as default
};
//# sourceMappingURL=/build/routes/edit-todo.$todoId-HF7TL4TK.js.map
