import { useState } from "react";

export const useActiveSelection = () => {
  const [active, setActive] = useState<number | null>(null);

  const setSelection = (selection: number) => {
    selection == active ? setActive(null) : setActive(selection);
  }

  return [active, setSelection];
}