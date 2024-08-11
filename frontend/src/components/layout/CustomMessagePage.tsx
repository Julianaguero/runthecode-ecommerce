import SectionTitle from "./SectionTitle";

interface Props {
  type: "isLoading" | "error" | "custom"
  title?: string;
  textInfo?: string;
}

const messageDefaults = {
  isLoading: {
    title: "Loading...",
    textInfo: "Don't panic... we're already there 😪",
  },
  error: {
    title: "Oops, something went wrong...",
    textInfo: "An unexpected error has occurred. Please try again later.",
  },
  custom: {
    title: "Page Not Found",
    textInfo: "Sorry, an unexpected error has occurred.",
  },
};

export default function CustomMessagePage({
  type,
  title,
  textInfo,
}: Props) {
  const defaultTitle = messageDefaults[type].title;
  const defaultTextInfo = messageDefaults[type].textInfo

  
  return (
    <div className="p-8 h-full min-h-[50vh] flex flex-col gap-4 justify-center items-center">
      <SectionTitle customStyle="text-yellowbright mb-4">
        {title || defaultTitle}
      </SectionTitle>

      <p>{textInfo || defaultTextInfo}</p>
    </div>
  );
}


