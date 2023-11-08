const albums = [
  {
    nombre: "Album1",
    tapaDeAlbum:"sui generis.jpg",
    canciones: [
      { nombre: "Canción 1", duracion: "3:30",reproduciones: "400" ,album:"Album1"},
      { nombre: "Canción 2", duracion: "4:15",reproduciones: "550" ,album:"Album1"},
      { nombre: "Canción 3", duracion: "2:55",reproduciones: "600" ,album:"Album1"}
    ]
  },
  {
    nombre: "Album2",
    tapaDeAlbum:"charly.jpg",
    canciones: [
      { nombre: "Canción 1", duracion: "3:10",reproduciones: "700" ,album:"Album2" },
      { nombre: "Canción 2", duracion: "4:45",reproduciones: "8500",album:"Album2" },
      { nombre: "Canción 3", duracion: "2:30",reproduciones: "333" ,album:"Album2"}
    ]
  },
  {
    nombre: "Album3",
    tapaDeAlbum:"fito.jpg",
    canciones: [
      { nombre: "Canción 1", duracion: "3:30",reproduciones: "111" ,album:"Album3"},
      { nombre: "Canción 2", duracion: "4:15",reproduciones: "252" ,album:"Album3" },
      { nombre: "Canción 3", duracion: "2:55",reproduciones: "400" ,album:"Album3"}
    ]
  },
  {
    nombre: "Album4",
    tapaDeAlbum:"spinetta.jpg",
    canciones: [
      { nombre: "Canción 1", duracion: "3:30",reproduciones: "987",album:"Album4" },
      { nombre: "Canción 2", duracion: "4:15",reproduciones: "454",album:"Album4" },
      { nombre: "Canción 3", duracion: "2:55",reproduciones: "450",album:"Album4" }
    ]
  },
  {
    nombre: "Album5",
    tapaDeAlbum:"intoxicados.jpg",
    canciones: [
      { nombre: "Canción 1", duracion: "3:30",reproduciones: "445",album:"Album5" },
      { nombre: "Canción 2", duracion: "4:15",reproduciones: "434",album:"Album5" },
      { nombre: "Canción 3", duracion: "2:55",reproduciones: "434",album:"Album5" }
    ]
  },
  {
    nombre: "Album6",
    tapaDeAlbum:"airbag.jpg",
    canciones: [
      { nombre: "Canción 1", duracion: "3:30",reproduciones: "410",album:"Album6" },
      { nombre: "Canción 2", duracion: "4:15",reproduciones: "900",album:"Album6" },
      { nombre: "Canción 3", duracion: "2:55",reproduciones: "860",album:"Album6" }
    ]
  },
];
localStorage.setItem("albums",JSON.stringify(albums));

