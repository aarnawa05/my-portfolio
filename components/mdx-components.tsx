import type { MDXComponents } from "mdx/types";

export const mdxComponents: MDXComponents = {
  h2: (props) => (
    <h2
      className="font-display font-extrabold tracking-[-0.02em] text-xl sm:text-2xl pt-8 pb-1"
      {...props}
    />
  ),
  p: (props) => (
    <p className="text-[15px] sm:text-base leading-relaxed text-[#35373b]" {...props} />
  ),
  ul: (props) => (
    <ul
      className="list-disc pl-5 flex flex-col gap-1.5 text-[15px] sm:text-base leading-relaxed text-[#35373b]"
      {...props}
    />
  ),
  li: (props) => <li {...props} />,
  strong: (props) => <strong className="font-semibold text-ink" {...props} />,
  code: (props) => (
    <code
      className="bg-ground rounded px-1.5 py-0.5 text-[0.9em] font-mono"
      {...props}
    />
  ),
  a: (props) => (
    <a className="text-accent hover:text-accent-deep font-medium" {...props} />
  ),
};
