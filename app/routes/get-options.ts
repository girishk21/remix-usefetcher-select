import { LoaderFunction } from 'remix';

export const loader: LoaderFunction = async ({ request }) => {
  const data = await request.formData();
  console.log(data.get('q'));
  return {};
};
