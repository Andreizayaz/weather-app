import { FC, FormEvent, MutableRefObject, ReactElement } from "react";

import "./Search.scss";

type SearchPropsTypes = {
  handleSearch: (e: FormEvent<HTMLFormElement>) => void;
  inputRef: MutableRefObject<HTMLInputElement | null>;
};

export const Search: FC<SearchPropsTypes> = ({
  handleSearch,
  inputRef,
}): ReactElement => (
  <form className="search" onSubmit={handleSearch}>
    <input type="text" placeholder="enter city" ref={inputRef} />
    <button>search</button>
  </form>
);
