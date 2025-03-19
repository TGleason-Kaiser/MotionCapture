import "clsx";
import { k as sanitize_props, l as rest_props, m as fallback, n as head, o as spread_attributes, q as clsx, t as slot, u as bind_props, j as pop, p as push, v as attr_class } from "../../chunks/index2.js";
import { twMerge } from "tailwind-merge";
function DarkMode($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, ["btnClass", "size", "ariaLabel"]);
  push();
  let btnClass = fallback($$props["btnClass"], "text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-hidden rounded-lg text-sm p-2.5");
  let size = fallback($$props["size"], "md");
  let ariaLabel = fallback($$props["ariaLabel"], "Dark mode");
  const sizes = { sm: "w-4 h-4", md: "w-5 h-5", lg: "w-6 h-6" };
  head($$payload, ($$payload2) => {
    $$payload2.out += `<script>
    if ('color-theme' in localStorage) {
      // explicit preference - overrides author's choice
      localStorage.getItem('color-theme') === 'dark' ? window.document.documentElement.classList.add('dark') : window.document.documentElement.classList.remove('dark');
    } else {
      // browser preference - does not overrides
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) window.document.documentElement.classList.add('dark');
    }
  <\/script><!---->`;
  });
  $$payload.out += `<button${spread_attributes(
    {
      "aria-label": ariaLabel,
      type: "button",
      ...$$restProps,
      class: clsx(twMerge(btnClass, $$sanitized_props.class))
    }
  )}><span class="hidden dark:block"><!---->`;
  slot($$payload, $$props, "lightIcon", {}, () => {
    $$payload.out += `<svg${attr_class(clsx(sizes[size]))} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1
  0 100-2H3a1 1 0 000 2h1z" fill-rule="evenodd" clip-rule="evenodd"></path></svg>`;
  });
  $$payload.out += `<!----></span> <span class="block dark:hidden"><!---->`;
  slot($$payload, $$props, "darkIcon", {}, () => {
    $$payload.out += `<svg${attr_class(clsx(sizes[size]))} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path></svg>`;
  });
  $$payload.out += `<!----></span></button>`;
  bind_props($$props, { btnClass, size, ariaLabel });
  pop();
}
function _layout($$payload, $$props) {
  let { children } = $$props;
  DarkMode($$payload, {});
  $$payload.out += `<!----> `;
  children($$payload);
  $$payload.out += `<!---->`;
}
export {
  _layout as default
};
