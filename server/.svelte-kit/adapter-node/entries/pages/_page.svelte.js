import "clsx";
import { k as sanitize_props, l as rest_props, s as setContext, m as fallback, z as element, u as bind_props, j as pop, p as push, t as slot, o as spread_attributes, q as clsx, A as spread_props, x as getContext, v as attr_class, B as attr, y as escape_html, C as invalid_default_snippet } from "../../chunks/index2.js";
import { twMerge } from "tailwind-merge";
import { w as writable } from "../../chunks/index.js";
const linear = (x) => x;
function fade(node, { delay = 0, duration = 400, easing = linear } = {}) {
  const o = +getComputedStyle(node).opacity;
  return {
    delay,
    duration,
    easing,
    css: (t) => `opacity: ${t * o}`
  };
}
const bgColors = {
  gray: "bg-gray-50 dark:bg-gray-800",
  red: "bg-red-50 dark:bg-gray-800",
  yellow: "bg-yellow-50 dark:bg-gray-800 ",
  green: "bg-green-50 dark:bg-gray-800 ",
  indigo: "bg-indigo-50 dark:bg-gray-800 ",
  purple: "bg-purple-50 dark:bg-gray-800 ",
  pink: "bg-pink-50 dark:bg-gray-800 ",
  blue: "bg-blue-50 dark:bg-gray-800 ",
  light: "bg-gray-50 dark:bg-gray-700",
  dark: "bg-gray-50 dark:bg-gray-800",
  default: "bg-white dark:bg-gray-800",
  dropdown: "bg-white dark:bg-gray-700",
  navbar: "bg-white dark:bg-gray-900",
  navbarUl: "bg-gray-50 dark:bg-gray-800",
  form: "bg-gray-50 dark:bg-gray-700",
  primary: "bg-primary-50 dark:bg-gray-800 ",
  orange: "bg-orange-50 dark:bg-orange-800",
  none: ""
};
function Frame($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, [
    "tag",
    "color",
    "rounded",
    "border",
    "shadow",
    "node",
    "use",
    "options",
    "role",
    "transition",
    "params",
    "open"
  ]);
  push();
  const noop = () => {
  };
  setContext("background", true);
  let tag = fallback($$props["tag"], () => $$restProps.href ? "a" : "div", true);
  let color = fallback($$props["color"], "default");
  let rounded = fallback($$props["rounded"], false);
  let border = fallback($$props["border"], false);
  let shadow = fallback($$props["shadow"], false);
  let node = fallback($$props["node"], () => void 0, true);
  let use = fallback($$props["use"], noop);
  let options = fallback($$props["options"], () => ({}), true);
  let role = fallback($$props["role"], () => void 0, true);
  let transition = fallback($$props["transition"], () => void 0, true);
  let params = fallback($$props["params"], () => ({}), true);
  let open = fallback($$props["open"], true);
  const textColors = {
    gray: "text-gray-800 dark:text-gray-300",
    red: "text-red-800 dark:text-red-400",
    yellow: "text-yellow-800 dark:text-yellow-300",
    green: "text-green-800 dark:text-green-400",
    indigo: "text-indigo-800 dark:text-indigo-400",
    purple: "text-purple-800 dark:text-purple-400",
    pink: "text-pink-800 dark:text-pink-400",
    blue: "text-blue-800 dark:text-blue-400",
    light: "text-gray-700 dark:text-gray-300",
    dark: "text-gray-700 dark:text-gray-300",
    default: "text-gray-500 dark:text-gray-400",
    dropdown: "text-gray-700 dark:text-gray-200",
    navbar: "text-gray-700 dark:text-gray-200",
    navbarUl: "text-gray-700 dark:text-gray-400",
    form: "text-gray-900 dark:text-white",
    primary: "text-primary-800 dark:text-primary-400",
    orange: "text-orange-800 dark:text-orange-400",
    none: ""
  };
  const borderColors = {
    gray: "border-gray-300 dark:border-gray-800 divide-gray-300 dark:divide-gray-800",
    red: "border-red-300 dark:border-red-800 divide-red-300 dark:divide-red-800",
    yellow: "border-yellow-300 dark:border-yellow-800 divide-yellow-300 dark:divide-yellow-800",
    green: "border-green-300 dark:border-green-800 divide-green-300 dark:divide-green-800",
    indigo: "border-indigo-300 dark:border-indigo-800 divide-indigo-300 dark:divide-indigo-800",
    purple: "border-purple-300 dark:border-purple-800 divide-purple-300 dark:divide-purple-800",
    pink: "border-pink-300 dark:border-pink-800 divide-pink-300 dark:divide-pink-800",
    blue: "border-blue-300 dark:border-blue-800 divide-blue-300 dark:divide-blue-800",
    light: "border-gray-500 divide-gray-500",
    dark: "border-gray-500 divide-gray-500",
    default: "border-gray-200 dark:border-gray-700 divide-gray-200 dark:divide-gray-700",
    dropdown: "border-gray-100 dark:border-gray-600 divide-gray-100 dark:divide-gray-600",
    navbar: "border-gray-100 dark:border-gray-700 divide-gray-100 dark:divide-gray-700",
    navbarUl: "border-gray-100 dark:border-gray-700 divide-gray-100 dark:divide-gray-700",
    form: "border-gray-300 dark:border-gray-700 divide-gray-300 dark:divide-gray-700",
    primary: "border-primary-500 dark:border-primary-200  divide-primary-500 dark:divide-primary-200 ",
    orange: "border-orange-300 dark:border-orange-800 divide-orange-300 dark:divide-orange-800",
    none: ""
  };
  let divClass;
  color = color ?? "default";
  setContext("color", color);
  divClass = twMerge(bgColors[color], textColors[color], rounded && "rounded-lg", border && "border", borderColors[color], shadow && "shadow-md", $$sanitized_props.class);
  if (transition && open) {
    $$payload.out += "<!--[-->";
    element(
      $$payload,
      tag,
      () => {
        $$payload.out += `${spread_attributes(
          {
            role,
            ...$$restProps,
            class: clsx(divClass)
          }
        )}`;
      },
      () => {
        $$payload.out += `<!---->`;
        slot($$payload, $$props, "default", {}, null);
        $$payload.out += `<!---->`;
      }
    );
  } else if (open) {
    $$payload.out += "<!--[1-->";
    element(
      $$payload,
      tag,
      () => {
        $$payload.out += `${spread_attributes(
          {
            role,
            ...$$restProps,
            class: clsx(divClass)
          }
        )}`;
      },
      () => {
        $$payload.out += `<!---->`;
        slot($$payload, $$props, "default", {}, null);
        $$payload.out += `<!---->`;
      }
    );
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]-->`;
  bind_props($$props, {
    tag,
    color,
    rounded,
    border,
    shadow,
    node,
    use,
    options,
    role,
    transition,
    params,
    open
  });
  pop();
}
function Accordion($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, [
    "multiple",
    "flush",
    "activeClass",
    "inactiveClass",
    "defaultClass",
    "classActive",
    "classInactive"
  ]);
  push();
  let multiple = fallback($$props["multiple"], false);
  let flush = fallback($$props["flush"], false);
  let activeClass = fallback($$props["activeClass"], "bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800");
  let inactiveClass = fallback($$props["inactiveClass"], "text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800");
  let defaultClass = fallback($$props["defaultClass"], "text-gray-500 dark:text-gray-400");
  let classActive = fallback($$props["classActive"], "");
  let classInactive = fallback($$props["classInactive"], "");
  const ctx = {
    flush,
    activeClass: twMerge(activeClass, classActive),
    inactiveClass: twMerge(inactiveClass, classInactive),
    selected: multiple ? void 0 : writable()
  };
  setContext("ctx", ctx);
  let frameClass;
  frameClass = twMerge(defaultClass, $$sanitized_props.class);
  Frame($$payload, spread_props([
    $$restProps,
    {
      class: frameClass,
      color: "none",
      children: ($$payload2) => {
        $$payload2.out += `<!---->`;
        slot($$payload2, $$props, "default", {}, null);
        $$payload2.out += `<!---->`;
      },
      $$slots: { default: true }
    }
  ]));
  bind_props($$props, {
    multiple,
    flush,
    activeClass,
    inactiveClass,
    defaultClass,
    classActive,
    classInactive
  });
  pop();
}
function AccordionItem($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  push();
  let contentClass;
  let tag = fallback($$props["tag"], "h2");
  let open = fallback($$props["open"], false);
  let activeClass = fallback($$props["activeClass"], () => void 0, true);
  let inactiveClass = fallback($$props["inactiveClass"], () => void 0, true);
  let defaultClass = fallback($$props["defaultClass"], "flex items-center justify-between w-full font-medium text-left group-first:rounded-t-xl border-gray-200 dark:border-gray-700");
  let transitionType = fallback($$props["transitionType"], "slide");
  let transitionParams = fallback($$props["transitionParams"], () => ({}), true);
  let paddingFlush = fallback($$props["paddingFlush"], "py-5");
  let paddingDefault = fallback($$props["paddingDefault"], "p-5");
  let textFlushOpen = fallback($$props["textFlushOpen"], "text-gray-900 dark:text-white");
  let textFlushDefault = fallback($$props["textFlushDefault"], "text-gray-500 dark:text-gray-400");
  let borderClass = fallback($$props["borderClass"], "border-s border-e group-first:border-t");
  let borderOpenClass = fallback($$props["borderOpenClass"], "border-s border-e");
  let borderBottomClass = fallback($$props["borderBottomClass"], "border-b");
  let borderSharedClass = fallback($$props["borderSharedClass"], "border-gray-200 dark:border-gray-700");
  let classActive = fallback($$props["classActive"], () => void 0, true);
  let classInactive = fallback($$props["classInactive"], () => void 0, true);
  let activeCls = twMerge(activeClass, classActive);
  let inactiveCls = twMerge(inactiveClass, classInactive);
  const ctx = getContext("ctx") ?? {};
  ctx.selected ?? writable();
  open = false;
  let buttonClass;
  buttonClass = twMerge([
    defaultClass,
    ctx.flush || borderClass,
    borderBottomClass,
    borderSharedClass,
    ctx.flush ? paddingFlush : paddingDefault,
    open && (ctx.flush ? textFlushOpen : activeCls || ctx.activeClass),
    !open && (ctx.flush ? textFlushDefault : inactiveCls || ctx.inactiveClass),
    $$sanitized_props.class
  ]);
  contentClass = twMerge([
    ctx.flush ? paddingFlush : paddingDefault,
    ctx.flush ? "" : borderOpenClass,
    borderBottomClass,
    borderSharedClass
  ]);
  element(
    $$payload,
    tag,
    () => {
      $$payload.out += ` class="group"`;
    },
    () => {
      $$payload.out += `<button type="button"${attr_class(clsx(buttonClass))}${attr("aria-expanded", open)}><!---->`;
      slot($$payload, $$props, "header", {}, null);
      $$payload.out += `<!----> `;
      if (open) {
        $$payload.out += "<!--[-->";
        $$payload.out += `<!---->`;
        slot($$payload, $$props, "arrowup", {}, () => {
          $$payload.out += `<svg class="w-3 h-3 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"></path></svg>`;
        });
        $$payload.out += `<!---->`;
      } else {
        $$payload.out += "<!--[!-->";
        $$payload.out += `<!---->`;
        slot($$payload, $$props, "arrowdown", {}, () => {
          $$payload.out += `<svg class="w-3 h-3 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"></path></svg>`;
        });
        $$payload.out += `<!---->`;
      }
      $$payload.out += `<!--]--></button>`;
    }
  );
  $$payload.out += ` `;
  if (open) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<div><div${attr_class(clsx(contentClass))}><!---->`;
    slot($$payload, $$props, "default", {}, null);
    $$payload.out += `<!----></div></div>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]-->`;
  bind_props($$props, {
    tag,
    open,
    activeClass,
    inactiveClass,
    defaultClass,
    transitionType,
    transitionParams,
    paddingFlush,
    paddingDefault,
    textFlushOpen,
    textFlushDefault,
    borderClass,
    borderOpenClass,
    borderBottomClass,
    borderSharedClass,
    classActive,
    classInactive
  });
  pop();
}
function ToolbarButton($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, [
    "color",
    "name",
    "ariaLabel",
    "size",
    "href"
  ]);
  push();
  let color = fallback($$props["color"], "default");
  let name = fallback($$props["name"], () => void 0, true);
  let ariaLabel = fallback($$props["ariaLabel"], () => void 0, true);
  let size = fallback($$props["size"], "md");
  let href = fallback($$props["href"], () => void 0, true);
  const background = getContext("background");
  const colors = {
    dark: "text-gray-500 hover:text-gray-900 hover:bg-gray-200 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600",
    gray: "text-gray-500 focus:ring-gray-400 hover:bg-gray-200 dark:hover:bg-gray-800 dark:hover:text-gray-300",
    red: "text-red-500 focus:ring-red-400 hover:bg-red-200 dark:hover:bg-red-800 dark:hover:text-red-300",
    yellow: "text-yellow-500 focus:ring-yellow-400 hover:bg-yellow-200 dark:hover:bg-yellow-800 dark:hover:text-yellow-300",
    green: "text-green-500 focus:ring-green-400 hover:bg-green-200 dark:hover:bg-green-800 dark:hover:text-green-300",
    indigo: "text-indigo-500 focus:ring-indigo-400 hover:bg-indigo-200 dark:hover:bg-indigo-800 dark:hover:text-indigo-300",
    purple: "text-purple-500 focus:ring-purple-400 hover:bg-purple-200 dark:hover:bg-purple-800 dark:hover:text-purple-300",
    pink: "text-pink-500 focus:ring-pink-400 hover:bg-pink-200 dark:hover:bg-pink-800 dark:hover:text-pink-300",
    blue: "text-blue-500 focus:ring-blue-400 hover:bg-blue-200 dark:hover:bg-blue-800 dark:hover:text-blue-300",
    primary: "text-primary-500 focus:ring-primary-400 hover:bg-primary-200 dark:hover:bg-primary-800 dark:hover:text-primary-300",
    default: "focus:ring-gray-400 hover:bg-gray-100"
  };
  const sizing = {
    xs: "m-0.5 rounded-xs focus:ring-1 p-0.5",
    sm: "m-0.5 rounded-sm focus:ring-1 p-0.5",
    md: "m-0.5 rounded-lg focus:ring-2 p-1.5",
    lg: "m-0.5 rounded-lg focus:ring-2 p-2.5"
  };
  let buttonClass;
  const svgSizes = {
    xs: "w-3 h-3",
    sm: "w-3.5 h-3.5",
    md: "w-5 h-5",
    lg: "w-5 h-5"
  };
  buttonClass = twMerge("focus:outline-hidden whitespace-normal", sizing[size], colors[color], color === "default" && (background ? "dark:hover:bg-gray-600" : "dark:hover:bg-gray-700"), $$sanitized_props.class);
  if (href) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<a${spread_attributes(
      {
        href,
        ...$$restProps,
        class: clsx(buttonClass),
        "aria-label": ariaLabel ?? name
      }
    )}>`;
    if (name) {
      $$payload.out += "<!--[-->";
      $$payload.out += `<span class="sr-only">${escape_html(name)}</span>`;
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]--> <!---->`;
    slot($$payload, $$props, "default", { svgSize: svgSizes[size] }, null);
    $$payload.out += `<!----></a>`;
  } else {
    $$payload.out += "<!--[!-->";
    $$payload.out += `<button${spread_attributes(
      {
        type: "button",
        ...$$restProps,
        class: clsx(buttonClass),
        "aria-label": ariaLabel ?? name
      }
    )}>`;
    if (name) {
      $$payload.out += "<!--[-->";
      $$payload.out += `<span class="sr-only">${escape_html(name)}</span>`;
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]--> <!---->`;
    slot($$payload, $$props, "default", { svgSize: svgSizes[size] }, null);
    $$payload.out += `<!----></button>`;
  }
  $$payload.out += `<!--]-->`;
  bind_props($$props, { color, name, ariaLabel, size, href });
  pop();
}
function CloseButton($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, ["name"]);
  push();
  let name = fallback($$props["name"], "Close");
  ToolbarButton($$payload, spread_props([
    { name },
    $$restProps,
    {
      class: twMerge("ms-auto", $$sanitized_props.class),
      children: invalid_default_snippet,
      $$slots: {
        default: ($$payload2, { svgSize }) => {
          $$payload2.out += `<svg${attr_class(clsx(svgSize))} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>`;
        }
      }
    }
  ]));
  bind_props($$props, { name });
  pop();
}
function Badge($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, [
    "color",
    "large",
    "dismissable",
    "border",
    "href",
    "rounded",
    "transition",
    "params",
    "tag"
  ]);
  push();
  let color = fallback($$props["color"], "primary");
  let large = fallback($$props["large"], false);
  let dismissable = fallback($$props["dismissable"], false);
  let border = fallback($$props["border"], false);
  let href = fallback($$props["href"], "");
  let rounded = fallback($$props["rounded"], false);
  let transition = fallback($$props["transition"], fade);
  let params = fallback($$props["params"], () => ({}), true);
  let tag = fallback($$props["tag"], "div");
  let badgeStatus = true;
  const colors = {
    primary: "bg-primary-100 text-primary-800 dark:bg-primary-900 dark:text-primary-300",
    dark: "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300",
    blue: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
    red: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300",
    green: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
    yellow: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300",
    indigo: "bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-300",
    purple: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300",
    pink: "bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-300",
    none: ""
  };
  const borderedColors = {
    primary: "bg-primary-100 text-primary-800 dark:bg-gray-700 dark:text-primary-400 border-primary-400 dark:border-primary-400",
    dark: "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-400 border-gray-400 dark:border-gray-400",
    blue: "bg-blue-100 text-blue-800 dark:bg-gray-700 dark:text-blue-400 border-blue-400 dark:border-blue-400",
    red: "bg-red-100 text-red-800 dark:bg-gray-700 dark:text-red-400 border-red-400 dark:border-red-400",
    green: "bg-green-100 text-green-800 dark:bg-gray-700 dark:text-green-400 border-green-400 dark:border-green-400",
    yellow: "bg-yellow-100 text-yellow-800 dark:bg-gray-700 dark:text-yellow-300 border-yellow-300 dark:border-yellow-300",
    indigo: "bg-indigo-100 text-indigo-800 dark:bg-gray-700 dark:text-indigo-400 border-indigo-400 dark:border-indigo-400",
    purple: "bg-purple-100 text-purple-800 dark:bg-gray-700 dark:text-purple-400 border-purple-400 dark:border-purple-400",
    pink: "bg-pink-100 text-pink-800 dark:bg-gray-700 dark:text-pink-400 border-pink-400 dark:border-pink-400",
    none: ""
  };
  const hoverColors = {
    primary: "hover:bg-primary-200",
    dark: "hover:bg-gray-200",
    blue: "hover:bg-blue-200",
    red: "hover:bg-red-200",
    green: "hover:bg-green-200",
    yellow: "hover:bg-yellow-200",
    indigo: "hover:bg-indigo-200",
    purple: "hover:bg-purple-200",
    pink: "hover:bg-pink-200",
    none: ""
  };
  const close = () => {
    badgeStatus = false;
  };
  const baseClass = "font-medium inline-flex items-center justify-center px-2.5 py-0.5";
  let badgeClass;
  badgeClass = twMerge(baseClass, large ? "text-sm" : "text-xs", border ? `border ${borderedColors[color]}` : colors[color], href && hoverColors[color], rounded ? "rounded-full" : "rounded", $$restProps.class);
  if (badgeStatus) {
    $$payload.out += "<!--[-->";
    element(
      $$payload,
      tag,
      () => {
        $$payload.out += `${spread_attributes({ ...$$restProps, class: clsx(badgeClass) })}`;
      },
      () => {
        if (href) {
          $$payload.out += "<!--[-->";
          $$payload.out += `<a${attr("href", href)}><!---->`;
          slot($$payload, $$props, "default", {}, null);
          $$payload.out += `<!----></a>`;
        } else {
          $$payload.out += "<!--[!-->";
          $$payload.out += `<!---->`;
          slot($$payload, $$props, "default", {}, null);
          $$payload.out += `<!---->`;
        }
        $$payload.out += `<!--]--> `;
        if (dismissable) {
          $$payload.out += "<!--[-->";
          $$payload.out += `<!---->`;
          slot($$payload, $$props, "close-button", { close }, () => {
            CloseButton($$payload, {
              divclass: "ms-1.5 -me-1.5",
              color,
              size: large ? "sm" : "xs",
              ariaLabel: "Remove badge"
            });
          });
          $$payload.out += `<!---->`;
        } else {
          $$payload.out += "<!--[!-->";
        }
        $$payload.out += `<!--]-->`;
      }
    );
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]-->`;
  bind_props($$props, {
    color,
    large,
    dismissable,
    border,
    href,
    rounded,
    transition,
    params,
    tag
  });
  pop();
}
function _page($$payload) {
  Accordion($$payload, {
    children: ($$payload2) => {
      AccordionItem($$payload2, {
        children: ($$payload3) => {
          $$payload3.out += `<p>// TODO: edit contents</p>`;
        },
        $$slots: {
          default: true,
          header: ($$payload3) => {
            $$payload3.out += `<span slot="header">Camera One `;
            Badge($$payload3, {
              class: "text-base-50 dark:text-base-300 bg-green-50 px-2.5 py-0.5 dark:bg-green-300",
              "rounded-sm": true,
              children: ($$payload4) => {
                $$payload4.out += `<!---->Connected`;
              },
              $$slots: { default: true }
            });
            $$payload3.out += `<!----></span>`;
          }
        }
      });
      $$payload2.out += `<!----> `;
      AccordionItem($$payload2, {
        children: ($$payload3) => {
          $$payload3.out += `<p>// TODO: edit contents</p>`;
        },
        $$slots: {
          default: true,
          header: ($$payload3) => {
            $$payload3.out += `<span slot="header">Camera Two `;
            Badge($$payload3, {
              class: "text-base-50 dark:text-base-300 bg-red-50 px-2.5 py-0.5 dark:bg-red-300",
              "rounded-sm": true,
              children: ($$payload4) => {
                $$payload4.out += `<!---->Failed to Connect`;
              },
              $$slots: { default: true }
            });
            $$payload3.out += `<!----></span>`;
          }
        }
      });
      $$payload2.out += `<!----> `;
      AccordionItem($$payload2, {
        children: ($$payload3) => {
          $$payload3.out += `<p>// TODO: edit contents</p>`;
        },
        $$slots: {
          default: true,
          header: ($$payload3) => {
            $$payload3.out += `<span slot="header">Camera Three `;
            Badge($$payload3, {
              class: "text-base-50 dark:text-base-300 bg-yellow-50 px-2.5 py-0.5 dark:bg-yellow-300",
              "rounded-sm": true,
              children: ($$payload4) => {
                $$payload4.out += `<!---->Connecting`;
              },
              $$slots: { default: true }
            });
            $$payload3.out += `<!----></span>`;
          }
        }
      });
      $$payload2.out += `<!---->`;
    },
    $$slots: { default: true }
  });
}
export {
  _page as default
};
