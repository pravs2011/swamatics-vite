import React from "react";
import { Routes, Route } from "react-router-dom";

import Unauthorised from "../../pages/404/Unauthorised";

//Import All Components
import * as Pages from "./Pages";

const OptimizedRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Pages.HomePage />} />
      <Route path="/about" element={<Pages.AboutPage />} />
      <Route path="/welcome-from-ceo" element={<Pages.WelcomeFromCeo />} />
      <Route path="/history" element={<Pages.HistoryPage />} />
      <Route path="/mission-and-vision" element={<Pages.MissionVision />} />
      <Route path="/introduction" element={<Pages.QualityTesting />} />
      <Route path="/certificates" element={<Pages.CetificatesPage />} />
      <Route path="/engineering-design" element={<Pages.EngineeringDesign />} />
      <Route path="/health-and-safety" element={<Pages.HealthSafety />} />
      <Route path="/plants" element={<Pages.PlantsPage />} />
      <Route
        path="/rotary-piston-blowers"
        element={<Pages.RotaryPistonBlowers />}
      />
      <Route
        path="/process-gas-blowers"
        element={<Pages.ProcessGasBlowers />}
      />
      <Route path="/turbo-blowers" element={<Pages.TurboBlowers />} />
      <Route
        path="/super-helical-hybrid-blower"
        element={<Pages.HybridHelicalBlowers />}
      />
      <Route path="/truck-blowers" element={<Pages.TruckBlowers />} />
      <Route
        path="/bio-gas-blowers-compressors"
        element={<Pages.BioGasBlowersCompressors />}
      />
      <Route path="/air-injection" element={<Pages.AirInjection />} />
      <Route
        path="/rotary-sliding-vane-compressors"
        element={<Pages.SlidingVaneCompressors />}
      />
      <Route
        path="/centrifugal-fans-blowers"
        element={<Pages.CentrifugalFansAndBlowers />}
      />
      <Route path="/sr-series-blowers" element={<Pages.SRSeriesBlowers />} />
      <Route
        path="/dry-screw-vaccum-pump"
        element={<Pages.DryScrewVaccumPump />}
      />
      <Route path="/unauthorised" element={<Unauthorised />} />
    </Routes>
  );
};

export default OptimizedRoutes;
