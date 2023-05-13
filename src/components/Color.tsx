const colors = {
  red: "red",
  blue: "blue",
  yellow: "yellow",
} as const

type Color = keyof typeof colors

export function Color(props: React.PropsWithChildren<{ color: Color }>) {
  return (
    <div style={{ padding: 50, background: colors[props.color] }}>
      <h1>{props.color}</h1>
      <div>{props.children}</div>
    </div>
  )
}
