export const getProjectSlug = (title) => {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
};

export const generateProjectId = (project) => {
  if (project.id) {
    return project.id;
  }
  return getProjectSlug(project.title);
};

export const findProjectById = (id, projects) => {
  return projects.find((project) => generateProjectId(project) === id);
};

export const isLiveProject = (project) => {
  return !!project.website;
};

export const getThumbnailType = (project) => {
  return isLiveProject(project) ? "live" : "github";
};

