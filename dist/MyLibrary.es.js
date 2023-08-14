import { ref as c, openBlock as l, createElementBlock as r, toDisplayString as s } from "vue";
const a = (e, o) => {
  const t = e.__vccOpts || e;
  for (const [n, _] of o)
    t[n] = _;
  return t;
}, p = {
  __name: "HelloWorld",
  setup(e) {
    const o = c(0), t = () => {
      o.value++;
    };
    return (n, _) => (l(), r("button", {
      type: "button",
      onClick: t
    }, "count is " + s(o.value), 1));
  }
}, d = /* @__PURE__ */ a(p, [["__scopeId", "data-v-4a27bb39"]]);
export {
  d as HelloWord
};
