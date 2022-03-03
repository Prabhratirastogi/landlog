import { useState } from "react";

export const useActiveSelection = () => {
  const [active, setActive] = useState<number>(-1);

  const setSelection = (selection: number) => (
    (selection == active) ? setActive(-1) : setActive(selection)
  )

  return {active, setSelection};
}