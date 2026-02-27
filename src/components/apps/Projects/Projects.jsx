const projects = [
  { id: 1, title: 'Project One', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
  { id: 2, title: 'Project Two', description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
  { id: 3, title: 'Project Three', description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.' },
  { id: 4, title: 'Project Four', description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' },
  { id: 5, title: 'Project Five', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam quis nostrud exercitation.' },
]

function Projects() {
  return (
    <div style={{ padding: 16 }} className="window-content">
      {projects.map(project => (
        <div key={project.id} className="window" style={{ marginBottom: 16 }}>
          <div className="title-bar">
            <div className="title-bar-text">{project.title}</div>
          </div>
          <div className="window-body">
            <p>{project.description}</p>
            <button>View on GitHub</button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Projects