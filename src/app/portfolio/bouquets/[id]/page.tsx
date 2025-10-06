import GalleryDetail from "@/components/GaleryDetail";
import { PORTFOLIO_DATA } from "@/store/dummy-store/data";
import { notFound } from "next/navigation";
import { PageParams } from "@/types";

const BouquetDetail = async ({ params }: PageParams<{ id: string }>) => {
  const { id } = await params;
  const item = PORTFOLIO_DATA.find((x) => x.category === "bouquet" && x.id === id);
  if (!item) notFound();

  const images = item.images?.length ? item.images : [item.cover];
  return (
    <GalleryDetail
      title={item.title}
      description={item.description}
      images={images}
      backHref="/portfolio/bouquets"
      backLabel="Back to Bouquets"
    />
  );
};

export default BouquetDetail;