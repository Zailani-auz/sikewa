
import React, { useMemo } from 'react';
import { HashRouter, Routes, Route, Navigate, Outlet, useLocation } from 'react-router-dom';
import { User, Kader, KeluargaODGJ, Terapi, CatatanMasalahKeluarga, TerapiMonitoring, UserRole, MateriItem } from './types';
import { useLocalStorage } from './hooks/useLocalStorage';
import AuthPage from './components/AuthPage';
import Sidebar from './components/Sidebar';
import DashboardPage from './components/DashboardPage';
import KaderPage from './components/KaderPage';
import KeluargaPage from './components/KeluargaPage';
import TerapiPage from './components/TerapiPage';
import MateriEdukasiPage from './components/MateriEdukasiPage';
import EvaluasiFormulirPage from './components/EvaluasiFormulirPage';
import LaporanPage from './components/LaporanPage';
import { INITIAL_MATERI_LINKS } from './constants';

const ProtectedRoute: React.FC<{ allowedRoles: UserRole[], user: User | null }> = ({ allowedRoles, user }) => {
  const location = useLocation();
  if (!user || !allowedRoles.includes(user.role)) {
    // Redirect them to the / page if they are logged in but trying to access a forbidden page
    // Or to login if not logged in (though App component already handles this)
    return <Navigate to="/" state={{ from: location }} replace />;
  }
  return <Outlet />;
};


const App: React.FC = () => {
  const [currentUser, setCurrentUser] = useLocalStorage<User | null>('currentUser', null);
  const [kaderList, setKaderList] = useLocalStorage<Kader[]>('kaderList', []);
  const [keluargaListAll, setKeluargaListAll] = useLocalStorage<KeluargaODGJ[]>('keluargaListAll', []); // Store all families
  const [terapiListAll, setTerapiListAll] = useLocalStorage<Terapi[]>('terapiListAll', []); // Store all therapies
  const [catatanKeluargaAll, setCatatanKeluargaAll] = useLocalStorage<CatatanMasalahKeluarga[]>('catatanKeluargaAll', []); // Store all notes
  const [terapiMonitoringAll, setTerapiMonitoringAll] = useLocalStorage<TerapiMonitoring[]>('terapiMonitoringAll', []);

  const [materiEdukasiList, setMateriEdukasiList] = useLocalStorage<MateriItem[]>('materiEdukasiList', () => INITIAL_MATERI_LINKS);

  const handleLogin = (user: User) => {
    setCurrentUser(user);
  };

  const handleLogout = () => {
    setCurrentUser(null);
  };

  // Filter data based on user role
  const {
    keluargaListForUser,
    terapiListForUser,
    catatanKeluargaForUser,
    terapiMonitoringForUser,
    linkedKeluargaId, // ID of the family linked to a KELUARGA_ODGJ user
  } = useMemo(() => {
    if (currentUser?.role === UserRole.KELUARGA_ODGJ) {
      const linkedFamily = keluargaListAll.find(k => k.userEmail === currentUser.email);
      if (linkedFamily) {
        return {
          keluargaListForUser: [linkedFamily],
          terapiListForUser: terapiListAll.filter(t => t.idKeluargaODGJ === linkedFamily.id),
          catatanKeluargaForUser: catatanKeluargaAll.filter(c => c.idKeluargaODGJ === linkedFamily.id),
          terapiMonitoringForUser: terapiMonitoringAll.filter(tm => tm.idKeluargaODGJ === linkedFamily.id),
          linkedKeluargaId: linkedFamily.id,
        };
      }
      // If no linked family, show empty lists for KELUARGA_ODGJ
      return { 
        keluargaListForUser: [], 
        terapiListForUser: [], 
        catatanKeluargaForUser: [],
        terapiMonitoringForUser: [],
        linkedKeluargaId: null,
      };
    }
    // For Kader and Terapis, show all data
    return { 
      keluargaListForUser: keluargaListAll, 
      terapiListForUser: terapiListAll, 
      catatanKeluargaForUser: catatanKeluargaAll,
      terapiMonitoringForUser: terapiMonitoringAll,
      linkedKeluargaId: null,
    };
  }, [currentUser, keluargaListAll, terapiListAll, catatanKeluargaAll, terapiMonitoringAll]);


  if (!currentUser) {
    return <AuthPage onLogin={handleLogin} />;
  }

  return (
    <HashRouter>
      <div className="flex h-screen">
        <Sidebar user={currentUser} onLogout={handleLogout} />
        <main className="flex-1 p-0 ml-64 bg-gray-100 overflow-y-auto">
          <Routes>
            <Route path="/" element={<DashboardPage currentUser={currentUser} kaderList={kaderList} keluargaList={keluargaListForUser} terapiList={terapiListForUser} />} />
            
            {/* Routes for Kader and Terapis */}
            <Route element={<ProtectedRoute allowedRoles={[UserRole.KADER, UserRole.TERAPIS]} user={currentUser} />}>
              <Route path="/kader" element={<KaderPage kaderList={kaderList} setKaderList={setKaderList} />} />
            </Route>

            {/* Routes for Terapis only */}
             <Route element={<ProtectedRoute allowedRoles={[UserRole.TERAPIS]} user={currentUser} />}>
              <Route path="/laporan" element={<LaporanPage kaderList={kaderList} keluargaList={keluargaListAll} terapiList={terapiListAll} />} />
            </Route>

            {/* Routes accessible by multiple roles with different views/permissions handled in component */}
            <Route path="/keluarga" element={
              <KeluargaPage 
                currentUser={currentUser}
                keluargaList={keluargaListForUser} 
                setKeluargaList={setKeluargaListAll} // Modifying all list
                kaderList={kaderList} 
              />} 
            />
            <Route path="/terapi" element={
              <TerapiPage 
                currentUser={currentUser}
                terapiList={terapiListForUser} 
                setTerapiList={setTerapiListAll} // Modifying all list
                keluargaList={keluargaListForUser} // Pass filtered list for selection relevant to user
                allKeluargaList={keluargaListAll} // Pass all for Terapis/Kader to select from
                terapiMonitoring={terapiMonitoringForUser} 
                setTerapiMonitoring={setTerapiMonitoringAll} // Modifying all list
                linkedKeluargaId={linkedKeluargaId}
              />} 
            />
            <Route path="/materi" element={
              <MateriEdukasiPage 
                currentUser={currentUser}
                materiList={materiEdukasiList}
                setMateriList={setMateriEdukasiList}
              />} 
            />
            <Route path="/evaluasi" element={
              <EvaluasiFormulirPage 
                currentUser={currentUser}
                catatanKeluarga={catatanKeluargaForUser} 
                setCatatanKeluarga={setCatatanKeluargaAll} // Modifying all list
                keluargaList={keluargaListForUser} // Pass filtered list for selection relevant to user
                allKeluargaList={keluargaListAll} // Pass all for Terapis/Kader to select from
                linkedKeluargaId={linkedKeluargaId}
              />} 
            />
            
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </main>
      </div>
    </HashRouter>
  );
};

export default App;
