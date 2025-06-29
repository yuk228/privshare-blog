export default function Tags(props: { tags: string[] }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 mt-2 gap-2">
      {props.tags.map(tag => (
        <div className="border rounded-md px-3 py-2 text-center" key={tag}>
          {tag}
        </div>
      ))}
    </div>
  );
}
