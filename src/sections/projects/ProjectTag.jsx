function ProjectTag({ tag }) {
  const { icon, name } = tag;

  return (
    <div className="flex items-center gap-2 bg-blue-100 shadow-sm px-2 py-2 rounded-lg font-medium text-blue-600 text-xs whitespace-nowrap transition-all duration-300">
      <span>{icon}</span>
      <span>{name}</span>
    </div>
  );
}

export default ProjectTag;
