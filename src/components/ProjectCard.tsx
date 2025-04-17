import Link from "next/link";

interface Props {
  title: string;
  description: string;
  image: string;
  link?: string; // <- ubah jadi optional
}

export default function ProjectCard({
  title,
  description,
  image,
  link,
}: Props) {
  const content = (
    <div
      className={`bg-white rounded-xl shadow-lg overflow-hidden transition hover:scale-105 cursor-pointer`}>
      <img src={image} alt={title} className="w-full h-40 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-bold text-ghibliForest">{title}</h3>
        <p className="text-ghibliForest">{description}</p>
      </div>
    </div>
  );

  return link ? (
    <Link
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="block">
      {content}
    </Link>
  ) : (
    <div className="block">{content}</div>
  );
}
