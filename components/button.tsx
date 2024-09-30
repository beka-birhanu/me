import Image from "next/image";

type ButtonLinkProps = {
  isPrimary?: boolean;
  href: string;
  text?: string;
  target?: "_blank" | "_self" | "_parent" | "_top";
  rel?: string;
  iconUrl?: string;
  border?: boolean;
};

export const ButtonLink = ({
  href,
  text = "",
  target = "_blank",
  rel,
  isPrimary = true,
  iconUrl,
  border = true,
}: ButtonLinkProps) => {
  const theme = isPrimary
    ? "hover:bg-primary hover:text-background text-white border-primary"
    : "hover:text-white hover:border-white text-secondary border-secondary";

  return (
    <a
      href={href}
      target={target}
      rel={target === "_blank" ? "noopener noreferrer" : rel}
      className={`${theme} px-4 py-2 capitalize text-xl font-semibold transition-colors inline-flex items-center ${border ? "border-[1px]" : ""} gap-2`}
    >
      {iconUrl && (
        <Image
          src={iconUrl}
          alt="Icon"
          width={24}
          height={24}
          className="h-auto w-auto"
        />
      )}
      {text}
    </a>
  );
};
