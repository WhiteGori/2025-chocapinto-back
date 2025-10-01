// Auto-generated seed from your SQLite dev.db
// Run with:  node prisma/seed.js
// Requires: DATABASE_URL pointing to your Postgres in Render

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const usersData = [
  {id: 2, username: `belen`, password: `1234`, role: `reader`, email: null},
  {id: 3, username: `belen2`, password: `1234`, role: `reader`, email: null},
  {id: 4, username: `juan`, password: `12345`, role: `reader`, email: null},
  {id: 5, username: `pedrito`, password: `1234`, role: `reader`, email: null},
  {id: 6, username: `juanpedro`, password: `1234`, role: `reader`, email: null},
  {id: 7, username: `belenbarrionuevo`, password: `landito`, role: `reader`, email: null},
  {id: 8, username: `pedro23`, password: `12345678A`, role: `reader`, email: null},
  {id: 9, username: `asdada`, password: `12345678A`, role: `reader`, email: null},
  {id: 10, username: `asdsd`, password: `12345678A`, role: `reader`, email: `asdada@gmial.com`},
  {id: 11, username: `juancito123`, password: `1234567A`, role: `reader`, email: `juanisantamaria33@gmail.com`},
  {id: 12, username: `aksdlkamnd`, password: `12345678A`, role: `reader`, email: `ansda@asda`},
  {id: 13, username: `sfdfsafa`, password: `12345678A`, role: `reader`, email: `dsfsfq@asdfad`},
  {id: 14, username: `pedro23asdsa`, password: `12345678A`, role: `reader`, email: `asdsaa@adsa`},
];
const booksData = [
  {id: 1, title: `Cien años de soledad`, author: `Gabriel García Márquez`, id_api: null, portada: null},
  {id: 2, title: `Don Quijote de la Mancha`, author: `Miguel de Cervantes Saavedra`, id_api: null, portada: null},
  {id: 3, title: `La sombra del viento`, author: `Carlos Ruiz Zafón`, id_api: null, portada: null},
  {id: 4, title: `Rayuela`, author: `Julio Cortázar`, id_api: null, portada: null},
  {id: 5, title: `Ficciones`, author: `Jorge Luis Borges`, id_api: null, portada: null},
  {id: 6, title: `Como agua para chocolate`, author: `Laura Esquivel`, id_api: null, portada: null},
  {id: 15, title: `Don Quijote`, author: `Cervantes`, id_api: null, portada: null},
  {id: 24, title: `asdas`, author: `MESSI`, id_api: null, portada: null},
  {id: 25, title: `Harry Potter y la piedra filosofal`, author: `J.K. Rowling`, id_api: null, portada: null},
  {id: 26, title: `Lionel Messi`, author: `David Machajewski`, id_api: null, portada: `http://books.google.com/books/content?id=qPCCDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api`},
  {id: 27, title: `Inside the World of Harry Potter`, author: `Christopher E. Bell`, id_api: null, portada: `http://books.google.com/books/content?id=j_p1DwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api`},
  {id: 28, title: `LA ENSEÑANZA Y ENTRENAMIENTO DEL FÚTBOL 7. Un juego de iniciación al fútbol 11`, author: `Rui Pacheco`, id_api: null, portada: `http://books.google.com/books/content?id=J5CE5p1NH40C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api`},
];
const clubsData = [
  {id: 5, name: `Clásicos`, description: `Club de lectura para fanáticos del género clásico`, id_owner: 2},
  {id: 6, name: `Fantasía`, description: `Club de lectura para los fanáticos del género fantasía`, id_owner: 2},
  {id: 7, name: `Terror`, description: `Club de lectura para los fanáticos del género de terror`, id_owner: 2},
  {id: 8, name: `Ciencia Ficción`, description: `Club de lectura para los fanáticos el género de Ciencia Ficción`, id_owner: 4},
  {id: 9, name: `Poesía`, description: `Club de lectura para fanáticos del género de poesía`, id_owner: 4},
  {id: 11, name: `MESSISTA`, description: `Amamos a Messi`, id_owner: 4},
  {id: 12, name: `Futbol`, description: `Futbol`, id_owner: 4},
  {id: 13, name: `Club prueba 123`, description: `as`, id_owner: 4},
  {id: 14, name: `asdad`, description: `asdadda`, id_owner: 4},
];
const clubMembersData = [
  {A: 6, B: 7},
  {A: 11, B: 4},
  {A: 12, B: 4},
  {A: 8, B: 2},
  {A: 7, B: 2},
  {A: 13, B: 4},
  {A: 7, B: 4},
  {A: 14, B: 4},
  {A: 11, B: 2},
];
const clubBooksData = [
  {A: 15, B: 8},
  {A: 24, B: 12},
  {A: 25, B: 11},
  {A: 26, B: 11},
  {A: 27, B: 12},
  {A: 28, B: 11},
];
const solicitudesData = [
  {id: 1, clubId: 11, userId: 2, estado: `aceptada`, createdAt: 1758927623999},
  {id: 2, clubId: 11, userId: 2, estado: `aceptada`, createdAt: 1758933210468},
];

async function main() {
  // Insertar categorías por defecto
  const categorias = [
    "Ficción",
    "No Ficción",
    "Ciencia Ficción",
    "Fantasía",
    "Ensayo"
  ];
  for (const nombre of categorias) {
    await prisma.categoria.upsert({
      where: { nombre },
      update: {},
      create: { nombre }
    });
  }

  await prisma.book.createMany({
    data: [
      { title: "Cien años de soledad", author: "Gabriel García Márquez" },
      { title: "Don Quijote de la Mancha", author: "Miguel de Cervantes Saavedra" },
      { title: "La sombra del viento", author: "Carlos Ruiz Zafón" },
      { title: "Rayuela", author: "Julio Cortázar" },
      { title: "Ficciones", author: "Jorge Luis Borges" },
      { title: "Como agua para chocolate", author: "Laura Esquivel" }
    ],
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
