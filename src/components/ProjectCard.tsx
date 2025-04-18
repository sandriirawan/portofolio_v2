import Link from "next/link";
import { FiExternalLink } from "react-icons/fi"; // icon external link
import Image from "next/image"; // Importing Image from Next.js

interface Props {
  title: string;
  description: string;
  image: string;
  link?: string;
}

export default function ProjectCard({
  title,
  description,
  image,
  link,
}: Props) {
  const CardContent = (
    <div className="bg-white dark:bg-white/70 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden transform hover:scale-[1.03] cursor-pointer group">
      <div className="relative w-full h-40 overflow-hidden">
        {/* Replace <img> with <Image> for optimization */}
        <Image
          src={image}
          alt={title}
          layout="fill" // This allows the image to take the full container
          objectFit="cover" // Ensures the image covers the container without distortion
          className="transition-transform duration-300 group-hover:scale-110"
        />
        {/* Optional Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-70"></div>
      </div>
      <div className="p-4 space-y-2">
        <h3 className="text-xl font-bold text-ghibliNight dark:ghibliNight flex items-center gap-2">
          {title}
          {link && <FiExternalLink className="text-base text-ghibliBrown" />}
        </h3>
        <p className="text-ghibliNight dark:text-ghibliNightline-clamp-3">
          {description}
        </p>
      </div>
    </div>
  );

  return link ? (
    <Link
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="block">
      {CardContent}
    </Link>
  ) : (
    <div className="block">{CardContent}</div>
  );
}
