function Projects() {
  const projetos = [
    { id: 1, nome: "Projeto 1", descricao: "Descrição do projeto 1" },
    { id: 2, nome: "Projeto 2", descricao: "Descrição do projeto 2" }
  ];

  return (
    <section>
      <h2>Meus Projetos</h2>

      {projetos.map((p) => (
        <div key={p.id}>
          <h3>{p.nome}</h3>
          <p>{p.descricao}</p>
        </div>
      ))}
    </section>
  );
}

export default Projects;