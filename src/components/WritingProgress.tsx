import { writingProjects } from "@/content/site";

export function WritingProgress() {
  return (
    <section className="progress-section" id="writing-progress" aria-labelledby="progress-title">
      <div className="section-heading">
        <span aria-hidden="true" />
        <h2 id="progress-title">The Fate of Creation: Work in Progress</h2>
        <span aria-hidden="true" />
      </div>
      <div className="progress-grid">
        {writingProjects.map((project) => (
          <article className="progress-card" key={project.series}>
            <p className="series-name">{project.series}</p>
            <h3>{project.title}</h3>
            <p className="progress-label">Writing progress</p>
            <div className="progress-row">
              <div
                className="progress-track"
                role="progressbar"
                aria-label={`${project.series} writing progress`}
                aria-valuemin={0}
                aria-valuemax={100}
                aria-valuenow={project.progress}
              >
                <span style={{ width: `${project.progress}%` }} />
              </div>
              <strong>{project.progress}%</strong>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
