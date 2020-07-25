import React from "react";

const TitleBar = ({ onClickHandler }) => (
  <header>
    <section className="bg-white p-3 shadow-lg">
      <div
        className="p-2 rounded border border-gray-400 inline-block cursor-pointer"
        onClick={onClickHandler} data-testid="logo"
      >
        <div className="font-black text-xl pl-3 pr-3">HACK NEWS.</div>
      </div>
    </section>
  </header>
);

export default React.memo(TitleBar);
