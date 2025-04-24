function ProjectTag({ tag }) {
  const { icon, name } = tag;

  return (
    <div className="flex gap-2 items-center bg-blue-100 text-blue-600 px-2 py-2 rounded-lg text-xs font-medium transition-all  duration-300 shadow-sm">
      <span>{icon}</span>
      <span>{name}</span>
    </div>
  );
}

export default ProjectTag;
