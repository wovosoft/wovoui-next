export type ColorVariants = 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'light' | 'dark';
export type BackgroundColors = `${'bg-' | ''}${ColorVariants}`;
export type TextBackgroundColors = `${'text-bg-' | ''}${ColorVariants}`;

export const getColorVariants: ColorVariants[] = ['primary', 'secondary', 'success', 'warning', 'danger', 'info', 'light', 'dark'];