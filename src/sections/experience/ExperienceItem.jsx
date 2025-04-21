function ExperienceItem({ date, company, role, description }) {
  return (
    <>
      <div className="grid grid-cols-[0.25fr_1fr] text-sm">
        <p>{date}</p>
        <div className="font-semibold">
          <p>{company}</p>
          <p className="italic">{role}</p>
        </div>
        <div></div>
        <p className="mt-4 leading-relaxed">{description}</p>
      </div>
    </>
  );
}

export default ExperienceItem;
