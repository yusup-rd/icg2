import NextIntlProvider from "@/components/Providers/NextIntlProvider";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return <NextIntlProvider>{children}</NextIntlProvider>;
};

export default Providers;
