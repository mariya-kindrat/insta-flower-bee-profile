// Shared type definitions for the application

export type Category = "bouquet" | "wedding" | "event";

export interface PortfolioItem {
  id: string;
  slug: string;
  title: string;
  category: Category;
  cover: string;
  images?: string[];
  description?: string;
  couple?: string;
  location?: string;
  date?: string;
  palette?: string[];
}

export interface FormInputProps {
  id: string;
  name: string;
  label: string;
  type?: "text" | "email" | "tel" | "date";
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  required?: boolean;
  error?: string;
  icon?: React.ComponentType<{ className?: string; "aria-hidden"?: boolean }>;
}

export interface FormTextareaProps {
  id: string;
  name: string;
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
  required?: boolean;
  error?: string;
  rows?: number;
}

export interface BackButtonProps {
  href?: string;
  label?: string;
  className?: string;
}

export interface GalleryDetailProps {
  title: string;
  description?: string;
  images: string[];
  backHref?: string;
  backLabel?: string;
}

export interface PortfolioCardProps {
  href: string;
  title: string;
  cover: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  eventDate: string;
  city: string;
  inquiryType: string;
  message: string;
}

export interface SubmitStatus {
  type: "success" | "error" | null;
  message: string;
}

export interface PageParams<T = Record<string, string>> {
  params: Promise<T>;
}

export interface RootLayoutProps {
  children: React.ReactNode;
}