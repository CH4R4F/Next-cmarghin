const SectionTitle = ({ text }) => {
  return (
    <h2 className="font-light text-5xl dark:text-dark-text tablet:text-6xl laptop:text-7xl p-4 pl-8 relative section_title">
      {text}
    </h2>
  );
};
export default SectionTitle;
