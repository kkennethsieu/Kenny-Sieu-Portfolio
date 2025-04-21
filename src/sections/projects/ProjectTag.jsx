function ProjectTag({ tag }) {
  const { icon, name } = tag;
  return (
    <button className="flex gap-1 items-center bg-slate-100 px-1 py-1 rounded-lg">
      <span>{icon}</span>
      <span>{name}</span>
    </button>
  );
}

export default ProjectTag;
