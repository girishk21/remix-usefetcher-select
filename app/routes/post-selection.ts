import { ActionFunction } from 'remix';

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();

  console.log('Theme: ' + formData.get('theme'));

  return { ok: true };
};
