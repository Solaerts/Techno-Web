import CvEntry from "../components/CvEntry";
import SkillCard from "../components/SkillCard";
import NavBar from "../components/NavBar";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
      
      <main className="grow container mx-auto px-4 py-12 max-w-4xl">
        {/* En-tête du CV */}
        <header className="text-center mb-16">
          <h1 className="text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">Nicolas Willaerts</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-medium">
            Ingénieur Industriel & Électrique
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4 text-sm text-gray-500">
            <span className="bg-white px-3 py-1 rounded shadow-sm">willaertsnicolas@gmail.com</span>
            <span className="bg-white px-3 py-1 rounded shadow-sm">(+32) 496 77 20 12</span>
            <a href="https://www.linkedin.com/in/willaertsnicolas" className="bg-white px-3 py-1 rounded shadow-sm text-blue-600 hover:text-blue-800 transition-colors">
              Profil LinkedIn
            </a>
          </div>
        </header>

        {/* Section Expériences */}
        <section className="mb-16 animate-fade-in-up">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 flex items-center">
            <span className="bg-blue-600 w-2 h-8 mr-3 rounded-full"></span>
            Expériences Professionnelles
          </h2>
          <div className="space-y-6">
            <CvEntry 
              title="Stage chez IMEC" 
              date="Sept 2023 - Mai 2025" 
              location="IMEC" 
              description="Analyse de données pour le calcul EPE. Programmation et traitement de données avancé."
            />
            <CvEntry 
              title="Consultant" 
              date="2020 - 2024" 
              location="ECAM Engineering Consult (EEC)" 
              description="Réalisation de projets techniques extrascolaires. Assistance technique et mentorat en électronique."
            />
            <CvEntry 
              title="Réparateur Bénévole" 
              date="Sept 2023 - Sept 2024" 
              location="ECAM Repair Cafe" 
              description="Diagnostic et réparation d'objets du quotidien au sein d'une équipe FabLab."
            />
          </div>
        </section>

        {/* Section Projets */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 flex items-center">
            <span className="bg-blue-600 w-2 h-8 mr-3 rounded-full"></span>
            Projets Académiques & Personnels
          </h2>
          <div className="space-y-6">
            <CvEntry 
              title="Can Cooler (Projet EEC)" 
              date="Sept 2023 - Sept 2024" 
              description="Conception complète : modélisation du système de ventilation et dimensionnement de l'alimentation électrique."
            />
            <CvEntry 
              title="Panneau Publicitaire Interactif" 
              date="Fév 2023 - Mai 2023" 
              description="Programmation des matrices LED et gestion de l'interactivité utilisateur. Travail d'équipe sur la résolution de bugs hardware."
            />
            <CvEntry 
              title="Bras Télécommandé (Projet Intégrateur)" 
              date="Sept 2022 - Mai 2023" 
              description="Assemblage mécanique et programmation Arduino d'un bras robotisé pour un jeu d'adresse."
            />
          </div>
        </section>
        
        {/* Section Formation */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 flex items-center">
            <span className="bg-blue-600 w-2 h-8 mr-3 rounded-full"></span>
            Formation
          </h2>
          <div className="space-y-6">
            <CvEntry 
              title="Master en Ingénierie Industrielle (Électronique)" 
              date="2020 - Présent" 
              location="ECAM, Bruxelles" 
              description="Spécialisation en électronique et systèmes embarqués."
            />
            <CvEntry 
              title="Bachelier en Sciences Physiques" 
              date="Précédent" 
              location="ULB, Bruxelles" 
            />
          </div>
        </section>

        {/* Section Compétences */}
        <section>
          <h2 className="text-3xl font-bold text-gray-800 mb-8 flex items-center">
            <span className="bg-blue-600 w-2 h-8 mr-3 rounded-full"></span>
            Compétences
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <SkillCard 
              title="Informatique & Tech" 
              skills={[
                "Langages : Python, C++ (basique), Octave",
                "Logiciels : Altium Designer, AutoCAD, LTSpice, GNURadio",
                "Bureautique : Microsoft Office Suite",
                "IA : Utilisation d'outils d'intelligence artificielle"
              ]}
            />
            <SkillCard 
              title="Langues" 
              skills={[
                "Français : Langue maternelle",
                "Anglais : Niveau B2 (Intermédiaire avancé)",
                "Néerlandais : Notions de base"
              ]}
            />
          </div>
        </section>

      </main>
    </div>
  );
}