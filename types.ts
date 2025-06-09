
export enum UserRole {
  KELUARGA_ODGJ = "Keluarga ODGJ",
  KADER = "Kader",
  TERAPIS = "Terapis",
}

export interface User {
  id: string;
  email: string;
  role: UserRole;
}

export interface Kader {
  id: string;
  nama: string;
  kontak: string; // Phone number or email
}

export interface KeluargaODGJ {
  id: string;
  namaKepalaKeluarga: string;
  namaODGJ: string;
  hubunganDenganODGJ: string;
  alamat: string;
  kontakKeluarga?: string;
  idKader?: string; // Link to Kader
  userEmail?: string; // Link to User account for Keluarga ODGJ role
}

export enum JenisTerapi {
  RELAKSASI_SPIRITUAL = "Relaksasi Spiritual",
  HIPNOSIS_LIMA_JARI = "Hipnosis Lima Jari",
  MUROTTAL_ALQURAN = "Murottal Al-Qur'an",
  KONSELING = "Konseling",
  EDUKASI_KELUARGA = "Edukasi Keluarga",
  LAINNYA = "Lainnya",
}

export interface Terapi {
  id: string;
  idKeluargaODGJ: string;
  namaTerapi: string; // Custom name or description
  jenisTerapi: JenisTerapi | string;
  tanggal: string; // YYYY-MM-DD
  waktu?: string; // HH:MM
  catatan?: string;
  dilaksanakanOleh?: string; // Nama Kader/Petugas
}

export interface CatatanMasalahKeluarga {
  id: string;
  idKeluargaODGJ: string;
  tanggal: string; // YYYY-MM-DD
  deskripsi: string;
}

// For therapy monitoring, e.g., marking days
export interface TerapiMonitoring {
  idKeluargaODGJ: string;
  bulanTahun: string; // YYYY-MM
  hariTerapi: number[]; // Array of days in the month therapy was done [1, 5, 10]
}

export interface MateriItem {
  id: string;
  label: string;
  url: string;
  sections?: string[];
  // Add a category or type if needed for better organization, e.g. 'video', 'modul', 'booklet'
  type?: 'video' | 'modul' | 'booklet' | 'lainnya';
}
