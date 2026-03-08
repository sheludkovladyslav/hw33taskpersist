import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLanguage } from "../redux/languageSlice";

export default function LanguageSwitch() {
  const dispatch = useDispatch();
  const language = useSelector((state) => state.language);

  return (
    <>
      {language === "UA" && <p>Кіт любить стрибати</p>}
      {language === "EN" && <p>Cat loves to jump</p>}

      <div>
        <button onClick={() => dispatch(setLanguage("UA"))}>UA</button>
        <button onClick={() => dispatch(setLanguage("EN"))}>EN</button>
      </div>
    </>
  );
}
