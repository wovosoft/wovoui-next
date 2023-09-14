export type ColorVariant = 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'light' | 'dark';

export type BackgroundColors = `${'bg-' | ''}${ColorVariant}`;
export type TextBackgroundColors = `${'text-bg-' | ''}${ColorVariant}`;

export type TextVariants =
    'muted'
    | 'white-50'
    | 'black-50'
    | 'white'
    | 'opacity-75'
    | 'opacity-50'
    | 'opacity-20'
    | 'black';

export const getColorVariants: ColorVariant[] = [
    'primary',
    'secondary',
    'success',
    'warning',
    'danger',
    'info',
    'light',
    'dark'
];