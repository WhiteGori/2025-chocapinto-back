// prisma/seed.js (CommonJS, self-contained with data arrays)
const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');
const prisma = new PrismaClient();

// === Data arrays extracted from export.sql ===
const UserData = [
  { col1: 2, col2: "belen", col3: "1234", col4: "reader", col5: null },
  { col1: 3, col2: "belen2", col3: "1234", col4: "reader", col5: null },
  { col1: 4, col2: "juan", col3: "12345", col4: "reader", col5: null },
  { col1: 5, col2: "pedrito", col3: "1234", col4: "reader", col5: null },
  { col1: 6, col2: "juanpedro", col3: "1234", col4: "reader", col5: null },
  { col1: 7, col2: "belenbarrionuevo", col3: "landito", col4: "reader", col5: null },
  { col1: 8, col2: "pedro23", col3: "12345678A", col4: "reader", col5: null },
  { col1: 9, col2: "asdada", col3: "12345678A", col4: "reader", col5: null },
  { col1: 10, col2: "asdsd", col3: "12345678A", col4: "reader", col5: "asdada@gmial.com" },
  { col1: 11, col2: "juancito123", col3: "1234567A", col4: "reader", col5: "juanisantamaria33@gmail.com" },
  { col1: 12, col2: "aksdlkamnd", col3: "12345678A", col4: "reader", col5: "ansda@asda" },
  { col1: 13, col2: "sfdfsafa", col3: "12345678A", col4: "reader", col5: "dsfsfq@asdfad" },
  { col1: 14, col2: "pedro23asdsa", col3: "12345678A", col4: "reader", col5: "asdsaa@adsa" },
  { col1: 16, col2: "belensita", col3: "Hola1234", col4: "reader", col5: "belen123@gmail.com" },
  { col1: 17, col2: "belensita07", col3: "$2b$10$LvcIBNnGSrXB3ia690qW0e54C8Jnw6Ztj8Nf27G0NIbFre5cMJnym", col4: "reader", col5: "bb07@gmail.com" },
  { col1: 19, col2: "miguelitoborja", col3: "$2b$10$WnAs3gE1EU0vhOdj8gBf8.rmLkGuaLmgRbM7ACozK.aAfYeCSH4Ci", col4: "reader", col5: "miguelitoborja@gmail.com" },
  { col1: 20, col2: "UsuarioPrueba123456", col3: "$2b$10$DFF9IEkmgZndyI4Y7d.qm.1S4xrTWsP1e5gOGc0Pt0pzYIuzqRhFa", col4: "reader", col5: "juanmblancog@gmail.com" }
];
const CategoriaData = [
  { id: 2, nombre: "Ficción" },
  { id: 3, nombre: "No Ficción" },
  { id: 4, nombre: "Ciencia Ficción" },
  { id: 5, nombre: "Fantasía" },
  { id: 6, nombre: "Ensayo" },
  { id: 7, nombre: "Juegos" },
  { id: 8, nombre: "Messi" },
  { id: 9, nombre: "Bibliografia" }
];
const BookData = [
  { col1: 1, col2: "Cien años de soledad", col3: "Gabriel García Márquez", col4: null, col5: null },
  { col1: 2, col2: "Don Quijote de la Mancha", col3: "Miguel de Cervantes Saavedra", col4: null, col5: null },
  { col1: 3, col2: "La sombra del viento", col3: "Carlos Ruiz Zafón", col4: null, col5: null },
  { col1: 4, col2: "Rayuela", col3: "Julio Cortázar", col4: null, col5: null },
  { col1: 5, col2: "Ficciones", col3: "Jorge Luis Borges", col4: null, col5: null },
  { col1: 6, col2: "Como agua para chocolate", col3: "Laura Esquivel", col4: null, col5: null },
  { col1: 15, col2: "Don Quijote", col3: "Cervantes", col4: null, col5: null },
  { col1: 27, col2: "Inside the World of Harry Potter", col3: "Christopher E. Bell", col4: null, col5: "http://books.google.com/books/content?id=j_p1DwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api" },
  { col1: 30, col2: "Cien años de soledad", col3: "Gabriel García Márquez", col4: null, col5: null },
  { col1: 31, col2: "Don Quijote de la Mancha", col3: "Miguel de Cervantes Saavedra", col4: null, col5: null },
  { col1: 32, col2: "La sombra del viento", col3: "Carlos Ruiz Zafón", col4: null, col5: null },
  { col1: 33, col2: "Rayuela", col3: "Julio Cortázar", col4: null, col5: null },
  { col1: 34, col2: "Ficciones", col3: "Jorge Luis Borges", col4: null, col5: null },
  { col1: 35, col2: "Como agua para chocolate", col3: "Laura Esquivel", col4: null, col5: null },
  { col1: 36, col2: "Sin título", col3: "Autor desconocido", col4: null, col5: "http://books.google.com/books/content?id=WDP_EAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api" },
  { col1: 37, col2: "Messi, el genio completo", col3: "Ariel Senosiain", col4: null, col5: "http://books.google.com/books/content?id=hgNcEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api" },
  { col1: 38, col2: "Messi", col3: "Leonardo Faccio", col4: null, col5: "http://books.google.com/books/content?id=EPh-QUsmsg4C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api" },
  { col1: 39, col2: "Socorro (pero me dicen Coco)", col3: "Juana Inés Dehesa", col4: null, col5: "http://books.google.com/books/content?id=PsiLDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api" },
  { col1: 40, col2: "Autos Sacramentales Alegoricos, Y Historiales", col3: "Pedro Calderón de la Barca", col4: null, col5: "http://books.google.com/books/content?id=dUREAAAAcAAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api" },
  { col1: 41, col2: "Medidas de riesgo, características y técnicas de medición. Una aplicación del VaR y el ES a la tasa interbancaria de Colombia", col3: "Autor desconocido", col4: null, col5: "http://books.google.com/books/content?id=W1YaFSC0QnMC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api" },
  { col1: 43, col2: "Minecraft 2022 Guía completa: trucos, secretos y construcciones", col3: "José María Gomez Salamanca", col4: null, col5: "http://books.google.com/books/content?id=9824EAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api" },
  { col1: 44, col2: "Lacan y lo político", col3: "Yannis Stavrakakis", col4: null, col5: "http://books.google.com/books/content?id=iLWOHmGIuMoC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api" },
  { col1: 45, col2: "Fangio", col3: "Juan Manuel Fangio, Roberto Carozzo", col4: null, col5: "http://books.google.com/books/content?id=A5gNAAAAYAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api" }
];
const ClubData = [
  { col1: 5, col2: "Clásicos", col3: "Club de lectura para fanáticos del género clásico", col4: 2, col5: null },
  { col1: 6, col2: "Fantasía", col3: "Club de lectura para los fanáticos del género fantasía", col4: 2, col5: null },
  { col1: 7, col2: "Terror", col3: "Club de lectura para los fanáticos del género de terror", col4: 2, col5: null },
  { col1: 8, col2: "Ciencia Ficción", col3: "Club de lectura para los fanáticos el género de Ciencia Ficción", col4: 4, col5: null },
  { col1: 9, col2: "Poesía", col3: "Club de lectura para fanáticos del género de poesía", col4: 4, col5: null },
  { col1: 11, col2: "MESSISTA", col3: "Amamos a Messi", col4: 4, col5: null },
  { col1: 12, col2: "Futbol", col3: "Futbol", col4: 4, col5: null },
  { col1: 13, col2: "Club prueba 123", col3: "as", col4: 4, col5: null },
  { col1: 14, col2: "asdad", col3: "asdadda", col4: 4, col5: null },
  { col1: 15, col2: "river", col3: "todo debate", col4: 4, col5: "https://img.lovepik.com/png/20231109/book-cartoon-illustration-school-start-reading-reading-book_539915_wh860.png" },
  { col1: 17, col2: "fulbo", col3: "asdasld", col4: 4, col5: "https://tntsports.com.ar/__export/1734026815685/sites/tntsports/img/2024/12/12/river.png_1732071473.png" },
  { col1: 22, col2: "Fans de formula 1", col3: "Historia de formula 1", col4: 19, col5: "https://img.lovepik.com/png/20231109/book-cartoon-illustration-school-start-reading-reading-book_539915_wh860.png" }
];
const ClubSolicitudData = [
  { id: 1, clubId: 11, userId: 2, estado: "aceptada", createdAt: 1758927623999 },
  { id: 2, clubId: 11, userId: 2, estado: "aceptada", createdAt: 1758933210468 },
  { id: 3, clubId: 17, userId: 19, estado: "pendiente", createdAt: 1759328923962 },
  { id: 4, clubId: 6, userId: 20, estado: "pendiente", createdAt: 1759346603780 }
];
const CommentData = [
  { id: 1, content: "hola", createdAt: 1759262916909, userId: 4, bookId: 36, clubId: 11 },
  { id: 4, content: "Es muy crack el tipo", createdAt: 1759329047686, userId: 19, bookId: 45, clubId: 22 }
];
const _prisma_migrationsData = [
  { id: "b4e44f5b-527c-4174-9f92-37a4f043a85e", checksum: "b8f5a71ac2090dc32062022b683ce972b523174001481e70747b5ee8c807a4c1", finished_at: 1757772340763, migration_name: "20250913140540_init", logs: null, rolled_back_at: null, started_at: 1757772340749, applied_steps_count: 1 },
  { id: "f79d9f14-b366-454f-b409-63ba681b25bf", checksum: "1f967c3bf537df78b7fe48166042a5a39ca4fece516154b4568d74cdf5c2680d", finished_at: 1757778830641, migration_name: "20250913155350_sda", logs: null, rolled_back_at: null, started_at: 1757778830607, applied_steps_count: 1 },
  { id: "7dd43858-1127-4007-a6aa-ec2ffce7a48b", checksum: "f23fc6aad7946cb9f173eea81234407b62a59d48f7ff3945ed513ed50a078c28", finished_at: 1757779624211, migration_name: "20250913160704_asda", logs: null, rolled_back_at: null, started_at: 1757779624185, applied_steps_count: 1 },
  { id: "da8f478f-6804-4a36-b37b-c3cbfe7090bd", checksum: "9e9d40f0fa25de85981b0f19a699b48c941ecf9f3de4af98eb7176bf6bf30376", finished_at: 1757976233758, migration_name: "20250915224353_add_book_model", logs: null, rolled_back_at: null, started_at: 1757976233695, applied_steps_count: 1 },
  { id: "4e8256f3-13fe-493e-bb83-20fda11a7e11", checksum: "22ff90ec724427047ca457c3d2435f3444ecdad9598ac947b9fbf2cbe908560e", finished_at: 1758307296956, migration_name: "20250919184136_email", logs: null, rolled_back_at: null, started_at: 1758307296935, applied_steps_count: 1 },
  { id: "7fdd9040-9c02-4e92-87f6-ef4e18b49582", checksum: "6ffed62d95de01289a5d4f917f56446dfbf9da100014ed5e550368cfcead7c85", finished_at: 1758923107580, migration_name: "20250926214507_s", logs: null, rolled_back_at: null, started_at: 1758923107560, applied_steps_count: 1 },
  { id: "2cc33a8b-44ff-49c8-91de-b7c9ca08a4e5", checksum: "066fb716fa18e62ffca269e3eaf1fb59d6d9fd4d8391938f8c5ffecee9d4c457", finished_at: 1758926097322, migration_name: "20250926223457_sd", logs: null, rolled_back_at: null, started_at: 1758926097307, applied_steps_count: 1 },
  { id: "93a52416-651e-4c0f-a497-a661ebba44cf", checksum: "59e8fe88d9234683ab467fa69cb1a13178033070cabf0463f49f5d85b7c080c4", finished_at: 1759005001639, migration_name: "20250927203001_asd", logs: null, rolled_back_at: null, started_at: 1759005001600, applied_steps_count: 1 },
  { id: "e376da63-3969-4bc5-9a25-3c550ca747af", checksum: "14181c197a256c97e010075e09c3612940e49f5a60a1b6da9f2c5754d125b38d", finished_at: 1759239892633, migration_name: "20250930134452_sds", logs: null, rolled_back_at: null, started_at: 1759239892618, applied_steps_count: 1 },
  { id: "1c745fea-b675-4779-be86-53179ff941f1", checksum: "cbd6e952c8b97114e0006fae1492f6918558bc04b1fb02c6b36c7d1217a6c232", finished_at: 1759269220835, migration_name: "20250930215340_asdk", logs: null, rolled_back_at: null, started_at: 1759269220799, applied_steps_count: 1 }
];
const _ClubMembersData = [
  { A: 6, B: 7 },
  { A: 11, B: 4 },
  { A: 12, B: 4 },
  { A: 8, B: 2 },
  { A: 7, B: 2 },
  { A: 13, B: 4 },
  { A: 7, B: 4 },
  { A: 14, B: 4 },
  { A: 15, B: 4 },
  { A: 17, B: 4 },
  { A: 22, B: 19 }
];
const _ClubBooksData = [
  { A: 15, B: 8 },
  { A: 27, B: 12 },
  { A: 36, B: 11 },
  { A: 37, B: 11 },
  { A: 38, B: 11 },
  { A: 39, B: 11 },
  { A: 40, B: 11 },
  { A: 41, B: 11 },
  { A: 43, B: 11 },
  { A: 44, B: 11 },
  { A: 45, B: 22 }
];
const _BookCategoriasData = [
  { A: 36, B: 3 },
  { A: 37, B: 4 },
  { A: 38, B: 5 },
  { A: 39, B: 3 },
  { A: 40, B: 6 },
  { A: 41, B: 2 },
  { A: 41, B: 3 },
  { A: 43, B: 7 },
  { A: 44, B: 6 },
  { A: 44, B: 7 },
  { A: 45, B: 9 }
];

