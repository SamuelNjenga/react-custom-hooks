import useEventListener from "../set_four/useEventListener";

export default function useClickOutside(ref, cb) {
  useEventListener(
    "click",
    (e) => {
      if (ref.current === null || ref.current.contains(e.target)) {
        return;
      } else {
        cb(e);
      }
    },
    document
  );
}
