import CvEntry from "../components/CvEntry"

export default function Cv() {
  return(
    <>
    <h1 className = 'text-center text-3xl my-8'> Curriculum Vitae</h1>
    <h2 className = 'text-2xl my-4 mx-4'> Experiences </h2>
    <CvEntry title="Software Engineer" employer="Tech Company">
      <p>Developed and maintained web applications using React and Node.js.</p>
      <p>Collaborated with cross-functional teams to deliver high-quality software.</p>
    </CvEntry>
    <CvEntry title="Intern Developer" employer="Startup Inc.">
      <p>Assisted in the development of a mobile application using Flutter.</p>
      <p>Participated in code reviews and contributed to team meetings.</p>
    </CvEntry>
    </>
  )
}