import { IntlProvider } from "react-intl";
import { useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";
import "./App.css";

import GaspilRoutes from "./Routes/Allroutes";
import AppLocale from "./Utils/AppLocal/Index";
import { defaultTheme } from "./Utils/constants";

function App() {
  const language = useSelector((state) => state.selectLang.language);
  console.log(language, "language--");
  const currentAppLocale = AppLocale[language];
  return (
    <div className="App">
      <ThemeProvider theme={defaultTheme}>
        <IntlProvider
          // locale={currentAppLocale}
          // defaultLocale="en"
          messages={currentAppLocale.messages}
        >
          <GaspilRoutes />
        </IntlProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
