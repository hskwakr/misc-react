export const colors = [
  'red',
  'yellow',
  'green',
  'blue',
  'orange',
  'purple',
] as const;

export type Color = typeof colors[number];
