type TitleProps = {
  title: string;
  size?: "large" | "medium" | "small";
  useLine?: boolean;
};

const sizeClass = {
  large: "text-4xl",
  medium: "text-2xl",
  small: "text-lg",
};

export const Title = ({
  title,
  size = "medium",
  useLine = false,
}: TitleProps) => {
  return (
    <div className={`${sizeClass[size]} flex items-center font-medium w-full`}>
      <p className="text-primary tracking-wider">#</p>
      <h2 id={title.toLowerCase()} className={`text-white tracking-wide mr-8`}>
        {title}
      </h2>
      {useLine && <hr className="border-primary border-t-[1px] w-1/2 mt-2" />}
    </div>
  );
};
