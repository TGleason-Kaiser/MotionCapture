import "clsx";
import { m as sanitize_props, o as rest_props, q as fallback, t as element, u as bind_props, j as pop, p as push, v as slot, w as spread_attributes, x as clsx } from "../../../chunks/index.js";
import { twMerge } from "tailwind-merge";
function Heading($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, ["tag", "color", "customSize"]);
  push();
  let tag = fallback($$props["tag"], "h1");
  let color = fallback($$props["color"], "text-gray-900 dark:text-white");
  let customSize = fallback($$props["customSize"], "");
  const textSizes = {
    h1: "text-5xl font-extrabold",
    h2: "text-4xl font-bold",
    h3: "text-3xl font-bold",
    h4: "text-2xl font-bold",
    h5: "text-xl font-bold",
    h6: "text-lg font-bold"
  };
  element(
    $$payload,
    tag,
    () => {
      $$payload.out += `${spread_attributes(
        {
          ...$$restProps,
          class: clsx(twMerge(customSize ? customSize : textSizes[tag], color, "w-full", $$sanitized_props.class))
        }
      )}`;
    },
    () => {
      $$payload.out += `<!---->`;
      slot($$payload, $$props, "default", {}, null);
      $$payload.out += `<!---->`;
    }
  );
  bind_props($$props, { tag, color, customSize });
  pop();
}
function _page($$payload) {
  Heading($$payload, {
    children: ($$payload2) => {
      $$payload2.out += `<!---->404 Page Fucking Nah`;
    },
    $$slots: { default: true }
  });
}
export {
  _page as default
};
