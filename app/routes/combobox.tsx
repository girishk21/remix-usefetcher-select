import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
  ComboboxOptionText,
} from '@reach/combobox';
import styles from '@reach/combobox/styles.css';
import { LinksFunction, useFetcher } from 'remix';

export const links: LinksFunction = () => [{ rel: 'stylesheet', href: styles }];

export default function () {
  const combobox = useFetcher();

  return (
    <combobox.Form method="get" action="/get-options">
      <Combobox aria-label="choose a fruit">
        <ComboboxInput
          name="q"
          onChange={(e) => combobox.submit(e.target.form)}
        />
        <ComboboxPopover>
          <ComboboxList></ComboboxList>
        </ComboboxPopover>
      </Combobox>
    </combobox.Form>
  );
}
