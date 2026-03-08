import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { switchTheme } from "../redux/themeSlice";

export default function ThemeSwitch() {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme);

  useEffect(() => {
    document.body.classList.remove("bright", "dark");
    document.body.classList.add(theme);
  }, [theme]);

  return (
    <>
      <button
        onClick={() => {
          dispatch(switchTheme());
        }}
      >
        Switch
      </button>
    </>
  );
}
