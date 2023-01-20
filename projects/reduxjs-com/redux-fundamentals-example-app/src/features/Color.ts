export const colors = [
  'red',
  'yellow',
  'green',
  'blue',
  'orange',
  'purple',
] as const;

export type Color = typeof colors[number];

export const capitalize = (s: Color) => s[0].toUpperCase() + s.slice(1);
