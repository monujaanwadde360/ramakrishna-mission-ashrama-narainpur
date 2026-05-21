// src/App.jsx

import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";

/* ================= ADMIN ================= */
import AdminDashboard from "./admin/AdminDashboard";
import AdminLogin from "./admin/AdminLogin";

/* ================= COMPONENTS ================= */
import ProtectedRoute from "./components/ProtectedRoute";

/* ================= PUBLIC ================= */
import MainHome from "./pages/public/MainHome";
import AbujhmarhSection from "./pages/public/AbujhmarhSection";
import Activities from "./pages/public/Activities";
import DonateSection from "./pages/public/DonateSection";
import ReachAndTimings from "./pages/public/ReachAndTimings";

// FC
import FCDonation from "./pages/fc/FCDonation";

/* ================= ABOUT US ================= */
import OurInspiration from "./aboutus/ourinspiration/OurInspiration";
import SriRamakrishna from "./aboutus/ourinspiration/SriRamakrishna";
import SriSaradaDevia from "./aboutus/ourinspiration/SriSaradaDevi";
import SwamiVivekananda from "./aboutus/ourinspiration/SwamiVivekananda";

import HistoryAshrama from "./aboutus/HistoryAshrama";
import ImportantMilestones from "./aboutus/ImportantMilestones";
import AwardsRecognition from "./aboutus/AwardsRecognition";
import IdeologyVision from "./aboutus/IdeologyVision";
import FAQsRamakrishnaOrder from "./aboutus/FAQsRamakrishnaOrder";

/* ================= ADMISSION ================= */
import AdmissionRules from "./admission/AdmissionRules";
import ModelQuestions from "./admission/ModelQuestions";

/* ================= ACTIVITIES ================= */
import Education from "./activities/Education";
import Healthcare from "./activities/Healthcare";
import IntegratedRuralDevelopment from "./activities/IntegratedRuralDevelopment";

/* ================= DONATION ================= */
import DonationAppeal from "./donation/DonationAppeal";
import OnlineDonation from "./donation/OnlineDonation";

// TERMS AND POLICY
import TermsAndConditions from "./terms-and-policy/TermsAndConditions";
import RefundAndCancellationPolicy from "./terms-and-policy/RefundAndCancellationPolicy";
import PrivacyPolicy from "./terms-and-policy/PrivacyPolicy";

function App() {
  return (
    <>
      {/* THIS MUST BE OUTSIDE ROUTES */}
      <ScrollToTop />

      <Routes>
        {/* HOME */}
        <Route path="/" element={<MainHome />} />
        <Route path="/abujhmarh" element={<AbujhmarhSection />} />
        <Route path="/activities" element={<Activities />} />
        <Route path="/donate" element={<DonateSection />} />
        <Route path="/reach-and-timings" element={<ReachAndTimings />} />


        {/* OUR INSPIRATION */}
        <Route path="/aboutus/ourinspiration" element={<OurInspiration />} />
        <Route path="/aboutus/ourinspiration/ramakrishna" element={<SriRamakrishna />} />
        <Route path="/aboutus/ourinspiration/sarada-devi" element={<SriSaradaDevia />} />
        <Route path="/aboutus/ourinspiration/vivekananda" element={<SwamiVivekananda />} />

        <Route path="/aboutus/history" element={<HistoryAshrama />} />
        <Route path="/aboutus/milestones" element={<ImportantMilestones />} />
        <Route path="/aboutus/awards" element={<AwardsRecognition />} />
        <Route path="/aboutus/ideology" element={<IdeologyVision />} />
        <Route path="/aboutus/faqs" element={<FAQsRamakrishnaOrder />} />

        {/* ADMIN */}
        <Route path="/admin" element={<AdminLogin />} />
        <Route
          path="/admin/dashboard"
          element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />

        {/* ADMISSION */}
        <Route path="/academics/admission-rules" element={<AdmissionRules />} />
        <Route path="/academics/model-questions" element={<ModelQuestions />} />

        {/* ACTIVITIES */}
        <Route path="/activities/education" element={<Education />} />
        <Route path="/activities/healthcare" element={<Healthcare />} />
        <Route path="/activities/integrated-rural-development" element={<IntegratedRuralDevelopment />} />

        {/* DONATION */}
        <Route path="/donate/appeal" element={<DonationAppeal />} />
        <Route path="/donate/online-donation" element={<OnlineDonation />} />

        {/* fc */}
        <Route path="/fc/fc-donation" element={<FCDonation />} />
        
        {/* TERMS AND POLICY */}
        <Route path="/term-and-policy/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="/term-and-policy/refund-cancellation-policy" element={<RefundAndCancellationPolicy />} />
        <Route path="/term-and-policy/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>

    </>
  );
}

export default App;