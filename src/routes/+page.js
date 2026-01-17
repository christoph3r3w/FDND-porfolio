/** @type {import('./$types').PageLoad} */
import getDirectusInstance from '$lib/directus';
import { readItems } from '@directus/sdk';
export async function load({ fetch }) {
	const directus = getDirectusInstance(fetch);
	let people = await directus.request(readItems('person'));
	let peep = people.find(p => p.id == 40);
	return {
		peep,
	};
}