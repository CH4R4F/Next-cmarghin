const ServiceCard = ({ icon, title, text, active = false }) => {
  return (
    <div
      className={`w-full py-8 px-4 text-center rounded-xl flex flex-col gap-3 items-center max-w-[300px]  ${
        active
          ? "dark:bg-dark-activeCard bg-light-primary shadow "
          : "dark:bg-dark-card bg-dark-primary/10"
      }`}
    >
      <div
        className={`text-5xl flex justify-center items-center w-20 h-20 border-dashed border-[3px] rounded-full ${
          active
            ? "dark:text-dark-soft text-white border-white"
            : "text-dark-primary dark:text-white border-dark-primary dark:border-white"
        }`}
      >
        {icon}
      </div>
      <h5
        className={`font-semibold text-2xl ${
          active
            ? "dark:text-dark-soft text-white"
            : "dark:text-white text-dark-primary"
        }`}
      >
        {title}
      </h5>
      <p
        className={`w-10/12 text-base ${
          active ? "dark:text-dark-text text-dark-text" : ""
        }`}
      >
        {text}
      </p>
    </div>
  );
};
export default ServiceCard;
