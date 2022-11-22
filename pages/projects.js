import Layout from '../components/layout';
import ProjectCard from '../components/Project-card/Project-card';
import Nav from '../components/Nav/Nav';
const Projects = () => {
  return (
    <>
      <Layout>
        <main className='flex flex-col items-center justify-center'>
          <section className='flex flex-col items-center'>
            <h3 className='text-xl mb-5'>Projects</h3>
            <h4>Fullstack</h4>
            <ProjectCard />
            <ProjectCard />
          </section>
          <section className='flex flex-col items-center'>
            <h4>Frontend</h4>
            <ProjectCard />
            <ProjectCard />
          </section>
        </main>
      </Layout>
    </>
  );
};

export default Projects;
