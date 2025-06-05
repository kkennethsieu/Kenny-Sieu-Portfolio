function ProjectTag({ tag }) {
  const { icon, name } = tag;

  return (
    <div className="flex items-center gap-2 px-2 py-2 text-xs font-medium text-blue-600 transition-all duration-300 bg-blue-100 rounded-lg shadow-sm whitespace-nowrap">
      <span>{icon}</span>
      <span>{name}</span>
    </div>
  );
}

export default ProjectTag;
