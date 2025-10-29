import { useState, useEffect } from "react";

export function useItemForm(initialState: boolean) {
  const [showAddItemMenu, setShowAddItemMenu] = useState(initialState);

  useEffect(() => {
    const formElement = document.getElementById("form");
    if (formElement) {
      formElement.style.top = showAddItemMenu ? "20vh" : "-100vh";
    }
  }, [showAddItemMenu]);

  return { showAddItemMenu, setShowAddItemMenu };
}
