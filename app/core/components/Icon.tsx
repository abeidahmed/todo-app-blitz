const Glyph = ({ icon }: { icon: string }): JSX.Element | null => {
  switch (icon) {
    case "today":
      return (
        <g fill="currentColor" fillRule="evenodd">
          <path
            fillRule="nonzero"
            d="M6 4.5h12A1.5 1.5 0 0 1 19.5 6v2.5h-15V6A1.5 1.5 0 0 1 6 4.5z"
            opacity=".1"
          ></path>
          <path
            fillRule="nonzero"
            d="M6 4h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zm0 1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H6zm1 3h10a.5.5 0 1 1 0 1H7a.5.5 0 0 1 0-1z"
          ></path>
          <text
            fontFamily="-apple-system, system-ui, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'"
            fontSize="9"
            transform="translate(4 2)"
            fontWeight="500"
          >
            <tspan x="8" y="15" textAnchor="middle">
              13
            </tspan>
          </text>
        </g>
      )
    case "upcoming":
      return (
        <g fill="currentColor" fillRule="nonzero">
          <path d="M6 4.5h12A1.5 1.5 0 0119.5 6v2.5h-15V6A1.5 1.5 0 016 4.5z" opacity="0.1"></path>
          <path d="M6 4h12a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2zm0 1a1 1 0 00-1 1v12a1 1 0 001 1h12a1 1 0 001-1V6a1 1 0 00-1-1H6zm10 12a1 1 0 110-2 1 1 0 010 2zm-4 0a1 1 0 110-2 1 1 0 010 2zm-4 0a1 1 0 110-2 1 1 0 010 2zm8-4a1 1 0 110-2 1 1 0 010 2zm-4 0a1 1 0 110-2 1 1 0 010 2zm-4 0a1 1 0 110-2 1 1 0 010 2zM7 8h10a.5.5 0 110 1H7a.5.5 0 010-1z"></path>
        </g>
      )
    default:
      throw new Error(`Undefined icon: ${icon}`)
  }
}

type IconProps = {
  icon: string
  type?: "fill" | "stroke"
  className?: string
  height?: number
  width?: number
  "aria-label"?: string
  viewBox?: string
}

const Icon = ({ icon, type = "stroke", ...props }: IconProps): JSX.Element => {
  let viewBox: string
  let fill: string
  let stroke: string

  if (type === "stroke") {
    viewBox = "0 0 24 24"
    fill = "none"
    stroke = "currentColor"
  } else {
    viewBox = "0 0 20 20"
    fill = "currentColor"
    stroke = "none"
  }

  return (
    <svg fill={fill} stroke={stroke} viewBox={viewBox} {...props}>
      <Glyph icon={icon} />
    </svg>
  )
}

export default Icon