// === Helpers ===
function isEpochLike(n) {
  return typeof n === 'number' && n >= 1500000000 && n <= 3000000000;
}
function toDateMaybe(v) {
  if (v == null) return v;
  if (typeof v === 'number') return isEpochLike(v) ? new Date(v*1000) : new Date(v);
  return v;
}
async function hashIfNeeded(pw) {
  if (!pw) return pw;
  if (typeof pw === 'string' && pw.startsWith('$2')) return pw; // already bcrypt
  return bcrypt.hash(String(pw), 10);
}

// === Column mappers (for legacy col1/col2...) ===
function mapUser(o) {
  if (o.id !== undefined || o.username !== undefined) return o;
  return { id: Number(o.col1), username: o.col2, password: o.col3, role: o.col4, email: o.col5 ?? null };
}
function mapCategoria(o) {
  if (o.id !== undefined || o.nombre !== undefined) return o;
  return { id: Number(o.col1), nombre: o.col2 };
}
function mapBook(o) {
  if (o.id !== undefined || o.title !== undefined) return o;
  return { id: Number(o.col1), title: o.col2, author: o.col3 ?? null, id_api: o.col4 != null ? Number(o.col4) : null, portada: o.col5 ?? null };
}
function mapClub(o) {
  if (o.id !== undefined || o.name !== undefined) return o;
  return { id: Number(o.col1), name: o.col2, description: o.col3 ?? null, id_owner: o.col4 != null ? Number(o.col4) : null, imagen: o.col5 ?? null };
}
function mapClubSolicitud(o) {
  if (o.id !== undefined || o.clubId !== undefined) return o;
  return { id: Number(o.col1), clubId: o.col2 != null ? Number(o.col2) : null, userId: o.col3 != null ? Number(o.col3) : null, estado: o.col4 ?? null, createdAt: toDateMaybe(o.col5) };
}
function mapComment(o) {
  if (o.id !== undefined || o.content !== undefined) return o;
  return { id: Number(o.col1), content: o.col2 ?? null, userId: o.col3 != null ? Number(o.col3) : null, clubId: o.col4 != null ? Number(o.col4) : null, createdAt: toDateMaybe(o.col5) };
}

