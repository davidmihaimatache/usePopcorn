import { useEffect } from "react";
export function useKey(key, action) {
  useEffect(
    function () {
      function callback(event) {
        event.code === key && action();
      }
      document.addEventListener("keydown", callback);
      return () => document.removeEventListener("keydown", callback);
    },
    [action, key]
  );
}
