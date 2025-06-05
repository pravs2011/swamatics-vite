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
      <Route
        path="/liquid-ring-vacuum-pumps"
        element={<Pages.LiquidRingVaccumPumps />}
      />
      <Route
        path="/oil-vane-vacuum-pump-2"
        element={<Pages.OilVaneVacuumPump />}
      />
      <Route
        path="/mechanical-vacuum-boosters"
        element={<Pages.MechanicalVaccumBoosters />}
      />
      <Route path="/mvr-blowers" element={<Pages.MVRBlowers />} />
      <Route
        path="/vacuum-systems-and-packages"
        element={<Pages.VaccumSystemsPackages />}
      />
      <Route
        path="/condenser-exhausters"
        element={<Pages.CondenserExhausters />}
      />
      <Route
        path="/shell-and-tube-type-heat-exchangers"
        element={<Pages.ShellTubeHeatExchangers />}
      />
      <Route
        path="/acoustic-enclosures-and-silencers"
        element={<Pages.AcousticEnclosuresSilencers />}
      />
      <Route path="/events" element={<Pages.Events />} />
      <Route path="/testimonials" element={<Pages.Testimonials />} />
      <Route path="/awards" element={<Pages.Awards />} />
      <Route path="/contact-us" element={<Pages.ContactUs />} />
      <Route path="/unauthorised" element={<Unauthorised />} />
    </Routes>
  );
};

export default OptimizedRoutes;
