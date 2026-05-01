// SVG inner-path strings — use with <svg set:html={icons.name} /> in Astro templates.
// Each string is the content that goes INSIDE the <svg> wrapper (paths, circles, rects).

export const icons = {
  pulse:  `<path d="M3 12h4l2-5 4 10 2-5h6"/>`,
  home:   `<path d="M3 11l9-7 9 7"/><path d="M5 10v10h14V10"/>`,
  drop:   `<path d="M12 3c4 5 6 8 6 11a6 6 0 1 1-12 0c0-3 2-6 6-11z"/>`,
  shield: `<path d="M12 3l8 3v5c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6l8-3z"/>`,
  team:   `<circle cx="9" cy="9" r="3"/><circle cx="17" cy="11" r="2.5"/><path d="M3 19c0-3 3-5 6-5s6 2 6 5"/><path d="M14 19c.5-2 2.5-3.5 5-3.5"/>`,
  cpu:    `<rect x="6" y="6" width="12" height="12" rx="2"/><rect x="9" y="9" width="6" height="6" rx="1"/><path d="M9 3v3M15 3v3M9 18v3M15 18v3M3 9h3M3 15h3M18 9h3M18 15h3"/>`,
  call:   `<path d="M5 4h4l2 5-3 1.5a11 11 0 0 0 5.5 5.5L15 13l5 2v4a2 2 0 0 1-2 2A15 15 0 0 1 3 6a2 2 0 0 1 2-2z"/>`,
  spark:  `<path d="M12 3v6M12 15v6M3 12h6M15 12h6"/>`,
  pin:    `<path d="M12 22s7-7.5 7-13a7 7 0 1 0-14 0c0 5.5 7 13 7 13z"/><circle cx="12" cy="9" r="2.5"/>`,
  mail:   `<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/>`,
  arrow:  `<path d="M5 12h14M13 6l6 6-6 6"/>`,
  check:  `<path d="M5 12l5 5 9-11"/>`,
};
