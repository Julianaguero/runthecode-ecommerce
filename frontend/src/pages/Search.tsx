import { useSearchParams } from "react-router-dom";
import { SearchLayout, SearchResultsWrapper} from "../components/search";

export default function Search() {
  const [searchParams] = useSearchParams()
  const query = searchParams.get("q") || ""

  return (
    <SearchLayout query={query}>
     <SearchResultsWrapper query={query}/>
    </SearchLayout>
  )
}
