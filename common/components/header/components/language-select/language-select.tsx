import CaretDownIcon from "./icons/caret-down";
import LanguageIcon from "./icons/language";
import styles from "./language-select.module.css";

export function LanguageSelect() {
  return (
    <div className="inline-flex flex-[0_auto] ml-2 w-auto md:ml-6">
      <span className="block text-white">
        <div className="inline-flex relative">
          <label
            htmlFor="language-select"
            className="pointer-events-none select-none absolute left-9 top-0 z-10 w-0 h-0 overflow-hidden"
          >
            Select language
          </label>
          <div className="inline-flex text-base font-normal items-center relative z-0">
            <div
              role="img"
              aria-hidden="true"
              className="absolute w-4 h-4 left-3 right-auto pointer-events-none"
            >
              <LanguageIcon />
            </div>
            <select
              id="language-select"
              name="LanguageSelect"
              className="select pl-9 pr-7 py-1.5 leading-5 w-2.5 sm:w-auto sm:min-w-[auto] sm:pr-9"
            >
              <option
                lang="uk"
                label="Українська"
                value="uk-UA"
                className="text-[initial] bg-[initial]"
              >
                Українська
              </option>
              <option
                lang="en"
                label="English"
                value="en-UA"
                selected={true}
                className="text-[initial] bg-[initial]"
              >
                English
              </option>
            </select>
            <div aria-hidden="true" className={styles.caretDownIconWrapper}>
              <CaretDownIcon />
            </div>
          </div>
        </div>
      </span>
    </div>
  );
}
