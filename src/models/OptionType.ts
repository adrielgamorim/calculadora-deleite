export const OptionType = {
    MenuTitleItem: "MenuTitleItem",
    TextInputItem: "TextInputItem",
    CheckboxItem: "CheckboxItem"
} as const;

export type OptionType = typeof OptionType[keyof typeof OptionType];