export type ColorVariants = 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'light' | 'dark';

export type BackgroundColors = `${'bg-' | ''}${ColorVariants}`;
export type TextBackgroundColors = `${'text-bg-' | ''}${ColorVariants}`;

export type TextVariants =
    'muted'
    | 'white-50'
    | 'black-50'
    | 'white'
    | 'opacity-75'
    | 'opacity-50'
    | 'opacity-20'
    | 'black';

export const getColorVariants: ColorVariants[] = [
    'primary',
    'secondary',
    'success',
    'warning',
    'danger',
    'info',
    'light',
    'dark'
];