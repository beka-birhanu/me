import Image from "next/image";

type NavItem = {
  href: string;
  text: string;
};

type NavProps = {
  items: NavItem[];
  logo?: {
    src: string;
    alt: string;
  };
};

export const Nav = ({ items, logo }: NavProps) => {
  return (
    <header className="flex justify-between items-center pt-7 pb-3.5 px-12 m-0 max-w-screen-2xl text-white text-2xl font-medium w-full fixed z-10 bg-background">
      {logo && (
        <a href="/">
          <Image
            src={logo.src}
            alt={logo.alt}
            width={500}
            height={100}
            className="h-auto w-auto"
          />
        </a>
      )}

      <nav>
        <ul className="flex space-x-8 justify-end">
          {items.map((item, index) => (
            <li key={index} className="flex items-center ">
              <p className="text-primary tracking-wider"># </p>
              <a
                href={item.href}
                className="hover:text-primary transition-colors tracking-wider"
              >
                {item.text}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
