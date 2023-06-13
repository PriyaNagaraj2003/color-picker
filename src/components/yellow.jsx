import React, { Fragment, useState, useEffect } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import style from "./css/yellow.module.css";

const Yellow = () => {
  const { value, handleClick } = useClickToCopyMsg();

  const colors = Object.values(style).filter(s => s.startsWith("#"));

  return (
    <Fragment>
      <div className={style.container} id="yellow" onClick={handleClick}>
        {/* loop though */}
        {colors.map((color, index) => {
          return (
            <CopyToClipboard key={index} text={`${color}`}>
              <div id={style["yellow" + (index + 1)]} className={style.btn}>
                <span className={`${style.gap} ${style.clr}`}>
                  <input
                    type="button"
                    className={style.mybuttonoverlap}
                    value={value}
                  />
                  {color}
                </span>
              </div>
            </CopyToClipboard>
          );
        })}
      </div>
    </Fragment>
  );
};

function useClickToCopyMsg() {
  const [value, setValue] = useState("Click to Copy");

  const handleClick = () => {
    setValue("C  O  P  I  E D");
  };

  useEffect(() => {
    setTimeout(() => setValue("Click to Copy"), 2500);
  }, [value]);

  return { value, handleClick };
}

export default Yellow;
