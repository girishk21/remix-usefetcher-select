import { useFetcher } from 'remix';

export default function Index() {
  const select = useFetcher();

  return (
    <select.Form
      action="/post-selection"
      method="post"
      onChange={(e) =>
        select.submit(e.currentTarget, {
          method: 'post',
          action: '/post-selection',
        })
      }
    >
      <select name="theme">
        <option>Dark</option>
        <option>Light</option>
      </select>
      <noscript>
        <button>Submit</button>
      </noscript>
    </select.Form>
  );
}
