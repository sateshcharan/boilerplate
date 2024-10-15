//react-router
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";

//context
import { UIDataContextProvider } from "@/context/UIDataProvider";
import { ThemeProvider } from "@/context/ThemeProvider";
import { NestedAccordion } from "@/components/ui/custom/NestedAccordion";

function App() {
  return (
    <UIDataContextProvider>
      <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
        <RouterProvider router={router} />
        {/* <NestedAccordion /> */}
      </ThemeProvider>
    </UIDataContextProvider>
  );
}

export default App;
