import AppHeader from "./components/AppHeader";
import AttendanceTracker from "./components/AttendanceTracker";
import CopyrightNotice from "./components/CopyrightNotice";

function App(): JSX.Element {
  return (
    <>
      <AppHeader title={"Tg"} />
      <AttendanceTracker />
      <CopyrightNotice author={""} year={new Date().getFullYear()} />
    </>
  );
}

export default App;
