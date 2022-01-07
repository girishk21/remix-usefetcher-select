import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
} from "@reach/combobox";
import styles from "@reach/combobox/styles.css";
import { LinksFunction, useFetcher } from "remix";

export const links: LinksFunction = () => [{ rel: "stylesheet", href: styles }];

export default function () {
  const combobox = useFetcher();
  console.log(combobox.data);

  return (
    <combobox.Form method="get" action="/get-options">
      <Combobox aria-label="choose a fruit">
        <ComboboxInput
          name="q"
          onChange={(e) => combobox.submit(e.target.form)}
        />
        {combobox.data && (
          <ComboboxPopover>
            {combobox.data.sort.length ? (
              <ComboboxList>
                {(combobox.data.sort as { name: string }[]).map(
                  ({ name }, i) => (
                    <ComboboxOption key={i} value={name} />
                  )
                )}
              </ComboboxList>
            ) : null}
          </ComboboxPopover>
        )}
      </Combobox>
    </combobox.Form>
  );
}
