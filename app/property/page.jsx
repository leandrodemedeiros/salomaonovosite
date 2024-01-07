import MainPropertyArea from "@/components/MainPropertyArea";
import { propertiesData } from "@/data/data";

export const metadata = {
  title: "Property List | Salomão Imóveis",
};

const Page = () => {
  return <MainPropertyArea propertiesData={propertiesData} />;
};

export default Page;
