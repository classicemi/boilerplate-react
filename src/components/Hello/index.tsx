export interface HelloProps {
  className?: string
  name: string
}

export function Hello({ className, name }: HelloProps): JSX.Element {
  return <div className={className}>Hello {name}</div>
}
