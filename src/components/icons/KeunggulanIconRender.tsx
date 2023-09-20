export type SVGIconProp = {
    className: string
}

export function KeunggulanIconRender({
    render,
}: {
    render: (prop: SVGIconProp) => React.ReactNode
}) {
    const className = "h-32 w-32 fill-accent"
    return <div>{render({ className })}</div>
}
