import NextIntlProvider from "@/components/Providers/NextIntlProvider";
import { ThemeProvider } from "@/components/Providers/ThemeProvider";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <NextIntlProvider>
      <ThemeProvider>{children}</ThemeProvider>
    </NextIntlProvider>
  );
};

export default Providers;
