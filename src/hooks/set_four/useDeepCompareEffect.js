import { useEffect, useRef } from "react";

import { isEqual } from "lodash";

export default function useDeepCompareEffect(callback, dependencies) {
  const currentdependenciesRef = useRef();

  if (!isEqual(currentdependenciesRef.current, dependencies)) {
    currentdependenciesRef.current = dependencies;
  }

  useEffect(callback, [currentdependenciesRef.current]);
}
