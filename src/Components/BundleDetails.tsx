import { useRef } from 'react';
import { useClickOutside } from '@hooks/useClickOutside';
import * as S from './BundleDetails.styled';

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
    <S.Details ref={detailsRef}>
      <S.Summary>{bundleName}</S.Summary>
      <S.IngredientsList>
        {ingredients && ingredients.length > 0 ? (
          ingredients.map(item => (
            <S.IngredientItem key={item.ingredientId}>
              {item.ingredient.name}: {item.quantity}{convertUnitForDisplay(item.ingredient.unit)}
            </S.IngredientItem>
          ))
        ) : (
          <S.EmptyMessage>
            Quantidades não definidas para este bolo
          </S.EmptyMessage>
        )}
      </S.IngredientsList>
    </S.Details>
  );
}
