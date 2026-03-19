export default function SectionTitle({
  title,
  highlight,
}: {
  title: string;
  highlight: string;
}) {
  return (
    <h2 className="font-nasal text-4xl text-center">
      {title}
      <span className="text-gold">{highlight}</span>
    </h2>
  );
}
