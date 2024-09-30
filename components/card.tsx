import Image from "next/image";
import { ButtonLink } from "@/components/button";

type CardLink = {
  href: string;
  text: string;
};

type CardProps = {
  image: {
    src: string;
    alt: string;
  };
  title: string;
  body: string;
  keywords: string[];
  links: CardLink[];
};

export const Card = ({ image, title, body, keywords, links }: CardProps) => {
  return (
    <div className="text-2xl text-secondary w-full overflow-hidden bg-background border-[1px] border-secondary">
      <Image
        src={image.src}
        alt={image.alt}
        width={1000}
        height={700}
        className="w-full h-auto object-cover"
      />

      {/* Keywords */}
      <div className="mb-3 flex flex-wrap gap-2 border-b-[1px] border-secondary p-4">
        {keywords.map((keyword, index) => (
          <span key={index}>{keyword}</span>
        ))}
      </div>
      <div className="p-6">
        <h2 className="text-3xl text-white font-medium mb-3">{title}</h2>
        <p className="text-secondary text-xl mb-3">{body}</p>

        {/* Links */}
        <div className="mt-4 flex gap-5">
          {links.map((link, index) => (
            <ButtonLink
              key={index}
              href={link.href}
              text={link.text}
              isPrimary={false}
            ></ButtonLink>
          ))}
        </div>
      </div>
    </div>
  );
};
