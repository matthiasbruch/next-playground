export default function DemoPage(args: { params: { id: number } }) {
  return (
    <div>
      Subpage Page {args.params.id}
    </div>
  )
}
