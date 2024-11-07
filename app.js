const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

app.use(bodyParser.json());

let rendezVous = [
  {
    id: 1,
    date: "01/02/2024",
    heure: "14h30",
    spécialiste: "Johan",
    service: "Coiffure",
  },
  {
    id: 2,
    date: "23/05/2024",
    heure: "12h00",
    spécialiste: "Johan",
    service: "Massage",
  },
  {
    id: 3,
    date: "12/01/2024",
    heure: "13h00",
    spécialiste: null,
    service: "Coloration",
  },
];

let clients = [
  {
    id: 1,
    prénom: "Johan",
    nom: "Losade",
    email: "JohanLosade@gmail.com",
    motDePasse: "johan123",
  },
  {
    id: 2,
    prénom: "Lucie",
    nom: "Pronn",
    email: "LuciePronn@gmail.com",
    motDePasse: "lucie123",
  },
  {
    id: 3,
    prénom: "Job",
    nom: "Kill",
    email: "JobKill@gmail.com",
    motDePasse: "job123",
  },
];

let specialistes = [
  {
    id: 1,
    prénom: "Hara",
    nom: "Sumi",
    description: "Première description",
    photo: "image.png",
  },
  {
    id: 2,
    prénom: "Paul",
    nom: "Carmena",
    description: "Deuxième description",
    photo: "image.png",
  },
  {
    id: 3,
    prénom: "Sinai",
    nom: "Loucia",
    description: "Troisième description",
    photo: "image.png",
  },
];

app.get("/rdvs", (req, res) => {
  const rendezVousReferences = rendezVous.map((rdv) => `/rdv/${rdv.id}`);
  res.json(rendezVousReferences);
});

app.get("/rdv/:id", (req, res) => {
  const rdvId = parseInt(req.params.id);
  const rdv = rendezVous.find((rdv) => rdv.id === rdvId);

  if (rdv) {
    res.json(rdv);
  } else {
    res.status(404).json({ error: "Rendez-vous non trouvé" });
  }
});

app.post("/rdv", (req, res) => {
  const newRendezVous = {
    id: rendezVous.length + 1,
    date: req.body.date,
    heure: req.body.heure,
    spécialiste: req.body.spécialiste,
    service: req.body.service,
  };
  rendezVous.push(newRendezVous);
  res
    .status(201)
    .json({ message: "Rendez-vous ajouté avec succès", rdv: newRendezVous });
});

app.put("/rdv/:id", (req, res) => {
  const rdvId = parseInt(req.params.id);
  const rdv = rendezVous.find((rdv) => rdv.id === rdvId);
  if (rdv) {
    rdv.description = req.body.description;
    rdv.date = req.body.date;
    rdv.heure = req.body.heure;
    rdv.spécialiste = req.body.spécialiste;
    rdv.service = req.body.service;
    res.json({ message: "Rendez-vous mis à jour avec succès", rdv });
  } else {
    res.status(404).json({ error: "Rendez-vous non trouvé" });
  }
});

app.delete("/rdv/:id", (req, res) => {
  const rdvId = parseInt(req.params.id);
  rendezVous = rendezVous.filter((rdv) => rdv.id !== rdvId);
  res.json({ message: "Rendez-vous supprimé avec succès" });
});

//    ------------------------------------------------------------

app.get("/clients", (req, res) => {
  const clientReferences = clients.map((client) => `/client/${client.id}`);
  res.json(clientReferences);
});

app.get("/client/:id", (req, res) => {
  const clientId = parseInt(req.params.id);
  const client = clients.find((client) => client.id === clientId);

  if (client) {
    res.json(client);
  } else {
    res.status(404).json({ error: "Client non trouvé" });
  }
});

app.post("/clients", (req, res) => {
  const newClient = {
    id: clients.length + 1,
    prénom: req.body.prénom,
    nom: req.body.nom,
    email: req.body.email,
    motDePasse: req.body.motDePasse,
  };
  clients.push(newClient);
  res
    .status(201)
    .json({ message: "Client ajouté avec succès", client: newClient });
});

app.put("/client/:id", (req, res) => {
  const clientId = parseInt(req.params.id);
  const client = clients.find((client) => client.id === clientId);
  if (client) {
    client.prénom = req.body.prénom;
    client.nom = req.body.nom;
    client.email = req.body.email;
    client.motDePasse = req.body.motDePasse;
    res.json({ message: "Client modifié avec succès", client });
  } else {
    res.status(404).json({ error: "Client non trouvé" });
  }
});

app.delete("/client/:id", (req, res) => {
  const clientId = parseInt(req.params.id);
  clients = clients.filter((client) => client.id !== clientId);
  res.json({ message: "Client supprimé avec succès" });
});

// ----------------------------------------------------

app.get("/specialistes", (req, res) => {
  const specialisteReferences = specialistes.map(
    (specialiste) => `/specialiste/${specialiste.id}`
  );
  res.json(specialisteReferences);
});

app.get("/specialiste/:id", (req, res) => {
  const specialisteId = parseInt(req.params.id);
  const specialiste = specialistes.find(
    (specialiste) => specialiste.id === specialisteId
  );

  if (specialiste) {
    res.json(specialiste);
  } else {
    res.status(404).json({ error: "Spécialiste non trouvé" });
  }
});

app.put("/specialiste/:id", (req, res) => {
  const specialisteId = parseInt(req.params.id);
  const specialiste = specialistes.find(
    (specialiste) => specialiste.id === specialisteId
  );
  if (specialiste) {
    specialiste.prénom = req.body.prénom;
    specialiste.nom = req.body.nom;
    specialiste.description = req.body.description;
    specialiste.photo = req.body.photo;
    res.json({ message: "Spécialiste modifié avec succès", specialiste });
  } else {
    res.status(404).json({ error: "Spécialiste non trouvé" });
  }
});

app.listen(port, () => {
  console.log(`Serveur écoutant sur le port ${port}`);
});
