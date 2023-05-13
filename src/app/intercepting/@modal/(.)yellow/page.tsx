import { Color } from "../../../../components/Color"

export default function Page() {
  return (
    <div
      style={{
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        border: "solid 2px",
      }}
    >
      <Color color="yellow">
        Should this intercepting route be open even on subsequent routes?
      </Color>
    </div>
  )
}
