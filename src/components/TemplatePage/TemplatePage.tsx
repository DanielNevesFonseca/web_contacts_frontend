import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";
import { TTemplatePageProps } from "./@types";

export const TemplatePage = ({ children }: TTemplatePageProps) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};
