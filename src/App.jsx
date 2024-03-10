import { lazy, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import MainLoader from "./components/MainLoader";
const Header = lazy(() => import("./components/Header"));
const Home = lazy(() => import("./pages/Home"));
const Catalog = lazy(() => import("./pages/Catalog"));
const Favorites = lazy(() => import("./pages/Favorites"));

export const App = () => {
  return (
    <div className="max-w-[1440px] mx-auto">
      <Suspense fallback={<MainLoader />}>
        <Header />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="*" element={<Navigate to="/" replace={true} />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
