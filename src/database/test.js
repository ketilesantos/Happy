const Database = require("./db");
const saveOrphanage = require("./saveOrphanage");

Database.then(async (db) => {
  /*await saveOrphanage(db, {
    lat: "-27.222633",
    lng: "-49.6555874",
    name: "Lar dos meninos",
    about:
      "Presta assistencia a crianças de 0 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social",
    whatsapp:"985642033",
    images: [
      "https://images.unsplash.com/photo-1562790519-2e040476a0c7?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",

      "https://images.unsplash.com/photo-1597095536985-21c85eb8c65e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
    ].toString(),
    instructions:
      "Venha como se sentir a vontade e traga muito amor e paciencia para dar",
    opening_hours: "Horário de visitas Das 18h até 8h",
    open_on_weekends: "0",
  });*/

  // consultando todos os dados da tabela
  const selectedOrphanages = await db.all(`SELECT * FROM orphanages`);
  console.log(selectedOrphanages);

  const orphanage = await db.all(`SELECT * FROM orphanages WHERE id ="3"`);
  console.log(orphanage);
  
  //Deletar dados da tabelas
 // console.log(await db.all(`DELETE FROM orphanages WHERE id = "3"`))
});
