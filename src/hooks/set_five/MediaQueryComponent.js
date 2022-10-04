import useMediaQuery from "./useMediaQuery";

export default function MediaQueryComponent() {
  const isLarge = useMediaQuery("(min-width: 200px)");
  const redText = useMediaQuery("(min-width: 600px)");

  return (
    <div>
      Large: {isLarge.toString()}
      <p style={{ color: redText ? "red" : "black" }}>Hey</p>
    </div>
  );
}
