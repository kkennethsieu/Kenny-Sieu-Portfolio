function TechnologyItem({ icon, title, description }) {
  return (
    <div className="flex flex-col items-center gap-1">
      <p className="text-3xl">{icon}</p>
      <p className="text-sm font-medium">{title}</p>
      <p className="text-sm">{description}</p>
    </div>
  );
}

export default TechnologyItem;
