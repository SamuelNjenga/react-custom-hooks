import React, { useRef } from "react";

import useOnScreen from "./useOnScreen";

const OnScreenComponent = () => {
  const headerTwoRef = useRef();
  const visible = useOnScreen(headerTwoRef, "-100px");

  return (
    <div>
      <h1>Header</h1>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Id accusantium
        enim maiores inventore consequuntur, obcaecati recusandae ex nisi,
        dolorem architecto ipsam exercitationem harum? Doloribus quisquam
        cupiditate nostrum placeat, quibusdam ipsum eligendi est hic non quis
        accusamus aliquid earum veniam eaque dolore repellendus ut aut vitae
        dolor! Doloremque iusto corporis, alias voluptate facilis cupiditate id
        praesentium sint. Repudiandae repellendus ullam dolorum aliquid, sequi
        debitis, earum eum quisquam aliquam sunt ut dolores?
      </div>
      <h1 ref={headerTwoRef}>Header 2 {visible && "(Visible)"}</h1>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Id accusantium
        enim maiores inventore consequuntur, obcaecati recusandae ex nisi,
        dolorem architecto ipsam exercitationem harum? Doloribus quisquam
        cupiditate nostrum placeat, quibusdam ipsum eligendi est hic non quis
        accusamus aliquid earum veniam eaque dolore repellendus ut aut vitae
        dolor! Doloremque iusto corporis, alias voluptate facilis cupiditate id
        praesentium sint. Repudiandae repellendus ullam dolorum aliquid, sequi
        debitis, earum eum quisquam aliquam sunt ut dolores?
      </div>
    </div>
  );
};

export default OnScreenComponent;
