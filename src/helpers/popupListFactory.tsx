import { OptionType } from "@models/OptionType";
import type { PopupListItem } from "@models/PopupListItem";

export function popupListFactory(option: OptionType, quantity: number, texts?: string[]): PopupListItem[] {
  const items: PopupListItem[] = [];

  if (quantity !== texts?.length) {
    console.warn("Quantidade de items desejados é diferente de quantidade de textos recebidos.\n",
      "Alguns elementos podem não ser exibidos corretamente.");
  }

  for (let i = 0; i < quantity; i++) {
    switch (option) {
      case OptionType.MenuTitleItem:
        items.push({
          elements: [
            <h2 key={`h2-${i}`}>{texts![i] || ''}</h2>
          ]
        });
        break;
      case OptionType.TextInputItem:
        items.push({
          elements: [
            <span key={`span-${i}`}>{texts![i] ? `${texts![i]}: ` : ''}</span>,
            <input key={`input-${i}`} type="text" />
          ]
        });
        break;
      case OptionType.CheckboxItem:
        items.push({
          elements: [
            <label key={`label-${i}`}>
              <input type="checkbox" />
              {texts![i] ? ` ${texts![i]}` : ''}
            </label>
          ]
        });
        break;
      default:
        break;
    }
  }
  return items;
}

export function generateMenu(params: {optionType: OptionType, quantity: number, texts: string[]}[]): PopupListItem[] {
    const menu: PopupListItem[] = [];
    for (const { optionType, quantity, texts } of params) {
        menu.push(...popupListFactory(optionType, quantity, texts));
    }
    return menu;
  }