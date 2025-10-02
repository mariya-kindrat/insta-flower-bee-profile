import GalleryDetail from "@/components/GaleryDetail";
import { PORTFOLIO_DATA } from "@/store/dummy-store/data";
import { notFound } from "next/navigation";


export default async function WeddingDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const item = PORTFOLIO_DATA.find(x => x.category === "wedding" && x.id === id);
  if (!item) notFound();

  const images = item.images?.length ? item.images : [item.cover];
  return (
    <GalleryDetail
      title={item.title}
      description={item.description}
      images={images}
      backHref="/portfolio/weddings"
      backLabel="Back to Weddings"
    />
  );
}