async function main() {
  // 1) Users
  for (const raw of (typeof UserData!=='undefined'?UserData:[])) {
    const u0 = mapUser({ ...raw });
    u0.password = await hashIfNeeded(u0.password);
    const where = u0.id!=null ? { id: Number(u0.id) } : (u0.username ? { username: u0.username } : (u0.email ? { email: u0.email } : null));
    if (where) {
      await prisma.user.upsert({ where, update: u0, create: u0 });
    } else {
      await prisma.user.create({ data: u0 });
    }
  }

  // 2) Categoria
  if (prisma.categoria && typeof CategoriaData!=='undefined') {
    for (const raw of CategoriaData) {
      const c0 = mapCategoria({ ...raw });
      const where = c0.id!=null ? { id: Number(c0.id) } : { nombre: c0.nombre };
      await prisma.categoria.upsert({ where, update: c0, create: c0 });
    }
  }

  // 3) Books
  for (const raw of (typeof BookData!=='undefined'?BookData:[])) {
    const b0 = mapBook({ ...raw });
    const where = b0.id!=null ? { id: Number(b0.id) } : { title: b0.title };
    await prisma.book.upsert({ where, update: b0, create: b0 });
  }

  // 4) Clubs
  for (const raw of (typeof ClubData!=='undefined'?ClubData:[])) {
    const c0 = mapClub({ ...raw });
    const where = c0.id!=null ? { id: Number(c0.id) } : { name: c0.name };
    await prisma.club.upsert({ where, update: c0, create: c0 });
  }

  // 5) ClubSolicitud
  if (prisma.clubSolicitud && typeof ClubSolicitudData!=='undefined') {
    for (const raw of ClubSolicitudData) {
      const s0 = mapClubSolicitud({ ...raw });
      if ('createdAt' in s0) s0.createdAt = toDateMaybe(s0.createdAt);
      const where = s0.id != null ? { id: Number(s0.id) } : { id: -1 };
      await prisma.clubSolicitud.upsert({ where, update: s0, create: s0 });
    }
  }

  // 6) Comment (si existe)
  if (prisma.comment && typeof CommentData!=='undefined') {
    for (const raw of CommentData) {
      const cm0 = mapComment({ ...raw });
      if ('createdAt' in cm0) cm0.createdAt = toDateMaybe(cm0.createdAt);
      const where = cm0.id != null ? { id: Number(cm0.id) } : { id: -1 };
      await prisma.comment.upsert({ where, update: cm0, create: cm0 });
    }
  }

  // 7) Pivots -> relaciones
  if (typeof _ClubMembersData!=='undefined') {
    for (const r of _ClubMembersData) {
      const A = r.A ?? r.col1; // Club.id
      const B = r.B ?? r.col2; // User.id
      if (A!=null && B!=null) {
        await prisma.club.update({
          where: { id: Number(A) },
          data: { members: { connect: { id: Number(B) } } },
        });
      }
    }
  }

  if (typeof _ClubBooksData!=='undefined') {
    for (const r of _ClubBooksData) {
      const A = r.A ?? r.col1; // Book.id
      const B = r.B ?? r.col2; // Club.id
      if (A!=null && B!=null) {
        await prisma.club.update({
          where: { id: Number(B) },
          data: { readBooks: { connect: { id: Number(A) } } },
        });
      }
    }
  }

  if (prisma.categoria && typeof _BookCategoriasData!=='undefined') {
    for (const r of _BookCategoriasData) {
      const A = r.A ?? r.col1; // Book.id
      const B = r.B ?? r.col2; // Categoria.id
      if (A!=null && B!=null) {
        await prisma.book.update({
          where: { id: Number(A) },
          data: { categorias: { connect: { id: Number(B) } } },
        });
      }
    }
  }
}

main()
  .then(async () => { await prisma.$disconnect(); console.log('✅ Seed completed'); })
  .catch(async (e) => { console.error('❌ Seed error:', e); await prisma.$disconnect(); process.exit(1); });
