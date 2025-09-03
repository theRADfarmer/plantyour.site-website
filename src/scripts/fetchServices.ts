// DRY - rather than repeating servicesById["service"] in every file,
// access them all in one file and use where needed
import { servicesById } from "../data/services.ts";

const base = servicesById["base"];
const extraPages = servicesById["extra-pages"];
const cms = servicesById["cms"];
const extraSEO = servicesById["extra-seo"];
const ecommerce = servicesById["ecommerce"];
const hosting = servicesById["hosting"];
const maintenance = servicesById["maintenance"];

export const serviceObjects = {
	base,
	extraPages,
	cms,
	extraSEO,
	ecommerce,
	hosting,
	maintenance
};