export default function DemoComponent({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      Demo Control: {children}
    </div>
  )
}
