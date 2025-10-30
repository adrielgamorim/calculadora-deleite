import { useRef } from 'react';
import { useClickOutside } from '@hooks/useClickOutside';

interface BundleDetailsProps {
  bundleName: string;
  ingredients: Array<{
    ingredientId: string;
    ingredient: { name: string; unit: string };
    quantity: number;
  }>;
  convertUnitForDisplay: (unit: string) => string;
}

export function BundleDetails({ bundleName, ingredients, convertUnitForDisplay }: BundleDetailsProps) {
  const detailsRef = useRef<HTMLDetailsElement>(null);

  useClickOutside<HTMLDetailsElement>(detailsRef, () => {
    if (detailsRef.current?.open) {
      detailsRef.current.open = false;
    }
  });

  return (
    <details ref={detailsRef}>
      <summary>{bundleName}</summary>
      <ul>
        {ingredients && ingredients.length > 0 ? (
          ingredients.map(item => (
            <li key={item.ingredientId}>
              {item.ingredient.name}: {item.quantity}{convertUnitForDisplay(item.ingredient.unit)}
            </li>
          ))
        ) : (
          <li style={{ fontStyle: 'italic', color: '#999' }}>
            Quantidades não definidas para este bolo
          </li>
        )}
      </ul>
    </details>
  );
}
