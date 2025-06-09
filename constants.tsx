
import React from 'react';
import { MateriItem } from './types';

export const APP_NAME = "MONITORING & TERAPI ODGJ";

// This will serve as the initial data if localStorage is empty.
// The app will manage materi edukasi in localStorage.
export const INITIAL_MATERI_LINKS: MateriItem[] = [
  {
    id: "video_hipnosis_murottal",
    label: "Video: Terapi Hipnosis Lima Jari & Murottal Al-Qur'an",
    url: "https://drive.google.com/file/d/1RqksmPI4jMWz7kI4CAw9OwDqaEZhMq5S/view?usp=drivesdk",
    type: "video",
  },
  {
    id: "modul_relaksasi_spiritual",
    label: "Modul: Terapi Relaksasi Spiritual",
    url: "https://drive.google.com/file/d/12e254Yp-9eDPNCZapjqbAlg7OufgiRJS/view?usp=sharing",
    sections: [
      "Pertemuan 1: Identifikasi Masalah Keluarga",
      "Pertemuan 2: Manajemen Stress (Pelaksanaan Relaksasi Spiritual)",
      "Pertemuan 3: Pemberdayaan Kader Kesehatan Jiwa",
    ],
    type: "modul",
  },
  {
    id: "booklet_relaksasi_spiritual",
    label: "Booklet: Relaksasi Spiritual & Peran Keluarga",
    url: "https://drive.google.com/file/d/1OinlA6lKTOsgG3wmHtAqAINaM3npoHnB/view?usp=sharing",
    sections: [
      "Bagian 1 : Konsep Relaksasi Spiritual",
      "Bagian 2 : Keluarga sebagai Caregiver",
      "Bagian 3 : Konsep Stress",
      "Bagian 4 : Kualitas Hidup Keluarga",
      "Bagian 5 : Terapi Hipnosis 5 Jari",
      "Bagian 6 : Terapi Spiritual Murottal Al-Qur'an",
      "Bagian 7 : Sikap Keluarga",
    ],
    type: "booklet",
  },
];


export const GOOGLE_FORM_LINKS = {
  TINGKAT_STRESS_KELUARGA: {
    label: "Form: Tingkat Stress Keluarga",
    url: "https://forms.gle/BoNJNo63mSnKepS47",
  },
  KUALITAS_HIDUP_KELUARGA: {
    label: "Form: Kualitas Hidup Keluarga",
    url: "https://forms.gle/rx8gPqLvMMuaBje57",
  },
  SIKAP_KELUARGA: {
    label: "Form: Sikap Keluarga",
    url: "https://forms.gle/msgvVxY6qBJVb5jq7",
  },
  KEKAMBUHAN_ODGJ: {
    label: "Form: Kekambuhan ODGJ",
    url: "https://forms.gle/UT8E2YrjhBbgzoScA",
  },
  KESEJAHTERAAN_SPIRITUAL_KELUARGA: {
    label: "Form: Kesejahteraan Spiritual Keluarga",
    url: "https://forms.gle/nU92tC92HLomzhyZ6",
  },
  MASALAH_KELUARGA_MERAWAT_ODGJ: {
    label: "Form: Identifikasi Masalah Keluarga & Cara Merawat ODGJ",
    url: "https://forms.gle/vKUtAUpg7rmuG1xn9",
  },
};

// SVG Icons
export const HomeIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h7.5" />
  </svg>
);

export const UsersIcon = (props: React.SVGProps<SVGSVGElement>) => ( // Kader Icon
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
  </svg>
);

export const UserGroupIcon = (props: React.SVGProps<SVGSVGElement>) => ( // Keluarga ODGJ Icon
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-3.741-5.602M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 4.5h.008v.008H12v-.008zM12 15a2.25 2.25 0 00-2.25 2.25V18h4.5v-.75A2.25 2.25 0 0012 15zm0-3.75a2.25 2.25 0 00-2.25 2.25V15h4.5v-1.5A2.25 2.25 0 0012 11.25zM12 3.75a3 3 0 00-3 3v1.5a3 3 0 006 0v-1.5a3 3 0 00-3-3z" />
  </svg>
);

export const HeartIcon = (props: React.SVGProps<SVGSVGElement>) => ( // Therapy icon
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
  </svg>
);

export const BookOpenIcon = (props: React.SVGProps<SVGSVGElement>) => ( // Materi Edukasi
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
  </svg>
);

export const DocumentTextIcon = (props: React.SVGProps<SVGSVGElement>) => ( // Evaluasi & Laporan
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
  </svg>
);

export const CogIcon = (props: React.SVGProps<SVGSVGElement>) => ( // Settings or other
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
  </svg>
);

export const PlusIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
  </svg>
);

export const PencilIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
  </svg>
);

export const TrashIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12.56 0c1.153 0 2.24.032 3.22.096m-3.22-.096L3.75 5.79m0 0c0-.02.017-.038.037-.055A2.25 2.25 0 015.25 4.5h13.5A2.25 2.25 0 0121 6.23v.003" />
  </svg>
);

export const ExternalLinkIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
  </svg>
);

export const CalendarDaysIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-3.75h.008v.008H12v-.008z" />
  </svg>
);

export const LogoutIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
  </svg>
);

export const AISuggestionIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.324h5.372a.562.562 0 01.329.986l-4.116 2.97a.563.563 0 00-.182.635l1.578 4.735a.563.563 0 01-.84.622l-4.138-2.908a.563.563 0 00-.656 0l-4.138 2.908a.563.563 0 01-.84-.622l1.578-4.735a.563.563 0 00-.182-.635L2.052 9.92a.562.562 0 01.329-.986h5.372a.563.563 0 00.475-.324L11.48 3.5z" />
  </svg>
);

export const CheckCircleIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

export const XCircleIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);
