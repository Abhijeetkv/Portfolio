
const SectionHeader = ({
  title,
  eyebrow,
  description,
}: {
  title: string;
  eyebrow: string;
  description: string;
}) => {
  return (
    <div className="text-center">
      <p className="uppercase text-xl font-semibold tracking-widest bg-gradient-to-r from-indigo-400 to-sky-400 bg-clip-text text-transparent">
        {eyebrow}
      </p>

      <h2 className="font-serif text-3xl md:text-5xl mt-6 text-white">
        {title}
      </h2>

      <p className="text-white/60 md:text-lg lg:text-xl mt-4 max-w-md mx-auto">
        {description}
      </p>
    </div>
  );
};

export default SectionHeader;
