export type TeamMember = {
  name: string;
  role: string;
  focus?: string;
  image: string;
  linkedinUrl: string;
};

export const teamData: {
  groupPhoto: string;
  members: TeamMember[];
} = {
  groupPhoto: "/The team.jpeg",
  members: [
    {
      name: "Juan David Torres",
      role: "Dirección",
      image: "/JuanDavid.png",
      linkedinUrl: "https://www.linkedin.com/in/juan-david-torres-casas-b26162382/"
    },
    {
      name: "Juan Esteban Martínez",
      role: "Producto",
      image: "/juan-esteban.jpg",
      linkedinUrl: "https://www.linkedin.com/in/juan-esteban-mart%C3%ADnez-arias-08782a386/"
    },
    {
      name: "Manuel Mejía",
      role: "Plataforma",
      image: "/Manuel.jpeg",
      linkedinUrl: "https://www.linkedin.com/in/manuel-mej%C3%ADa-/"
    },
    {
      name: "Joseph Gaitán",
      role: "Operaciones",
      image: "/Joseph.jpeg",
      linkedinUrl: "https://www.linkedin.com/in/joseph-gaitan-mustafa-6339103a9/"
    },
    {
      name: "Daniel Rincón",
      role: "Ingeniería",
      image: "/Daniel.jpeg",
      linkedinUrl: "https://www.linkedin.com/in/daniel-andr%C3%A9s-rinc%C3%B3n-rodriguez-412580382/"
    }
  ]
};
